let count = document.querySelector("#clicker__counter").textContent;
let imgClick = document.querySelector("img");
imgClick.addEventListener('click', click)

let countTime = 0


function click() {
    
   
    document.querySelector("#clicker__counter").textContent = count++;
    //count % 2 ? (imgClick.width = 400) : (imgClick.width = 200);
  
    if (count % 2) {
        imgClick.width = 400
    } else {
        imgClick.width = 200
    }
    console.log(countTime)    
    }


