// Practice exam mode: builds a domain-weighted exam from the question bank,
// runs a timed session, scores it, and provides a full answer review.

const Exam = {
  questions: [],      // the assembled exam (with shuffled options)
  answers: [],        // per-question: Set of selected option indexes
  flags: [],          // per-question: boolean
  index: 0,
  inProgress: false,
  timed: true,
  timerId: null,
  endTime: null,
  result: null,

  // ---------- Intro ----------
  showIntro() {
    document.getElementById("exam-q-count").textContent = EXAM_CONFIG.totalQuestions;
    document.getElementById("exam-duration").textContent = EXAM_CONFIG.durationMinutes;
    this.renderHistory();
    App.show("exam-intro");
  },

  renderHistory() {
    const stats = App.loadStats();
    const exams = (stats.exams || []).slice().reverse();
    const wrap = document.getElementById("exam-history");
    wrap.hidden = exams.length === 0;
    if (!exams.length) return;
    document.getElementById("exam-history-list").innerHTML = exams.map(e => {
      const date = new Date(e.date).toLocaleDateString(undefined,
        { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
      const badge = e.passed
        ? '<span class="history-badge pass">PASS</span>'
        : '<span class="history-badge fail">FAIL</span>';
      return `<div class="history-row"><span>${date}</span><span>${e.correct}/${e.total} · ${e.percent}%</span>${badge}</div>`;
    }).join("");
  },

  // ---------- Exam assembly ----------
  build() {
    const exam = [];
    for (const [domain, count] of Object.entries(EXAM_CONFIG.distribution)) {
      const pool = App.shuffle(QUESTION_BANK.filter(q => q.domain === domain));
      exam.push(...pool.slice(0, Math.min(count, pool.length)));
    }
    // Shuffle question order, then shuffle each question's options while
    // tracking where the correct answers land.
    return App.shuffle(exam).map(q => {
      const order = App.shuffle(q.options.map((_, i) => i));
      return {
        domain: q.domain,
        question: q.question,
        multi: !!q.multi,
        options: order.map(i => q.options[i]),
        correct: q.correct.map(ci => order.indexOf(ci)).sort((a, b) => a - b),
        explanation: q.explanation
      };
    });
  },

  start() {
    this.questions = this.build();
    this.answers = this.questions.map(() => new Set());
    this.flags = this.questions.map(() => false);
    this.index = 0;
    this.inProgress = true;
    this.timed = document.getElementById("exam-timed").checked;
    document.getElementById("exam-total").textContent = this.questions.length;

    clearInterval(this.timerId);
    const timerEl = document.getElementById("exam-timer");
    if (this.timed) {
      this.endTime = Date.now() + EXAM_CONFIG.durationMinutes * 60 * 1000;
      timerEl.hidden = false;
      timerEl.classList.remove("warning");
      this.tick();
      this.timerId = setInterval(() => this.tick(), 1000);
    } else {
      timerEl.hidden = true;
    }

    this.renderQuestion();
    App.show("exam-session");
  },

  tick() {
    const remaining = Math.max(0, this.endTime - Date.now());
    const totalSec = Math.round(remaining / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    const timerEl = document.getElementById("exam-timer");
    timerEl.textContent = `${min}:${String(sec).padStart(2, "0")}`;
    if (totalSec <= 300) timerEl.classList.add("warning");
    if (remaining <= 0) {
      alert("Time is up! The exam will be submitted now.");
      this.submit();
    }
  },

  // ---------- Question rendering ----------
  renderQuestion() {
    const q = this.questions[this.index];
    const selected = this.answers[this.index];

    document.getElementById("exam-position").textContent = this.index + 1;
    document.getElementById("exam-progress").style.width =
      (100 * (this.index + 1) / this.questions.length) + "%";
    document.getElementById("question-domain").textContent = EXAM_DOMAINS[q.domain].name;
    document.getElementById("question-text").textContent = q.question;
    document.getElementById("question-note").hidden = !q.multi;
    const flagBtn = document.getElementById("exam-flag");
    flagBtn.classList.toggle("flagged", this.flags[this.index]);
    flagBtn.textContent = this.flags[this.index] ? "🚩 Flagged" : "🚩 Flag";

    const letters = "ABCDE";
    const list = document.getElementById("options-list");
    list.innerHTML = q.options.map((opt, i) => `
      <div class="option${selected.has(i) ? " selected" : ""}" data-i="${i}" role="${q.multi ? "checkbox" : "radio"}"
           aria-checked="${selected.has(i)}" tabindex="0">
        <span class="option-letter">${letters[i]}</span><span>${opt}</span>
      </div>`).join("");

    list.querySelectorAll(".option").forEach(el => {
      const choose = () => this.select(Number(el.dataset.i));
      el.addEventListener("click", choose);
      el.addEventListener("keydown", e => {
        if (e.key === " " || e.key === "Enter") { e.preventDefault(); choose(); }
      });
    });

    document.getElementById("exam-prev").disabled = this.index === 0;
    document.getElementById("exam-next").textContent =
      this.index === this.questions.length - 1 ? "Overview →" : "Next →";
  },

  select(i) {
    const q = this.questions[this.index];
    const sel = this.answers[this.index];
    if (q.multi) {
      if (sel.has(i)) sel.delete(i);
      else sel.add(i);
    } else {
      sel.clear();
      sel.add(i);
    }
    this.renderQuestion();
  },

  toggleFlag() {
    this.flags[this.index] = !this.flags[this.index];
    this.renderQuestion();
  },

  go(delta) {
    const next = this.index + delta;
    if (next < 0) return;
    if (next >= this.questions.length) { this.showOverview(); return; }
    this.index = next;
    this.renderQuestion();
  },

  // ---------- Overview ----------
  showOverview() {
    const grid = document.getElementById("overview-grid");
    grid.innerHTML = this.questions.map((_, i) => {
      const cls = [
        "overview-cell",
        this.answers[i].size ? "answered" : "",
        this.flags[i] ? "flagged" : ""
      ].join(" ").trim();
      return `<button class="${cls}" data-i="${i}">${i + 1}</button>`;
    }).join("");
    grid.querySelectorAll(".overview-cell").forEach(el => {
      el.addEventListener("click", () => {
        this.index = Number(el.dataset.i);
        this.renderQuestion();
        App.show("exam-session");
      });
    });
    App.show("exam-overview");
  },

  // ---------- Scoring ----------
  submit() {
    const unanswered = this.answers.filter(a => a.size === 0).length;
    if (unanswered > 0 && this.timed && Date.now() < this.endTime - 500) {
      if (!confirm(`You have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Submit anyway?`)) return;
    } else if (unanswered > 0 && !this.timed) {
      if (!confirm(`You have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Submit anyway?`)) return;
    }

    clearInterval(this.timerId);
    this.inProgress = false;

    const perDomain = {};
    for (const d of Object.keys(EXAM_DOMAINS)) perDomain[d] = { correct: 0, total: 0 };

    let correctCount = 0;
    this.questions.forEach((q, i) => {
      const chosen = Array.from(this.answers[i]).sort((a, b) => a - b);
      const ok = chosen.length === q.correct.length &&
                 chosen.every((v, k) => v === q.correct[k]);
      if (ok) correctCount++;
      perDomain[q.domain].total++;
      if (ok) perDomain[q.domain].correct++;
      q.wasCorrect = ok;
    });

    const percent = Math.round(100 * correctCount / this.questions.length);
    const passed = percent >= EXAM_CONFIG.passingPercent;
    // Approximate scaled score: linear map of percentage onto 100–1000.
    const scaled = Math.round(100 + (percent / 100) * 900);

    this.result = {
      date: new Date().toISOString(),
      correct: correctCount,
      total: this.questions.length,
      percent,
      scaled,
      passed,
      perDomain
    };
    App.recordExam({
      date: this.result.date, correct: correctCount,
      total: this.questions.length, percent, passed
    });
    this.showResults();
  },

  showResults() {
    const r = this.result;
    const verdict = document.getElementById("result-verdict");
    verdict.textContent = r.passed ? "PASS 🎉" : "Not this time — keep going!";
    verdict.className = r.passed ? "result-pass" : "result-fail";

    const ring = document.getElementById("score-ring");
    ring.style.setProperty("--pct", r.percent);
    ring.style.setProperty("--ring-color", r.passed ? "var(--green)" : "var(--red)");
    document.getElementById("score-percent").textContent = r.percent + "%";

    document.getElementById("exam-result-detail").innerHTML =
      `${r.correct} of ${r.total} questions correct · estimated scaled score ≈ <strong>${r.scaled}/1000</strong> ` +
      `(passing: 700). This estimate is approximate — the real exam uses statistical scaling and includes 15 unscored questions.`;

    document.getElementById("domain-results").innerHTML =
      Object.entries(EXAM_DOMAINS).map(([d, meta]) => {
        const s = r.perDomain[d];
        const pct = s.total ? Math.round(100 * s.correct / s.total) : 0;
        const cls = pct >= 80 ? "" : pct >= 60 ? "mid" : "low";
        return `
          <div class="domain-row">
            <div class="domain-row-head">
              <span>${meta.name} <small>(${s.correct}/${s.total})</small></span>
              <span class="pct">${pct}%</span>
            </div>
            <div class="domain-bar"><div class="domain-bar-fill ${cls}" style="width:${pct}%"></div></div>
          </div>`;
      }).join("");

    App.show("exam-results");
  },

  // ---------- Review ----------
  showReview() {
    const wrongOnly = document.getElementById("review-wrong-only").checked;
    const letters = "ABCDE";
    const items = this.questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => !wrongOnly || !q.wasCorrect);

    document.getElementById("review-list").innerHTML = items.length ? items.map(({ q, i }) => {
      const chosen = this.answers[i];
      const options = q.options.map((opt, oi) => {
        const isCorrect = q.correct.includes(oi);
        const wasChosen = chosen.has(oi);
        let cls = "review-option";
        if (isCorrect) cls += " is-correct";
        else if (wasChosen) cls += " was-chosen-wrong";
        const marker = isCorrect ? "✔" : wasChosen ? "✘" : "";
        const you = wasChosen ? " (your answer)" : "";
        return `<div class="${cls}"><span class="marker">${marker}</span>${letters[oi]}. ${opt}${you}</div>`;
      }).join("");
      return `
        <div class="review-item ${q.wasCorrect ? "correct" : "incorrect"}">
          <div class="review-head">
            <span>Q${i + 1} · ${EXAM_DOMAINS[q.domain].name}${q.multi ? " · multiple response" : ""}</span>
            <span class="review-verdict ${q.wasCorrect ? "ok" : "bad"}">${q.wasCorrect ? "Correct" : chosen.size ? "Incorrect" : "Not answered"}</span>
          </div>
          <div class="review-question">${q.question}</div>
          <div class="review-options">${options}</div>
          <div class="review-explanation"><strong>Explanation:</strong> ${q.explanation}</div>
        </div>`;
    }).join("") : '<p class="view-sub">No incorrect answers — perfect score! 🎉</p>';

    App.show("exam-review");
  },

  abandon() {
    clearInterval(this.timerId);
    this.inProgress = false;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("exam-start").addEventListener("click", () => Exam.start());
  document.getElementById("exam-prev").addEventListener("click", () => Exam.go(-1));
  document.getElementById("exam-next").addEventListener("click", () => Exam.go(1));
  document.getElementById("exam-flag").addEventListener("click", () => Exam.toggleFlag());
  document.getElementById("exam-overview-btn").addEventListener("click", () => Exam.showOverview());
  document.getElementById("overview-back").addEventListener("click", () => {
    Exam.renderQuestion();
    App.show("exam-session");
  });
  document.getElementById("exam-submit").addEventListener("click", () => Exam.submit());
  document.getElementById("exam-quit").addEventListener("click", () => {
    if (confirm("Quit the exam? Your progress will be lost.")) {
      Exam.abandon();
      Exam.showIntro();
    }
  });
  document.getElementById("exam-review").addEventListener("click", () => Exam.showReview());
  document.getElementById("exam-retake").addEventListener("click", () => Exam.showIntro());
  document.getElementById("review-back").addEventListener("click", () => App.show("exam-results"));
  document.getElementById("review-wrong-only").addEventListener("change", () => Exam.showReview());
});
