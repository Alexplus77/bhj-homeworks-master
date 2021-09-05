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
  console.log(e.target);
  const textTooltip = e.target.getAttribute("title");
  markupTooltip(textTooltip);
  const tooltipDiv = document.querySelector(".tooltip");
  const findLink = tooltipLinkAll.find((elem) => elem === e.target);
  if (findLink) {
    tooltipDiv.classList.toggle("tooltip_active");
    tooltipDiv.innerHTML = textTooltip;
    positionTooltip(e, tooltipDiv);
  } else {
    tooltipDiv.classList.remove("tooltip_active");
  }
};

const removeTooltipScroll = () => {
  if (body.contains(document.querySelector(".tooltip"))) {
    const tooltipDiv = document.querySelector(".tooltip");
    tooltipDiv.classList.remove("tooltip_active");
  }
};

const positionTooltip = (e, tooltipDiv) => {
  const leftPosition = e.target.getBoundingClientRect().x;
  const topPosition = e.target.getBoundingClientRect().y + offsetTopPosition;
  tooltipDiv.style.top = `${topPosition}px`;
  tooltipDiv.style.left = `${leftPosition}px`;
};

body.addEventListener("click", handleTooltip);
document.addEventListener("scroll", removeTooltip);
