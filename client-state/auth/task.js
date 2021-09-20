const form = document.querySelector("#signin__form");
const sendBtn = document.querySelector(".btn");
const greeting = document.querySelector(".welcome");
const checkbox = document.querySelector(".checkbox");
const logoutBtn = document.querySelector(".logout");

const url = "https://netology-slow-rest.herokuapp.com/auth.php";

const sendForm = async (e) => {
  try {
    e.preventDefault();
    const response = await fetch(url, {
      method: "POST",
      body: new FormData(form),
    });
    const data = await response.json();
    validateUser(data);
  } catch (error) {
    console.log(error);
  }
};

const onSetGriting = (text) => {
  form.closest(".signin").classList.remove("signin_active");
  logoutBtn.classList.remove("logoutHide");
  greeting.classList.add("welcome_active");
  greeting.children[0].innerText = text;
};

const validateUser = ({ success, user_id }) => {
  if (success) {
    if (checkbox.children[0].checked) {
      localStorage.setItem("userId", JSON.stringify(user_id));
      }
      
    onSetGriting(user_id);
  } else {
    alert("Неверный логин/пароль");
    form.reset();
  }
};

const logoutUser = () => {
  localStorage.clear();
  logoutBtn.classList.add("logoutHide");
  greeting.classList.remove("welcome_active");
  form.closest(".signin").classList.add("signin_active");
};

(() => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  if (userId) {
    onSetGriting(userId);
  }
})();

sendBtn.addEventListener("click", sendForm);
logoutBtn.addEventListener("click", logoutUser);
