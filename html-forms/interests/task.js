const interestItem = [...document.querySelectorAll(".interest__check")].forEach(el => {
    el.checked
    el.addEventListener('change', ()=> console.log(el))
})
console.log(interestItem)

