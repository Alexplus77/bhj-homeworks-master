function rotator(rotatorItem) {
  let rotatorSlides = [...document.querySelector(rotatorItem).children];

  let index = 0;
  return () => {
    rotatorSlides[index].classList.remove("rotator__case_active");
    index++;
    if (index === rotatorSlides.length) {
      index = 0;
    }
    rotatorSlides[index].classList.add("rotator__case_active");
    rotatorSlides[index].style.color = rotatorSlides[index].dataset["color"];
  };
}

let case1 = rotator(".rotator1");
setInterval(case1, 1000);
let case2 = rotator(".rotator2");
setInterval(case2, 2000);
let case3 = rotator(".rotator3");
setInterval(case3, 3000);
let case4 = rotator(".rotator4");
setInterval(case4, 4000);
let case5 = rotator(".rotator5");
setInterval(case5, 5000);
let case6 = rotator(".rotator6");
setInterval(case6, 6000);



function sayHallo(limit) {
  let count=0
  return () => {
    count++
    if (count <= limit) {
     return 'Hallo Alex'
   } 
  }  
}
let f = sayHallo(2)
console.log(f())
console.log(f());
console.log(f());
console.log(f());
console.log('====================================================')
let f2 = sayHallo(3);
console.log(f2());
console.log(f2());
console.log(f2());
console.log(f2());