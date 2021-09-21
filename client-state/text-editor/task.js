const card = document.querySelector(".card");
const removeBtn = document.querySelector(".remove");

const saveText = () => {
  removeBtn.disabled = false;
  removeBtn.style.cursor = 'pointer';
  const text = card.children[0].value;
  localStorage.setItem("value", JSON.stringify(text));
  removeBtn.classList.remove("removeHide");
  if (!text.trim() ) {
    removeText()
  }
};


const removeText = () => {    
  localStorage.clear();
    card.children[0].value = "";     
    removeBtn.classList.add("removeHide");
  removeBtn.disabled = true
  removeBtn.style.cursor = "default";
    };

(() => {
  removeBtn.disabled = false
  
  card.children[0].value = JSON.parse(localStorage.getItem("value"));
  if (card.children[0].value.trim()) {
    removeBtn.classList.remove("removeHide");
     removeBtn.style.cursor = "pointer";
  }
})();

card.addEventListener("input", saveText);
removeBtn.addEventListener("click", removeText);
