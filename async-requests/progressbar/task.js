const progress = document.querySelector("#progress");
const form = document.querySelector("#form");



const url = "https://netology-slow-rest.herokuapp.com/upload.php";

form.onsubmit = (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.addEventListener("progress", (e) => {
    progress.value = e.loaded / 1000000;
  });

  const formData = new FormData(form);
  xhr.send(formData);
};

