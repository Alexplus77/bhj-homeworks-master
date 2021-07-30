const revealElem = [...document.querySelectorAll(".reveal")];

const openElem = () => {
  const vewport = window.innerHeight;
  revealElem.forEach((elem) => {
    if (elem.getBoundingClientRect().top > vewport) {
      elem.classList.add("reveal_active");
    } else if (elem.getBoundingClientRect().top > 0) {
      elem.classList.remove("reveal_active");
    }
  });
};

document.addEventListener("scroll", openElem);
