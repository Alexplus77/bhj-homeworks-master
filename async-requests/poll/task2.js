const titlePoll = document.querySelector(".poll__title");
const answersPoll = document.querySelector(".poll__answers");

let jsonPost = { stat: [] };

async function getOject() {
  try {
    const response = await fetch(
      "https://netology-slow-rest.herokuapp.com/poll.php"
    );
    const obj = await response.json();
    markupPoll(obj);
  } catch (error) {
    console.log(error);
  }
}
getOject();

async function postOject() {
  try {
    const response = await fetch(
      "https://netology-slow-rest.herokuapp.com/poll.php",
      {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(jsonPost),
      }
    );
    const obj2 = await response.json();
    console.log(obj2);
  } catch (error) {
    console.log(error);
  }
}

const markupPoll = ({ data: { title, answers } }) => {
  console.log(title, answers);
  titlePoll.innerText = title;
  answers.map((answer) => {
    const answersBtn = document.createElement("button");
    answersBtn.classList.add("poll__answer");
    answersPoll.appendChild(answersBtn);
    answersBtn.innerText = answer;
  });
};

const openAlert = (e) => {
  if (e.target.classList.contains("poll__answer")) {
    alert("Спасибо, ваш голос засчитан!");
    createJsonPost(e);
    postOject();
    console.log(jsonPost);
  }
};

const createJsonPost = (e) => {
  const booleanAnswer = jsonPost.stat.every(
    (elem) => elem.answer !== e.target.innerText
  );
  if (jsonPost.stat.length === 0 || booleanAnswer) {
    jsonPost.stat.push({
      answer: e.target.innerText,
      votes: 1,
    });
  } else {
    const findAnswer = jsonPost.stat.find(
      (elem) => elem.answer === e.target.innerText
    );
    findAnswer.votes++;
  }
};

answersPoll.addEventListener("click", openAlert);
