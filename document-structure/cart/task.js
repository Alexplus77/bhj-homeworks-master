import { storeCart, storeShop } from "./store.js";
console.log(storeShop);

const products = [...document.querySelectorAll(".product")];
const btnDecrement = [
  ...document.querySelectorAll(".product__quantity-control_dec"),
];
const btnIncrement = [
  ...document.querySelectorAll(".product__quantity-control_inc"),
];
const productAddBtn = [...document.querySelectorAll(".product__add")];
const productRemoveBtn = [...document.querySelectorAll(".product__remove")];

const cartProduct = document.querySelector(".cart__products");
let count = 1;
const minNumberOfProducts = 1;

const handleDecrement = (e) => {
  if (count > minNumberOfProducts) {
    count--;
  }
  e.target.parentElement.children[1].innerText = count;
};
const handleIncrement = (e) => {
  count++;
  e.target.parentElement.children[1].innerText = count;
};

const renderCartHTML = (id, image, count) => {
  const cart = document.createElement("div");
  cart.classList.add("cart__product");
  cart.setAttribute("data-id", id);

  const img = document.createElement("img");
  img.classList.add("cart__product-image");
  img.setAttribute("src", image);
  cart.appendChild(img);

  const countCart = document.createElement("div");
  countCart.classList.add("cart__product-count");
  countCart.textContent = count;
  cart.appendChild(countCart);

  const rm = document.createElement("i");
  rm.classList.add("cart__product-remove");
  rm.classList.add("fas");
  rm.classList.add("fa-times");
  cart.appendChild(rm);
  //cart.appendChild(cart);
};

const saveProductsToCart = (id, image, count) => {
  const findProdactCart = storeCart.find((elem) => elem.id === id);
  if (findProdactCart) {
    const cartProductAll = [...cartProduct.querySelectorAll(".cart__product")];
    cartProductAll.forEach((elem) => {
      elem.children[2].innerHTML = +elem.children[2].innerHTML + count;
    });
  } else {
    storeCart.push({
      id: id,
      imageLink: image,
      count: count,
    });
    renderCartHTML(id, image, count);
  }
};

const addProductToCart = (e, id, img, count) => {
  const targetId = e.target.closest(".product").dataset.id;
  const findProduct = storeShop.find((elem) => elem.id === targetId);
  const idProduct = findProduct.id;
  const image = findProduct.imageLink;
  saveProductsToCart(idProduct, image, count);
  count = 1;
};

btnDecrement.forEach((elem) => elem.addEventListener("click", handleDecrement));
btnIncrement.forEach((elem) => elem.addEventListener("click", handleIncrement));
productAddBtn.forEach((elem) =>
  elem.addEventListener("click", addProductToCart)
);
// productRemoveBtn.forEach((elem) =>
//   elem.addEventListener("click", productRemove)
// );
