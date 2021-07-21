const slider = document.querySelector('.slider__items')
const [...sliderItems] = document.querySelectorAll(".slider__item");
const sliderArrow = document.querySelector(".slider__arrows");
const [...sliderDots] = document.querySelectorAll(".slider__dot");

let index = 0
function show(event) {  
  console.log(sliderItems, index); 
   calculate(event) 
   sliderItems.forEach(elem => {
    elem.classList.remove('slider__item_active')
  })
  sliderDots.forEach((elem) => {
    elem.classList.remove("slider__dot_active");
  });
  
  sliderItems[index].classList.add("slider__item_active");
  sliderDots[index].classList.add("slider__dot_active");
  
}

function calculate(event) {
  if (event.target.classList.contains("slider__arrow_next")) {   
     
        if ( index+1 < sliderItems.length) {        
            index++          
        } else if (index + 1 >= sliderItems.length) {
          index=0
    }    
  }

  if (event.target.classList.contains("slider__arrow_prev")) {

     if (index === 0) {
         index = sliderItems.length;
     } else  {
       index--;
     }    
  }
}

sliderArrow.addEventListener('click', show)