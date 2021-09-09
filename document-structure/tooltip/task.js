const tooltipLinkAll = [...document.querySelectorAll(".has-tooltip")];
const body = document.querySelector("body");

const offsetTopPosition = 30;
let prevTooltip = null;

const markupTooltip = () => {
  const divTooltip = document.createElement("div");
  divTooltip.classList.add("tooltip");
  body.appendChild(divTooltip);
};

const handleTooltip = (e) => {
  e.preventDefault();
  const tooltipDiv = document.querySelector(".tooltip");
  const textTooltip = e.target.getAttribute("title");
  tooltipDiv.innerHTML = textTooltip;
  prevTooltip === e.target.getAttribute("title")
    ? tooltipDiv.classList.toggle("tooltip_active")
    : tooltipDiv.classList.add("tooltip_active");
  prevTooltip = textTooltip;
  positionTooltip(e, tooltipDiv);
};

const positionTooltip = (e, tooltipDiv) => {
  const leftPosition = e.target.getBoundingClientRect().x;
  const topPosition = e.target.getBoundingClientRect().y + offsetTopPosition;
  tooltipDiv.style.top = `${topPosition}px`;
  tooltipDiv.style.left = `${leftPosition}px`;
};

const removeTooltip = () => {
  const tooltipDiv = document.querySelector(".tooltip");
  tooltipDiv.classList.remove("tooltip_active");
};

const removeTooltipScroll = () => {
  if (body.contains(document.querySelector(".tooltip"))) {
    removeTooltip();
  }
};

body.addEventListener("click", handleTooltip);
document.addEventListener("scroll", removeTooltipScroll);
document.addEventListener("DOMContentLoaded", markupTooltip);
