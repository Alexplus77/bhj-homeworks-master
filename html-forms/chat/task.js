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
    messageRobot(inputClient.value);
  inputClient.value = "";
  
};

const messageRobot = (text, set) => {
  const robotWords = {
      robotGreeting: [ "Здравствуйте, вам нужен оператор? Да/Нет"],
      robotAnswer:['Все операторы заняты'],
    robotParting: ["До встречи", "Увидемся", "До свидания"],
    robotQuestion: ["Еще могу чем то помоч?"],
    };
    
    console.log(text)
    console.log(text.toLowerCase().includes("да"));
   
   switch (text) {
     case text.toLowerCase().includes("да"):
       set = "robotAnswer";
       break;
     case text.toLowerCase().includes("нет"):
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
