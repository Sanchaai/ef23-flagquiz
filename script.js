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

    urls = [];

    while (urls.length < 4) {
      randurl = flags[Math.floor(Math.random() * flags.length)];
      if (!urls.includes(randurl)) {
        urls.push(randurl);
      }
    }

    questions.push({
      img: urls[0],
      answers: [
        { text: urls[0].replace(".png", "").split("/")[1], correct: true },
        { text: urls[1].replace(".png", "").split("/")[1], correct: false },
        { text: urls[2].replace(".png", "").split("/")[1], correct: false },
        { text: urls[3].replace(".png", "").split("/")[1], correct: false },
      ].sort(function (a, b) {
        return 0.5 - Math.random();
      }),
    });
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

const baseflagpath = "images/flags/";
const flags = [
  "World/Afghanistan.png",
  "World/Albania.png",
  "World/Algeria.png",
  "World/American Samoa.png",
  "World/Andorra.png",
  "World/Angola.png",
  "World/Antigua and Barbuda.png",
  "World/Argentina.png",
  "World/Armenia.png",
  "World/Aruba.png",
  "World/Australia.png",
  "World/Austria.png",
  "World/Azerbaijan.png",
  "World/Bahamas.png",
  "World/Bahrain.png",
  "World/Bangladesh.png",
  "World/Barbados.png",
  "World/Belarus.png",
  "World/Belgium.png",
  "World/Belize.png",
  "World/Benin.png",
  "World/Bermuda.png",
  "World/Bhutan.png",
  "World/Bolivia.png",
  "World/Bosnia and Herzegovina.png",
  "World/Botswana.png",
  "World/Brazil.png",
  "World/Brunei Darussalam.png",
  "World/Bulgaria.png",
  "World/Burkina Faso.png",
  "World/Burundi.png",
  "World/Cambodia.png",
  "World/Cameroon.png",
  "World/Canada.png",
  "World/Cape Verde.png",
  "World/Cayman Islands.png",
  "World/Central African Republic.png",
  "World/Chad.png",
  "World/Chile.png",
  "World/Colombia.png",
  "World/Comoros.png",
  "World/Congo.png",
  "World/Cook Islands.png",
  "World/Costa Rica.png",
  "World/Croatia.png",
  "World/Cte dIvoire.png",
  "World/Cuba.png",
  "World/Cyprus.png",
  "World/Czech Republic.png",
  "World/Democratic Republic of the Congo.png",
  "World/Democratic Republic of Timor-Leste.png",
  "World/Denmark.png",
  "World/Djibouti.png",
  "World/Dominica.png",
  "World/Dominican Republic.png",
  "World/Ecuador.png",
  "World/Egypt.png",
  "World/El Salvador.png",
  "World/Equatorial Guinea.png",
  "World/Eritrea.png",
  "World/Estonia.png",
  "World/Eswatini.png",
  "World/Ethiopia.png",
  "World/Federated States of Micronesia.png",
  "World/Fiji.png",
  "World/Finland.png",
  "World/France.png",
  "World/Gabon.png",
  "World/Gambia.png",
  "World/Georgia.png",
  "World/Germany.png",
  "World/Ghana.png",
  "World/Great Britain.png",
  "World/Greece.png",
  "World/Grenada.png",
  "World/Guam.png",
  "World/Guatemala.png",
  "World/Guinea-Bissau.png",
  "World/Guinea.png",
  "World/Guyana.png",
  "World/Haiti.png",
  "World/Honduras.png",
  "World/Hong Kong China.png",
  "World/Hungary.png",
  "World/Iceland.png",
  "World/India.png",
  "World/Indonesia.png",
  "World/Iraq.png",
  "World/Ireland.png",
  "World/Islamic Republic of Iran.png",
  "World/Israel.png",
  "World/Italy.png",
  "World/Jamaica.png",
  "World/Japan.png",
  "World/Jordan.png",
  "World/Kazakhstan.png",
  "World/Kenya.png",
  "World/Kiribati.png",
  "World/Kosovo.png",
  "World/Kuwait.png",
  "World/Kyrgyzstan.png",
  "World/Lao Peoples Democratic Republic.png",
  "World/Latvia.png",
  "World/Lebanon.png",
  "World/Lesotho.png",
  "World/Liberia.png",
  "World/Libya.png",
  "World/Liechtenstein.png",
  "World/Lithuania.png",
  "World/Luxembourg.png",
  "World/Madagascar.png",
  "World/Malawi.png",
  "World/Malaysia.png",
  "World/Maldives.png",
  "World/Mali.png",
  "World/Malta.png",
  "World/Marshall Islands.png",
  "World/Mauritania.png",
  "World/Mauritius.png",
  "World/Mexico.png",
  "World/Monaco.png",
  "World/Mongolia.png",
  "World/Montenegro.png",
  "World/Morocco.png",
  "World/Mozambique.png",
  "World/Myanmar.png",
  "World/Namibia.png",
  "World/Nauru.png",
  "World/Nepal.png",
  "World/Netherlands.png",
  "World/New Zealand.png",
  "World/Nicaragua.png",
  "World/Niger.png",
  "World/Nigeria.png",
  "World/North Macedonia.png",
  "World/Norway.png",
  "World/Oman.png",
  "World/Pakistan.png",
  "World/Palau.png",
  "World/Palestine.png",
  "World/Panama.png",
  "World/Papua New Guinea.png",
  "World/Paraguay.png",
  "World/Peoples Republic of China.png",
  "World/Peru.png",
  "World/Philippines.png",
  "World/Poland.png",
  "World/Portugal.png",
  "World/Puerto Rico.png",
  "World/Qatar.png",
  "World/Republic of Korea.png",
  "World/Republic of Moldova.png",
  "World/Romania.png",
  "World/Rwanda.png",
  "World/Saint Kitts and Nevis.png",
  "World/Saint Lucia.png",
  "World/Samoa.png",
  "World/San Marino.png",
  "World/Sao Tome and Principe.png",
  "World/Saudi Arabia.png",
  "World/Senegal.png",
  "World/Serbia.png",
  "World/Seychelles.png",
  "World/Sierra Leone.png",
  "World/Singapore.png",
  "World/Slovakia.png",
  "World/Slovenia.png",
  "World/Solomon Islands.png",
  "World/Somalia.png",
  "World/South Africa.png",
  "World/South Sudan.png",
  "World/Spain.png",
  "World/Sri Lanka.png",
  "World/St Vincent and the Grenadines.png",
  "World/Sudan.png",
  "World/Suriname.png",
  "World/Sweden.png",
  "World/Switzerland.png",
  "World/Syrian Arab Republic.png",
  "World/Tajikistan.png",
  "World/Thailand.png",
  "World/Togo.png",
  "World/Tonga.png",
  "World/Trinidad and Tobago.png",
  "World/Tunisia.png",
  "World/Turkey.png",
  "World/Turkmenistan.png",
  "World/Tuvalu.png",
  "World/Uganda.png",
  "World/Ukraine.png",
  "World/United Arab Emirates.png",
  "World/United Republic of Tanzania.png",
  "World/United States of America.png",
  "World/Uruguay.png",
  "World/Uzbekistan.png",
  "World/Vanuatu.png",
  "World/Venezuela.png",
  "World/Vietnam.png",
  "World/Virgin Islands British.png",
  "World/Virgin Islands US.png",
  "World/Yemen.png",
  "World/Zambia.png",
  "World/Zimbabwe.png",
];
// const flags_europe = [
//   "Europe/Albania.png",
//   "Europe/Andorra.png",
//   "Europe/Armenia.png",
//   "Europe/Austria.png",
//   "Europe/Belarus.png",
//   "Europe/Belgium.png",
//   "Europe/Bosnia and Herzegovina.png",
//   "Europe/Bulgaria.png",
//   "Europe/Croatia.png",
//   "Europe/Cyprus.png",
//   "Europe/Czech Republic.png",
//   "Europe/Denmark.png",
//   "Europe/Estonia.png",
//   "Europe/Finland.png",
//   "Europe/France.png",
//   "Europe/Georgia.png",
//   "Europe/Germany.png",
//   "Europe/Great Britain.png",
//   "Europe/Greece.png",
//   "Europe/Hungary.png",
//   "Europe/Iceland.png",
//   "Europe/Ireland.png",
//   "Europe/Italy.png",
//   "Europe/Kosovo.png",
//   "Europe/Latvia.png",
//   "Europe/Liechtenstein.png",
//   "Europe/Lithuania.png",
//   "Europe/Luxembourg.png",
//   "Europe/Malta.png",
//   "Europe/Monaco.png",
//   "Europe/Montenegro.png",
//   "Europe/Netherlands.png",
//   "Europe/North Macedonia.png",
//   "Europe/Norway.png",
//   "Europe/Poland.png",
//   "Europe/Portugal.png",
//   "Europe/Republic of Moldova.png",
//   "Europe/Romania.png",
//   "Europe/Russia.png",
//   "Europe/San Marino.png",
//   "Europe/Serbia.png",
//   "Europe/Slovakia.png",
//   "Europe/Slovenia.png",
//   "Europe/Spain.png",
//   "Europe/Sweden.png",
//   "Europe/Switzerland.png",
//   "Europe/Turkey.png",
//   "Europe/Ukraine.png",
//   "Europe/Vatican_city.png",
// ];
