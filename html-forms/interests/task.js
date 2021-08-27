const interestItem = [...document.querySelectorAll(".interest")].forEach(el => {
        el.addEventListener('change', (e) => {
        el.querySelectorAll(".interest__check").forEach(elem => {
       e.target.checked ? (elem.checked = true) : (elem.checked = false);
        })          
        
    })
})


