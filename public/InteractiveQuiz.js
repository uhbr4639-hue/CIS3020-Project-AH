const questions = [
  {
    question: "What does this definition describe? 'In finance, it is a collection of investments made by an entity, usually with certain, set financial goals.'",
    choices: ["Share", "Shareholder", "Portfolio", "Dividend"],
    answer: "Portfolio"
  },
  {
    question: "What does this definition describe? 'These are units of a company's stock that are owned by shareholders and can be quantified.'",
    choices: ["Portfolio", "Asset", "Share", "Equity"],
    answer: "Share"
  },
  {
    question: "What does this definition describe? 'These are essentially a partial ownership of a company's assets and future income that can be bought by investors. This is usually done by investors in order to sell them at a higher price than they were bought, assuming that the company has increased in value, but also to recieve dividends.'",
    choices: ["Share", "Stock", "Liability", "Capital Gain"],
    answer: "Stock"
  },
  {
    question: "What does this definition describe? 'It is the profit recieved from the sale of asset(s) or from investments.'",
    choices: ["Dividend", "Cash Flow", "Liability", "Capital Gain"],
    answer: "Capital Gain"
  },
  {
    question: "What does this definition describe? 'These are people who owns shares of a company and are likely recieving various benefits, depending on the arrangement.'",
    choices: ["Shareholder", "Dividend", "Asset", "Equity"],
    answer: "Shareholder"
  },
  {
    question: "What does this definition describe? 'Anything that holds current or future economic value that any entity (person, company, etc.) owns.'",
    choices: ["Asset", "Stock", "Share", "Portfolio"],
    answer: "Asset"
  },
  {
    question: "What does this definition describe? 'This is the amount of money that a company pays its shareholders based on a portion of its profits.'",
    choices: ["Stock", "Dividend", "Share", "Asset"],
    answer: "Dividend"
  },
  {
    question: "What does this definition describe? 'This refers to the overall amount of money that goes into and out of a business or project.'",
    choices: ["Shareholder", "Equity", "Capital Gain", "Cash Flow"],
    answer: "Cash Flow"
  },
  {
    question: "What does this definition describe? 'It is any sort of debt or financial obligation an entity is expected to pay another party.'",
    choices: ["Stock", "Asset", "Liability", "Equity"],
    answer: "Liability"
  },
  {
    question: "What does this definition describe? 'This is the value of an asset after subtracting any potential liabilities from it.'",
    choices: ["Capital Gain", "Dividend", "Cash Flow", "Equity"],
    answer: "Equity"
  },
];
let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').textContent = q.question;
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';
  q.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesDiv.appendChild(btn);
  });
}

function selectAnswer(choice) {
  if (choice === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz-container').style.display = 'none';
  let message = '';
  if (score === questions.length) {
    message = "A perfect score! You've mastered the key terms of basic finance!";
  } else if (score >= questions.length * 0.8) {
    message = "Good job! I can tell you've been studying! Try to get a perfect score next time!";
  } else if (score >= questions.length * 0.5) {
    message = "Not bad! Keep studying and try again.";
  } else {
    message = "Too bad! <a href='keyterms.html' target='_blank'>Study the key terms</a> and try again!";
  }

  document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}. ${message}`;
}

showQuestion();