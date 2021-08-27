const widjet = document.querySelector(".chat-widget");
const inputClient = document.querySelector(".chat-widget__input");
const chatMessage = document.querySelector(".chat-widget__messages");
const icon = document.querySelector(".fa-eye-slash");

const widjetOpen = (e) => {
  if (e.target.classList.contains("fa-eye-slash")) {
    return;
  }
  widjet.classList.add("chat-widget_active");
};

const widjetClose = () => widjet.classList.remove("chat-widget_active");

const realTime = () => new Date().toLocaleTimeString().slice(0, -3);

const classesMessage = ["message", "message_client"];

const generateMarkup = (text, classesMarkup) => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add(classesMarkup);
  const messageTime = document.createElement("div");
  messageTime.classList.add("message__time");
  messageTime.innerHTML = realTime();
  const messageText = document.createElement("div");
  messageText.classList.add("message__text");
  messageText.innerHTML = text;
  messageContainer.appendChild(messageTime);
  messageContainer.appendChild(messageText);
  chatMessage.appendChild(messageContainer);
  messageContainer.scrollIntoView();
};

const messageClient = () => {
  generateMarkup(inputClient.value, classesMessage[1]);
  setTimeout(messageRobot, 2000);
  inputClient.value = "";
};

const messageRobot = () => {
  const robotWords = [
    "Здравствуйте",
    "заказ обрабатывается",
    "до свидания",
    "как дела",
  ];
  const index = Math.floor(Math.random() * robotWords.length);
  generateMarkup(robotWords[index], classesMessage[0]);
};

const waitingClient = () => setTimeout(messageRobot, 30000);

widjet.addEventListener("click", widjetOpen);
inputClient.addEventListener("change", messageClient);
inputClient.addEventListener("blur", waitingClient);
icon.addEventListener("click", widjetClose);
