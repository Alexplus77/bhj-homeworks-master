const slider = document.querySelector('.slider__items')
const [...sliderItems] = document.querySelectorAll(".slider__item");
const sliderArrow = document.querySelector(".slider__arrows");

let index = 0
function show(event) {
  sliderItems.forEach(elem => {
    elem.classList.remove('slider__item_active')
  })
  console.log(sliderItems);
  
    sliderItems[index].classList.add("slider__item_active")
     if ( event.target.classList.contains("slider__arrow_next") && index>=0) {
      index++
        if ( index === sliderItems.length) {        
            index=0           
        }   
    }   
    if (event.target.classList.contains("slider__arrow_prev")) {
      index--
      if ( index === 0) {        
        index = sliderItems.length
        
        }   
    }     
   
}

function validatePic(event) {
  
}

sliderArrow.addEventListener('click', show)