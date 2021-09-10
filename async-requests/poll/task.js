const titlePoll = document.querySelector(".poll__title");
const answersPoll = document.querySelector(".poll__answers");
const poll = document.querySelector(".poll");

let jsonPost = { stat: [] };

const getPollData = async () => {
  try {
    const response = await fetch(
      "https://netology-slow-rest.herokuapp.com/poll.php"
    );
    const obj = await response.json();
    markupPoll(obj);
  } catch (error) {
    console.log(error);
  }
};

(function () {
  const getPollDataBtn = document.createElement("button");
  getPollDataBtn.classList.add("getPollData");
  getPollDataBtn.innerText = "getPollData";
  poll.appendChild(getPollDataBtn);
})();

const markupPoll = ({ data: { title, answers } }) => {
  titlePoll.innerText = title;
  titlePoll.classList.add("poll__answers_active");
  return answers.map((answer) => {
    const answersBtn = document.createElement("button");
    answersBtn.classList.add("poll__answer");
    answersBtn.setAttribute("id", Math.random());
    answersBtn.innerText = answer;
    answersPoll.appendChild(answersBtn);
  });
};

const handlerPollAlert = (e) => {
  if (e.target.classList.contains("poll__answer")) {
    alert("Спасибо, ваш голос засчитан!");
    createJsonPost(e);
    console.log(jsonPost);
  }
};

const validateAnswer = (targetId) => {
  return jsonPost.stat.every((elem) => elem.id !== targetId);
};

const createJsonPost = (e) => {
  const targrtId = e.target.getAttribute("id");
  if (jsonPost.stat.length === 0 || validateAnswer(targrtId)) {
    jsonPost.stat.push({
      id: targrtId,
      answer: e.target.innerText,
      votes: 1,
    });
  } else {
    const findAnswer = jsonPost.stat.find((elem) => elem.id === targrtId);
    findAnswer.votes++;
  }
};
const getPollBtn = (e) => {
   
  const btnAnswers = [...document.querySelectorAll(".poll__answer")];
  if (e.target.classList.contains("getPollData")) {
    btnAnswers.forEach((elem) => answersPoll.removeChild(elem));
    getPollData();
  }
};

document.addEventListener("DOMContentLoaded", getPollData);
answersPoll.addEventListener("click", handlerPollAlert);
poll.addEventListener("click", getPollBtn);
