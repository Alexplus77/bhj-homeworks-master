const widjet = document.querySelector(".chat-widget");
const inputClient = document.querySelector(".chat-widget__input");
const chatMessage = document.querySelector(".chat-widget__messages");

const widjetOpen = () => widjet.classList.add("chat-widget_active");
const realTime = () => new Date().toLocaleTimeString().slice(0, -3);

const markupMessage = (text) => {
  chatMessage.innerHTML += `
      <div class="message ">
        <div class="message__time">${realTime()}</div>
        <div class="message__text">
        ${text}
        </div>
      </div>`;  
};

const messageClient = () => {
  markupMessage(inputClient.value);
  const message = document.querySelector(".message");
  message.classList.add("message_client");
  message.scrollIntoView()
  messageRobot();  
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
  markupMessage(robotWords[index]);
};

const waitingClient = () => setTimeout(messageRobot, 30000);


widjet.addEventListener("click", widjetOpen);
inputClient.addEventListener("change", messageClient);
inputClient.addEventListener("blur", waitingClient);
// document.addEventListener('click', (e) => {
//     if(e.target != widjet ){
//     { widjet.classList.remove("chat-widget_active") }};

// })
