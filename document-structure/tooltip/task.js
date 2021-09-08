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
  markupTooltip();
  const tooltipDiv = document.querySelector(".tooltip");
    const findLink = tooltipLinkAll.find((elem) => elem === e.target);
    
    if (findLink) {
       tooltipDiv.classList.add("tooltip_active");
    tooltipDiv.innerHTML = findLink.getAttribute("title");
    positionTooltip(e, tooltipDiv);
  } else {
    removeTooltip();
  }
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
tooltipLinkAll.forEach(link=>link.addEventListener("click", handleTooltip))

document.addEventListener("scroll", removeTooltipScroll);

