const card = document.querySelector('.card')
const removeBtn = document.querySelector('.remove')

const saveText = () => {
    const text = card.children[0].value
    localStorage.setItem('value', JSON.stringify(text))
    removeBtn.classList.remove('removeHide')
}
 
const removeText = () => {
    localStorage.clear()
    card.children[0].value = ''
    removeBtn.classList.add("removeHide");
}

(() => {
    card.children[0].value = JSON.parse(localStorage.getItem('value'))
    if (card.children[0].value.trim()) {
      removeBtn.classList.remove("removeHide");
  }  
})()

card.addEventListener('input', saveText)
removeBtn.addEventListener('click', removeText)