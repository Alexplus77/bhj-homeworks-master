const widjet = document.querySelector(".chat-widget");
const inputClient = document.querySelector(".chat-widget__input");
const chatMessage = document.querySelector(".chat-widget__messages");

const widjetOpen = () => {  widjet.classList.add("chat-widget_active")};
const realTime = () => { return new Date().toLocaleTimeString().slice(0, -3)};

const messageClient = () => {
  console.log(inputClient.value)
  if(inputClient.value===''){inputClient.value='Привет'}
  chatMessage.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${realTime()}</div>
        <div class="message__text">
        ${inputClient.value}
        </div>
      </div>`;
  messageRobot();
  inputClient.value = "";
};

const messageRobot = () => {
  const robotWords = ['Здравствуйте', 'заказ обрабатывается', 'до свидания', 'как дела' ]  
  const index = Math.floor(Math.random() * robotWords.length);
  chatMessage.innerHTML += `
      <div class="message">
        <div class="message__time">${realTime()}</div>
        <div class="message__text">
         ${robotWords[index]}
        </div>
      </div>`;
};

widjet.addEventListener("click", widjetOpen);
inputClient.addEventListener("change", messageClient);

// document.addEventListener('click', (e) => {
//     if(e.target != widjet ){
//     { widjet.classList.remove("chat-widget_active") }};
  
// })