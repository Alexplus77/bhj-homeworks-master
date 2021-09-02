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
const arrProdactId = [];
const minNumberOfProducts = 1;

const handleDecrement = (e) => {
   if (count > minNumberOfProducts) {
     count--;
   }
  e.target.parentElement.children[1].innerText = count;
  
}

const handleIncrement = (e) => {
  count++;  
  e.target.parentElement.children[1].innerText = count;
}

const markupCart = (selector1, selector2) => {
  selector1.innerHTML += `        
        <div class="cart__product" data-id="${selector2.dataset.id}">
               <i class="fa fa-times" aria-hidden="true"></i>
                <img class="cart__product-image" src="${selector2.children[1].src}">
                <div class="cart__product-count">${count}</div>                
            </div>`;
};

const productAdd = (e) => {
  products.forEach((product) => {
    if (product.querySelector(".product__add") === e.target) {
      const cartProductAll = [
        ...cartProduct.querySelectorAll(".cart__product"),
      ];

      if (arrProdactId.includes(product.dataset.id)) {
        cartProductAll.forEach((elem) => {
          if (elem.dataset.id === product.dataset.id) {
            elem.children[2].innerHTML = +elem.children[2].innerHTML + count;
            
          }
        });
      } else {
        arrProdactId.push(product.dataset.id);
        markupCart(cartProduct, product);
        btnClose=[...document.querySelectorAll('.fa')]
      }
    }    
  });
  count=1
};

const productRemove = (e) => {
  products.forEach((product) => {
    if (product.querySelector(".product__remove") === e.target) {
      const cartProductAll = [
        ...cartProduct.querySelectorAll(".cart__product"),
      ];
      if (arrProdactId.includes(product.dataset.id)) {
        cartProductAll.forEach((elem) => {
          if (elem.dataset.id === product.dataset.id) {
           
             
            if (+elem.children[2].innerHTML <= minNumberOfProducts) {
              arrProdactId.splice(arrProdactId.indexOf(product.dataset.id), 1);
              cartProduct.removeChild(elem);
            } else {
              elem.children[2].innerHTML = +elem.children[2].innerHTML - count;
              elem.children[0].addEventListener("click", () => {

                elem.children[2].innerHTML = +elem.children[2].innerHTML - 1;
              });
            }
          }
        });
      }
    }    
  });
  count=1
};


btnDecrement.forEach(elem => elem.addEventListener('click', handleDecrement))
btnIncrement.forEach((elem) => elem.addEventListener("click", handleIncrement));
productAddBtn.forEach((elem) => elem.addEventListener("click", productAdd));
productRemoveBtn.forEach((elem) =>
  elem.addEventListener("click", productRemove)
);
