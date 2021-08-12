const revealElem = [...document.querySelectorAll(".reveal")];

const openElem = () => {
  const vewport = window.innerHeight;

  revealElem.forEach((elem) => {
    if (elem.getBoundingClientRect().top < vewport) {
      elem.classList.add("reveal_active");
    } else if (elem.getBoundingClientRect().top > 0) {
      elem.classList.remove("reveal_active");
    }
  });
};

document.addEventListener("scroll", openElem);

const input = {
  " ": [5],
  d: [10],
  e: [1],
  "!": [11],
  H: [0],
  l: [2, 3, 9],
  o: [4, 7],
  r: [8],
  w: [6],
};

/*
 input это объект, в котором ключ - буква,
 значение - это массив, а в нем позиция буквы в слове
 Hello world - H = [0] то есть H на 1 месте и т.д.
 Напиши функцию, которая расшифрует input и расставит
 буквы в нужном порядке
*/
const rightPlacement = [];

const disipherInput = () => {
  //! 1 вариант
  // for (const letter in input) {
  //   let position = input[letter];
  //   position.forEach((elem) =>rightPlacement[elem] = letter);
  // }
  //    return rightPlacement.join("");

  //! 2 вариант
  // Object.entries(input).map(([letter, position]) => {
  //   position.forEach((elem) =>rightPlacement[elem] = letter);
  // })
  // return rightPlacement.join("");

  //! 3 вариант
  return Object.entries(input)
    .reduce((acc, [letter, arr]) => {
      arr.forEach((position) => (acc[position] = letter));
      return acc;
    }, [])
    .join("");
};

console.log(disipherInput(input)); // 'Hello world!'
