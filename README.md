# ☁️ AWS Cloud Practitioner Study Tool (CLF-C02)

A free, open-source study tool for the **AWS Certified Cloud Practitioner** exam (CLF-C02).
It runs 100% in the browser with no build step, no backend, and no dependencies — perfect for GitHub Pages.

## Features

### 🗂️ Flashcards
- **154 flashcards** across **11 categories**: Cloud Concepts, Security & Compliance, Compute, Storage, Databases, Networking & Content Delivery, Management & Governance, Billing & Pricing, Support & Resources, AI/ML & Analytics, and App Integration & Dev Tools
- Study **one category, several, or all of them** at once
- Flip animation, shuffle mode, and keyboard shortcuts (`Space` to flip, `→` got it, `←` still learning)
- End-of-session summary with the option to re-study just the cards you missed

### 📝 Full practice exam
- **65 questions in 90 minutes**, modeled on the real exam
- Questions are drawn randomly from a **124-question bank** using the official domain weighting:
  - Cloud Concepts — 24%
  - Security and Compliance — 30%
  - Cloud Technology and Services — 34%
  - Billing, Pricing, and Support — 12%
- Multiple-choice **and** multiple-response ("Select TWO") questions, with answer options shuffled every time
- Flag questions for review, jump around with the overview grid
- Countdown timer with auto-submit (or switch to untimed mode)
- Detailed results: pass/fail against a 70% bar (≈ the real 700/1000 scaled score), per-domain score breakdown, and a **full answer review with explanations** for every question

### 📈 Progress tracking
- Flashcard accuracy and exam history saved locally in your browser (localStorage) — no accounts, no tracking

## Run it on GitHub Pages

1. Go to the repository **Settings → Pages**
2. Under **Build and deployment**, set **Source** to *Deploy from a branch*
3. Select the **main** branch and the **/ (root)** folder, then click **Save**
4. Your study tool will be live at `https://<username>.github.io/<repository>/` within a minute or two

## Run it locally

No tooling needed — just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Project structure

```
index.html          # single-page app shell (all views)
css/style.css       # styles
js/app.js           # navigation, helpers, progress stats
js/flashcards.js    # flashcard mode
js/exam.js          # practice exam engine (sampling, timer, scoring, review)
data/flashcards.js  # flashcard content bank
data/questions.js   # exam question bank with explanations
```

## Content accuracy

All flashcards and questions were written against **official AWS documentation** and the
[official CLF-C02 exam guide](https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf),
covering the services and concepts in scope for the exam. Explanations accompany every practice
question. If you spot an inaccuracy, please open an issue or a pull request — AWS evolves quickly.

## About the real exam

| | |
|---|---|
| Questions | 65 (50 scored + 15 unscored) |
| Duration | 90 minutes |
| Format | Multiple choice & multiple response |
| Passing score | 700 / 1000 (scaled) |
| Cost | $100 USD |

Good luck with your certification! 🎓

---
*This project is not affiliated with, endorsed by, or sponsored by Amazon Web Services, Inc.*
