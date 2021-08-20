const widjet = document.querySelector(".chat-widget");
const inputClient = document.querySelector(".chat-widget__input");
const chatMessage = document.querySelector(".chat-widget__messages");

const widjetOpen = () => {
  widjet.classList.add("chat-widget_active");
};
const realTime = () => {
  return new Date().toLocaleTimeString().slice(0, -3);
};

const messageClient = () => {
  let text2 = inputClient.value;
  const markup = `
      <div class="message message_client">
        <div class="message__time">${realTime()}</div>
        <div class="message__text">
        ${text2}
        </div>
      </div>`;
  chatMessage.innerHTML += markup;

  messageRobot(inputClient.value);
  inputClient.value = "";
};

const messageRobot = (text) => {
  const robotWords = {
    robotGreeting: ["Здравствуйте, вам нужен оператор? Да/Нет"],
    robotAnswer: [
      "Все операторы заняты, заказ будет обработан автоматически. Еще будет заказ? Да/Нет ",
    ],
    robotParting: ["До встречи", "Увидемся", "До свидания"],
    robotQuestion: ["Еще могу чем то помоч?"],
  };

  switch (text.toLowerCase()) {
    case "да":
      set = "robotAnswer";
      break;
    case "нет":
      set = "robotParting";
      break;

    default:
      set = "robotGreeting";
      break;
  }
  const index = Math.floor(Math.random() * robotWords[set].length);
  chatMessage.innerHTML += `
      <div class="message">
        <div class="message__time">${realTime()}</div>
        <div class="message__text">
         ${robotWords[set][index]}
        </div>
      </div>`;
};

widjet.addEventListener("click", widjetOpen);
inputClient.addEventListener("change", messageClient);
