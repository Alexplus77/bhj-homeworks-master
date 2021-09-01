const products = [...document.querySelectorAll(".product")];
const quantityControl = [
  ...document.querySelectorAll(".product__quantity-controls"),
];
const productAddBtn = [...document.querySelectorAll(".product__add")];
const cartProduct = document.querySelector(".cart__products");

let count = 1;
const changeQuantity = (e) => {
  if (e.target.classList.contains("product__quantity-control_dec")) {
    if (count > 1) {
      count--;
    }
  } else if (e.target.classList.contains("product__quantity-control_inc")) {
    count++;
  }

  e.currentTarget.children[1].innerText = count;
};
const arrProdactId = [];

const productAdd = (e) => {
  productAddBtn.forEach((buttom) =>
    buttom.insertAdjacentHTML(
      "afterEnd",
      "<div class ='product__remove'>Удалить из корзины</div>"
    )
  );

  products.forEach((product) => {
    if (product.querySelector(".product__add") === e.target) {
      const cartProductAll = [
        ...cartProduct.querySelectorAll(".cart__product"),
      ];

      if (arrProdactId.includes(product.dataset.id)) {
        cartProductAll.forEach((elem) => {
          if (elem.dataset.id === product.dataset.id) {
            elem.children[1].innerHTML = +elem.children[1].innerHTML + count;
          }
        });
      } else {
        arrProdactId.push(product.dataset.id);
        cartProduct.innerHTML += `<div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${product.children[1].src}">
                <div class="cart__product-count">${count}</div>
            </div>`;
      }

      count = 1;
    }
  });
};
quantityControl.forEach((elem) =>
  elem.addEventListener("click", changeQuantity)
);
productAddBtn.forEach((elem) => elem.addEventListener("click", productAdd));
