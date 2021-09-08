const tooltipLinkAll = [...document.querySelectorAll(".has-tooltip")];
const body = document.querySelector("body");

const offsetTopPosition = 30;

const markupTooltip = () => {
  const divTooltip = document.createElement("div");
  divTooltip.classList.add("tooltip");
  body.appendChild(divTooltip);
};

const handleTooltip = (e) => {
  e.preventDefault();
  if (body.contains(document.querySelector(".tooltip_active"))){removeTooltip()}
  markupTooltip();  
  const tooltipDiv = document.querySelector(".tooltip");  
  tooltipDiv.classList.toggle("tooltip_active");
  tooltipDiv.innerHTML = e.target.getAttribute("title");
  positionTooltip(e, tooltipDiv);
  
  console.log(document.querySelectorAll(".tooltip"));
 //removeTooltip();
 
};

const positionTooltip = (e, tooltipDiv) => {
  const leftPosition = e.target.getBoundingClientRect().x;
  const topPosition = e.target.getBoundingClientRect().y + offsetTopPosition;
  tooltipDiv.style.top = `${topPosition}px`;
  tooltipDiv.style.left = `${leftPosition}px`;
};

const removeTooltip = () => {
  const tooltipDiv = document.querySelector(".tooltip");
  body.removeChild(tooltipDiv);
};

const removeTooltipScroll = () => {
  if (body.contains(document.querySelector(".tooltip"))) {
    removeTooltip();
  }
};
tooltipLinkAll.forEach((link) => link.addEventListener("click", handleTooltip));

document.addEventListener("click", (e) => {
  if (!tooltipLinkAll.includes(e.target)) {
    removeTooltip();
  }
});
document.addEventListener("scroll", removeTooltipScroll);
