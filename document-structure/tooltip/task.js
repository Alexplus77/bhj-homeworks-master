const tooltipLinkAll = [...document.querySelectorAll(".has-tooltip")];
const body = document.querySelector("body");
const markupTooltip = (text) => {
  const divTooltip = document.createElement("div");
  divTooltip.classList.add("tooltip");
   body.appendChild(divTooltip);
};

const handleTooltip = (e) => {
  e.preventDefault();
  console.log(e.target);
  const textTooltip = e.target.getAttribute("title");
  const findLink = tooltipLinkAll.find(
    (elem) => elem === e.target
  );
    if (findLink) {     
    markupTooltip(textTooltip);
    const tooltipDiv = document.querySelector(".tooltip");
      tooltipDiv.classList.toggle("tooltip_active");
      tooltipDiv.innerHTML=textTooltip
        positionTooltip(e, tooltipDiv);  
    }    
};

const removeTooltip = (e) => {
    console.log('hello')
    const tooltipDiv = document.querySelector(".tooltip");    
      tooltipDiv.classList.remove("tooltip_active");
  
}
const positionTooltip = (e, tooltipDiv) => {
  const leftPosition = e.target.getBoundingClientRect().x;
  const topPosition = e.target.getBoundingClientRect().y + 30;
  tooltipDiv.style.top = `${topPosition}px`;
  tooltipDiv.style.left = `${leftPosition}px`;
};

body.addEventListener("click", handleTooltip);
body.addEventListener("scroll", removeTooltip);
