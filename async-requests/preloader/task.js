const currenciesDiv = document.querySelector("#items");
const loader = document.querySelector(".loader");

const markupCurrencyItem = (code, value, name) => {
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

const itemCurrensy = document.createElement("div");
itemCurrensy.classList.add("item__currency");
itemCurrensy.innerText = name;
itemDiv.appendChild(itemCurrensy);

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
  handleTextMarkup(valute)
  getDataResponse();
})();

const processingRespons = ({ response: { Valute: data } }) => {
  removeAndClear()
  localStorage.setItem("valute", JSON.stringify(data));
  return handleTextMarkup(data)
};

const handleTextMarkup = (data) => {
  Object.values(data).map(({ CharCode, Value, Name }) =>
    markupCurrencyItem(CharCode, Value, Name)
  );
}

const removeAndClear = () => {
  loader.classList.remove("loader_active");
  localStorage.clear()
  const currencyDiv = [...document.querySelectorAll(".item")]
  currencyDiv.forEach((elem) => elem.remove());
}