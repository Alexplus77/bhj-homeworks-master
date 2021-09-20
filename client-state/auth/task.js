const form = document.querySelector("#signin__form");
const sendBtn = document.querySelector(".btn");
const greeting = document.querySelector(".welcome");
const checkbox = document.querySelector(".checkbox");

const url = "https://netology-slow-rest.herokuapp.com/auth.php";

const sendForm = async (e) => {
  try {
    e.preventDefault();
    const respons = await fetch(url, {
      method: "POST",
      body: new FormData(form),
    });
    const data = await respons.json();
    validateUser(data);
  } catch (error) {
    console.log(error);
  }
};

const onsetGriting = (text) => {
  greeting.classList.add("welcome_active");
  greeting.children[0].innerText = text;
};

const validateUser = ({ success, user_id }) => {
  if (success) {
    checkbox.children[0].checked
      ? localStorage.setItem("userId", JSON.stringify(user_id))
      : localStorage.clear();
    form.closest(".signin").classList.remove("signin_active");
    onsetGriting(user_id);
    form.reset();
  } else {
    alert("Неверный логин/пароль");
  }
};

(() => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  form.closest(".signin").classList.add("signin_active");
  if (userId) {
    onsetGriting(userId);
  }
})();

sendBtn.addEventListener("click", sendForm);
