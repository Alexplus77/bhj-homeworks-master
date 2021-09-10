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

async function sendJsonPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(jsonPost),
    });
    const objPost = await response.json();
      console.log(objPost);
      handlerPollResalt(objPost)
  } catch (error) {
    console.log(error);
  }
}

const markupPoll = ({ data: { title, answers } }) => {
    titlePoll.innerText = title;
    titlePoll.classList.add("poll__answers_active");
  answers.map((answer) => {
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
    sendJsonPost();    
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

const handlerPollResalt = ({ stat }) => {
    console.log(stat)
   const answersBtn = document.createElement("button");    
    stat.map(elem => {
         const divResult = document.createElement('div')
        divResult.setAttribute('id', elem.id)
        titlePoll.appendChild(divResult)        
    })
    
    

}

document.addEventListener("DOMContentLoaded", getOject);
answersPoll.addEventListener("click", handlerPollAlert);
