import { storeCart, storeShop } from "./store.js";

const btnDecrement = [
  ...document.querySelectorAll(".product__quantity-control_dec"),
];
const btnIncrement = [
  ...document.querySelectorAll(".product__quantity-control_inc"),
];
const productAddBtn = [...document.querySelectorAll(".product__add")];

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

const renderCartHTML = (id, image) => {
  const cart = document.createElement("div");
  cart.classList.add("cart__product");
  cart.setAttribute("data-id", id);
  cartProduct.appendChild(cart);

  const rm = document.createElement("i");
  rm.classList.add("cart__product-remove");
  rm.classList.add("fa");
  rm.classList.add("fa-times");
  cart.appendChild(rm);

  const img = document.createElement("img");
  img.classList.add("cart__product-image");
  img.setAttribute("src", image);
  cart.appendChild(img);

  const countCart = document.createElement("div");
  countCart.classList.add("cart__product-count");
  countCart.textContent = count;
  cart.appendChild(countCart);
};

const saveProductsToCart = (id, image) => {
  const findProdactCart = storeCart.find((elem) => elem.id === id);

  if (findProdactCart) {
    const cartProductAll = [...cartProduct.querySelectorAll(".cart__product")];
    const cartProductOne = cartProductAll.find(
      (elem) => elem.dataset.id === id
    );
    cartProductOne.children[2].innerHTML =
      +cartProductOne.children[2].innerHTML + count;
    findProdactCart.count = cartProductOne.children[2].innerHTML;
  } else {
    storeCart.push({
      id: id,
      imageLink: image,
      count: count,
    });
    renderCartHTML(id, image);
  }
};

const addProductToCart = (e) => {
  const targetId = e.target.closest(".product").dataset.id;
  const findProduct = storeShop.find((elem) => elem.id === targetId);
  const idProduct = findProduct.id;
  const image = findProduct.imageLink;
  saveProductsToCart(idProduct, image);
  removFromCart();

  count = 1;
};

const removFromCart = () => {
  const cartProductAll = [...cartProduct.querySelectorAll(".cart__product")];
  const removeBtn = [...cartProduct.querySelectorAll(".cart__product-remove")];
  removeBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const productFromCart = storeCart.find(
        (elem) => elem.id === e.target.closest(".cart__product").dataset.id
      );

      if (productFromCart) {
        const cartProductOne = cartProductAll.find(
          (elem) => elem.dataset.id === productFromCart.id
        );
        if (productFromCart.count === minNumberOfProducts) {
          cartProduct.removeChild(cartProductOne);
          storeCart.splice(storeCart.indexOf(productFromCart), 1);
        } else {
          productFromCart.count = productFromCart.count - 1;
          cartProductOne.children[2].innerHTML = productFromCart.count;
        }
      }
    })
  );
  console.log(storeCart);
};

btnDecrement.forEach((elem) => elem.addEventListener("click", handleDecrement));
btnIncrement.forEach((elem) => elem.addEventListener("click", handleIncrement));
productAddBtn.forEach((elem) =>
  elem.addEventListener("click", addProductToCart)
);
