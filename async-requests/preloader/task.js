const currenciesDiv = document.querySelector("#items");
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

const getDataResponse = async () => {
  try {
    const responseData = await fetch(
      "https://netology-slow-rest.herokuapp.com"
    );
    const dataCurrency = await responseData.json();
    processingRespons(dataCurrency);
  } catch (error) {
    console.warn(error);
  }
};

(() => {
  const valute = JSON.parse(localStorage.getItem("valute"));
  Object.values(valute).map(({ CharCode, Value }) =>
    markupCurrencyItem(CharCode, Value)
  );
  getDataResponse();
})();

const processingRespons = ({ response: { Valute: data } }) => {
  loader.classList.remove("loader_active");
  const currencyDiv = [...document.querySelectorAll(".item")];
  currencyDiv.forEach((elem) => elem.remove());
  localStorage.setItem("valute", JSON.stringify(data));
  return Object.values(data).map(({ CharCode, Value }) =>
    markupCurrencyItem(CharCode, Value)
  );
};
