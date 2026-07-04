// Flashcards mode: category selection, study session, and session results.

const Flashcards = {
  selected: new Set(),
  deck: [],
  index: 0,
  known: 0,
  missed: [],       // cards marked "still learning" this session
  flipped: false,

  // ---------- Setup ----------
  showSetup() {
    const grid = document.getElementById("category-grid");
    grid.innerHTML = FLASHCARD_CATEGORIES.map(cat => {
      const count = FLASHCARDS.filter(c => c.category === cat.id).length;
      const sel = this.selected.has(cat.id) ? " selected" : "";
      return `
        <div class="category-card${sel}" data-cat="${cat.id}" role="checkbox" aria-checked="${!!sel}" tabindex="0">
          <span class="category-icon">${cat.icon}</span>
          <span>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">${count} cards</div>
          </span>
          <span class="category-check">✓</span>
        </div>`;
    }).join("");

    grid.querySelectorAll(".category-card").forEach(card => {
      const toggle = () => {
        const id = card.dataset.cat;
        if (this.selected.has(id)) this.selected.delete(id);
        else this.selected.add(id);
        card.classList.toggle("selected", this.selected.has(id));
        card.setAttribute("aria-checked", this.selected.has(id));
        this.updateStartButton();
      };
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", e => {
        if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggle(); }
      });
    });

    this.updateStartButton();
    App.show("flashcard-setup");
  },

  updateStartButton() {
    const count = FLASHCARDS.filter(c => this.selected.has(c.category)).length;
    document.getElementById("fc-count").textContent = count;
    document.getElementById("fc-start").disabled = count === 0;
  },

  selectAll(on) {
    this.selected = on ? new Set(FLASHCARD_CATEGORIES.map(c => c.id)) : new Set();
    this.showSetup();
  },

  // ---------- Session ----------
  start(cards) {
    let deck = cards || FLASHCARDS.filter(c => this.selected.has(c.category));
    if (!deck.length) return;
    if (document.getElementById("fc-shuffle").checked) deck = App.shuffle(deck);
    this.deck = deck;
    this.index = 0;
    this.known = 0;
    this.missed = [];
    document.getElementById("fc-total").textContent = deck.length;
    this.renderCard();
    App.show("flashcard-session");
  },

  categoryName(id) {
    const cat = FLASHCARD_CATEGORIES.find(c => c.id === id);
    return cat ? `${cat.icon} ${cat.name}` : "";
  },

  renderCard() {
    const card = this.deck[this.index];
    this.flipped = false;
    document.getElementById("flashcard").classList.remove("flipped");
    // Swap text after the un-flip transition would have finished to avoid showing
    // the next answer mid-turn; instant here is fine since content changes.
    document.getElementById("card-category").textContent = this.categoryName(card.category);
    document.getElementById("card-category-back").textContent = this.categoryName(card.category);
    document.getElementById("card-front").textContent = card.front;
    document.getElementById("card-back").textContent = card.back;
    document.getElementById("fc-position").textContent = this.index + 1;
    document.getElementById("fc-known").textContent = this.known;
    document.getElementById("fc-unknown").textContent = this.missed.length;
    document.getElementById("fc-progress").style.width =
      (100 * this.index / this.deck.length) + "%";
  },

  flip() {
    this.flipped = !this.flipped;
    document.getElementById("flashcard").classList.toggle("flipped", this.flipped);
  },

  answer(knewIt) {
    const card = this.deck[this.index];
    if (knewIt) this.known++;
    else this.missed.push(card);
    this.index++;
    if (this.index >= this.deck.length) this.finish();
    else this.renderCard();
  },

  finish() {
    App.recordFlashcardSession(this.deck.length, this.known);
    const pct = Math.round(100 * this.known / this.deck.length);
    document.getElementById("fc-result-summary").textContent =
      `${this.known} / ${this.deck.length} known (${pct}%)`;
    document.getElementById("fc-result-detail").textContent =
      this.missed.length === 0
        ? "Perfect — you knew every card in this session!"
        : `${this.missed.length} card${this.missed.length === 1 ? "" : "s"} marked as still learning.`;
    document.getElementById("fc-review-missed").hidden = this.missed.length === 0;
    App.show("flashcard-done");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fc-select-all").addEventListener("click", () => Flashcards.selectAll(true));
  document.getElementById("fc-select-none").addEventListener("click", () => Flashcards.selectAll(false));
  document.getElementById("fc-start").addEventListener("click", () => Flashcards.start());
  document.getElementById("fc-exit").addEventListener("click", () => Flashcards.showSetup());

  document.getElementById("flashcard").addEventListener("click", () => Flashcards.flip());
  document.getElementById("fc-flip").addEventListener("click", () => Flashcards.flip());
  document.getElementById("fc-know").addEventListener("click", () => Flashcards.answer(true));
  document.getElementById("fc-dont-know").addEventListener("click", () => Flashcards.answer(false));

  document.getElementById("fc-restart").addEventListener("click", () => Flashcards.start());
  document.getElementById("fc-review-missed").addEventListener("click", () =>
    Flashcards.start(Flashcards.missed.slice()));

  // Keyboard shortcuts during a flashcard session
  document.addEventListener("keydown", e => {
    if (document.getElementById("view-flashcard-session").hidden) return;
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === " ") { e.preventDefault(); Flashcards.flip(); }
    else if (e.key === "ArrowRight") Flashcards.answer(true);
    else if (e.key === "ArrowLeft") Flashcards.answer(false);
  });
});
