let count = document.querySelector("#clicker__counter").textContent;
console.log(count)
let imgClick = document.querySelector(".clicker__cookie");
console.log(imgClick.addEventListener('click', click))

function click() {
    document.querySelector("#clicker__counter").textContent = count++;
    
    
    
}