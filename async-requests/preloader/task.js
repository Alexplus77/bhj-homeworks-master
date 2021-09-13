const currenciesDiv = document.querySelector("#items");
const currencyDiv=document.querySelector(".item")
const loader = document.querySelector(".loader");

const markupCurrencyItem = (code, value) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  currenciesDiv.appendChild(itemDiv);
  
  const itemCode = document.createElement("div");
  itemCode.classList.add("item__code");
  itemCode.innerText = code;
  itemDiv.appendChild(itemCode);

  const itemValue = document.createElement("div");
  itemValue.classList.add("item__value");
  itemValue.innerText = value;
  itemDiv.appendChild(itemValue);
};

(async () => {
  try {
    const responseData = await fetch(
      "https://netology-slow-rest.herokuapp.com"
    );
    const dataCurrency = await responseData.json();
    processingRespons(dataCurrency);
  } catch (error) {
    console.warn(error);
  }
})();

const processingRespons = ({ response: { Valute: data } }) => {
  loader.classList.remove("loader_active");
  return  Object.values(data).map(({ CharCode, Value }) => {
    markupCurrencyItem(CharCode, Value);
  });
};
