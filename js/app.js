// Shared app logic: navigation, helpers, and progress stats.

const App = {
  views: [
    "home", "flashcard-setup", "flashcard-session", "flashcard-done",
    "exam-intro", "exam-session", "exam-overview", "exam-results", "exam-review"
  ],

  show(view) {
    for (const v of this.views) {
      document.getElementById("view-" + v).hidden = v !== view;
    }
    document.querySelectorAll(".nav-btn").forEach(btn => {
      const nav = btn.dataset.nav;
      const active =
        (nav === "home" && view === "home") ||
        (nav === "flashcards" && view.startsWith("flashcard")) ||
        (nav === "exam" && view.startsWith("exam"));
      btn.classList.toggle("active", active);
    });
    window.scrollTo({ top: 0 });
  },

  navigate(target) {
    // Leaving an in-progress exam requires confirmation.
    if (typeof Exam !== "undefined" && Exam.inProgress) {
      if (!confirm("Leave the exam? Your progress will be lost.")) return;
      Exam.abandon();
    }
    if (target === "home") {
      this.renderStats();
      this.show("home");
    } else if (target === "flashcards") {
      Flashcards.showSetup();
    } else if (target === "exam") {
      Exam.showIntro();
    }
  },

  shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  // ---------- Persistent stats (localStorage) ----------
  STORAGE_KEY: "clf-c02-study-stats",

  loadStats() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  },

  saveStats(stats) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(stats));
    } catch {
      /* storage unavailable (private mode) — stats simply aren't persisted */
    }
  },

  recordFlashcardSession(total, known) {
    const s = this.loadStats();
    s.cardsStudied = (s.cardsStudied || 0) + total;
    s.cardsKnown = (s.cardsKnown || 0) + known;
    s.flashcardSessions = (s.flashcardSessions || 0) + 1;
    this.saveStats(s);
  },

  recordExam(result) {
    const s = this.loadStats();
    s.exams = s.exams || [];
    s.exams.push(result);
    if (s.exams.length > 20) s.exams = s.exams.slice(-20);
    this.saveStats(s);
  },

  renderStats() {
    const s = this.loadStats();
    const panel = document.getElementById("home-stats");
    const grid = document.getElementById("stats-grid");
    const hasData = (s.flashcardSessions || 0) > 0 || (s.exams || []).length > 0;
    panel.hidden = !hasData;
    if (!hasData) return;

    const exams = s.exams || [];
    const bestScore = exams.length ? Math.max(...exams.map(e => e.percent)) : null;
    const lastScore = exams.length ? exams[exams.length - 1].percent : null;
    const passes = exams.filter(e => e.passed).length;

    const tiles = [
      { value: s.cardsStudied || 0, label: "Flashcards reviewed" },
      {
        value: s.cardsStudied ? Math.round(100 * (s.cardsKnown || 0) / s.cardsStudied) + "%" : "—",
        label: "Cards marked known"
      },
      { value: exams.length, label: "Practice exams taken" },
      { value: bestScore !== null ? bestScore + "%" : "—", label: "Best exam score" },
      { value: lastScore !== null ? lastScore + "%" : "—", label: "Latest exam score" },
      { value: exams.length ? passes + "/" + exams.length : "—", label: "Exams passed" }
    ];
    grid.innerHTML = tiles.map(t =>
      `<div class="stat-tile"><div class="stat-value">${t.value}</div><div class="stat-label">${t.label}</div></div>`
    ).join("");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Header + generic navigation buttons
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", e => {
      // Ignore clicks that bubble from a nested [data-nav] button inside mode cards
      if (el.classList.contains("mode-card") && e.target.closest(".btn")) {
        e.stopPropagation();
      }
      App.navigate(el.dataset.nav);
    });
  });
  document.getElementById("brand-link").addEventListener("click", e => {
    e.preventDefault();
    App.navigate("home");
  });
  document.getElementById("reset-stats").addEventListener("click", () => {
    if (confirm("Reset all saved progress and exam history?")) {
      localStorage.removeItem(App.STORAGE_KEY);
      App.renderStats();
    }
  });

  document.getElementById("home-card-count").textContent = FLASHCARDS.length;
  document.getElementById("home-cat-count").textContent = FLASHCARD_CATEGORIES.length;

  App.renderStats();
  App.show("home");
});
