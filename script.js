const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-buttons");

let shuffledQuestions, currectQuestionIndex;
let quizScore = 0;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  currectQuestionIndex++;
  setnextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currectQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setnextQuestion();
  quizScore = 0;
}

function setnextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currectQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;

  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button);
  });
  if (shuffledQuestions.length > currectQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
  if (selectedButton.dataset.correct == "true") {
    quizScore++;
  }
  document.getElementById("right-answers").innerText = `Score: ${quizScore}`;
}

function setStatusClass(element) {
  clearStatusClass(element);
  if (element.dataset.correct === "true") {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
const questions = [
  {
    question: "Was gibt 1+1?",
    answer: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "Was gibt 2-1?",
    answer: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "Was gibt 32/4?",
    answer: [
      { text: "2", correct: false },
      { text: "16", correct: false },
      { text: "8", correct: true },
      { text: "4", correct: false },
    ],
  },
  {
    question: "Was gibt 8*8?",
    answer: [
      { text: "16", correct: false },
      { text: "32", correct: false },
      { text: "64", correct: true },
      { text: "4", correct: false },
    ],
  },
];

baseflagpath = "images/flags/"

countries = [
  "Europe/Albania.png",
  "Europe/Andorra.png",
  "Europe/Armenia.png",
  "Europe/Austria.png",
  "Europe/Belarus.png",
  "Europe/Belgium.png",
  "Europe/Bosnia and Herzegovina.png",
  "Europe/Bulgaria.png",
  "Europe/Croatia.png",
  "Europe/Cyprus.png",
  "Europe/Czech Republic.png",
  "Europe/Denmark.png",
  "Europe/Estonia.png",
  "Europe/Finland.png",
  "Europe/France.png",
  "Europe/Georgia.png",
  "Europe/Germany.png",
  "Europe/Great Britain.png",
  "Europe/Greece.png",
  "Europe/Hungary.png",
  "Europe/Iceland.png",
  "Europe/Ireland.png",
  "Europe/Italy.png",
  "Europe/Kosovo.png",
  "Europe/Latvia.png",
  "Europe/Liechtenstein.png",
  "Europe/Lithuania.png",
  "Europe/Luxembourg.png",
  "Europe/Malta.png",
  "Europe/Monaco.png",
  "Europe/Montenegro.png",
  "Europe/Netherlands.png",
  "Europe/North Macedonia.png",
  "Europe/Norway.png",
  "Europe/Poland.png",
  "Europe/Portugal.png",
  "Europe/Republic of Moldova.png",
  "Europe/Romania.png",
  "Europe/Russia.png",
  "Europe/San Marino.png",
  "Europe/Serbia.png",
  "Europe/Slovakia.png",
  "Europe/Slovenia.png",
  "Europe/Spain.png",
  "Europe/Sweden.png",
  "Europe/Switzerland.png",
  "Europe/Turkey.png",
  "Europe/Ukraine.png",
  "Europe/Vatican_city.png",
];
