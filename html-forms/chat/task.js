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
  chatMessage.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${realTime()}</div>
        <div class="message__text">
        ${inputClient.value}
        </div>
      </div>`;
  inputClient.value = "";
  robotAnswer("robotGreeting");
};

const messageRobot = (set) => {
  const robotWords = {
    robotGreeting: ["Добрый день", "Здравствуйте", "Привет"],
    robotParting: ["До встречи", "Увидемся", "До свидания"],
    robotQuestion: ["Еще могу чем то помоч?"],
  };
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
