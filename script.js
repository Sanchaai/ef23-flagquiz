const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const answerButtonElement = document.getElementById("answer-buttons");

const flagelement = document.getElementById("flag");
const questioncount = 10;

let shuffledQuestions, currentQuestionIndex, questions, questionanswered;
let quizScore = 0;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setnextQuestion();
});

function startGame() {
  startButton.classList.add("hide");

  // Generate questions
  questions = [];
  for (let i = 0; i < questioncount; i++) {
      // Select 4 random urls from "flags"
      
      urls = []

      while (urls.length < 4) {
        randurl = flags[Math.floor(Math.random() * flags.length)];
        if (!urls.includes(randurl)) {
          urls.push(randurl);
        }
      }

      questions.push({
        img: urls[0],
        answers: [
          {text: urls[0].replace(".png", "").split("/")[1], correct: true},
          {text: urls[1].replace(".png", "").split("/")[1], correct: false},
          {text: urls[2].replace(".png", "").split("/")[1], correct: false},
          {text: urls[3].replace(".png", "").split("/")[1], correct: false}
          
        ]
      })
  }

  currentQuestionIndex = 0;
  quizScore = 0;
  questionContainerElement.classList.remove("hide");
  setnextQuestion();
}

function setnextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionanswered = false;
  flagelement.src = baseflagpath + question.img;
  question.answers.forEach((answer) => {
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
  flagelement.src = "";
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  if (!questionanswered) {
    questionanswered = true;
    const selectedButton = e.target;

    Array.from(answerButtonElement.children).forEach((button) => {
      setStatusClass(button);
    });
    if (questions.length > currentQuestionIndex + 1) {
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

const baseflagpath = "images/flags/"
flags = [
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
