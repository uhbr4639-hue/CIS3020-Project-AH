const scenarios = [
  {
    scenario: "You decided that you want to start investing into stocks. A particular company has your interest since it is preforming well, and it seems to have good future prospects. If things keep going well, you could make very good returns if you buy now. Should you invest everything into that company or diversify?",
    choices: ["Invest Everything", "Diversify"],
    answer: "Diversify",
	wrongFeedback: "The correct answer is to diversify. Even though you are confident in your company's success, it is not worth putting all of your eggs in one basket. It leads to a high risk acceptance, and there is a chance for unpredictable factors to interfere with expectations."
  },
  {
    scenario: "One of your stock's value has decreased quite a bit since you started investing. However, there is no reason to believe that it won't ever rise again, and you don't particularly need money right now. Should you try to sell quickly before it loses any more value? <img src='https://t3.ftcdn.net/jpg/03/86/31/30/360_F_386313024_GAn8AVgAmPP17bu8JG2ksRLZENrM53tB.jpg' alt='Decreasing Value' width='600' height='300'>",
    choices: ["Wait", "Sell"],
    answer: "Wait",
	wrongFeedback: "The correct answer is to wait. Selling at a loss is never worth it unless you desperately need the money now or if it is clear that the business will never recover and only keep going down."
  },
  {
    scenario: "One of your stocks has had a drastic downward dip in value, and you had to sell it at a low value. Should you sell all of your other diversified stocks now, just in case the same thing starts to happens to them?",
    choices: ["Wait", "Sell"],
    answer: "Wait",
	wrongFeedback: "The correct answer is to wait, once again. Unless there is a specific reason to believe that any of your other stocks will start to plummet forever, there is no need to panic. You should always be informing yourself about the state of your investments before making a serious decision."
  },
  {
    scenario: "One of your stocks has reached a peak of value, but you've been holding onto it and waiting for higher returns. Suddenly, the current CEO of the company has a major scandal. A new CEO steps up with completely different values and policies that loses the companies' good faith with its customers. The stock value has just started decreasing sharply. Should you hold onto the stocks in hopes that it recovers quickly and reaches a new peak or sell now?<img src='https://preview.redd.it/predicting-sudden-drops-v0-mxhwxdueuv0e1.jpeg?auto=webp&s=92a14d0a10e62ae63e8ded4c61f90d07697090dc' alt='Peak Followed By Dip' width='500' height='250'>",
    choices: ["Wait", "Sell"],
    answer: "Sell",
	wrongFeedback: "The correct answer is to sell. It is pretty clear that the value of the company will keep decreasing because of the various incidents, so it is worth selling the stocks before they start becoming a loss. It is possible that the company will recover and reach a new peak, but it seems very unlikely. Selling it now while it's still close to its peak means that you, at least, made some good returns, which is never bad."
  },
];
let currentScenario = 0;
let score = 0;
const feedbackArea = document.getElementById('feedback-area');
const nextbtn = document.getElementById('next-button');

function showScenario() {
  const q = scenarios[currentScenario];
  document.getElementById('scenarios').innerHTML = q.scenario;
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';
  feedbackArea.innerHTML = '';
  nextbtn.style.display = 'none';
  
  q.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesDiv.appendChild(btn);
  });
}

function selectAnswer(choice) {
	const q = scenarios[currentScenario];
	document.querySelectorAll('#choices button').forEach(b => b.disabled = true);

  if (choice === q.answer) {
	score++;
  currentScenario++;
    if (currentScenario < scenarios.length) {
      showScenario(); 
    } else {
      showResult();
    }
  } else {
    feedbackArea.textContent = `${q.wrongFeedback}`;
    nextbtn.style.display = 'block';
  }
}
  
  nextbtn.addEventListener('click', () => {
  currentScenario++;
  if (currentScenario < scenarios.length) {
    showScenario();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById('game-container').style.display = 'none';
  document.getElementById('result').textContent = `You finished the game! Your score was ${score} / ${scenarios.length}! Feel free to play again some time!`;
}

showScenario();