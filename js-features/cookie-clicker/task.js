let count = document.querySelector("#clicker__counter").textContent;
let imgClick = document.querySelector("img");
imgClick.addEventListener('click', click)
let countSeconds=0
let countTime = new Date().getSeconds() - countSeconds


function click() {
    document.querySelector("#clicker__counter").textContent = count++;  
   
    if (count % 2) {
        imgClick.width = 400
    } else {
        imgClick.width = 200
    }
    countSeconds = new Date().getSeconds()
    
console.log(countTime)
}

    
