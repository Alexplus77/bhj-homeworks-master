const currenciesDiv = document.querySelector("#items");
const loader = document.querySelector(".loader");
const card = document.querySelector(".card");

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

(() => {
  const btnRefresh = document.createElement("button");
  btnRefresh.classList.add("btnRefresh");
  btnRefresh.innerText = "Обновите курс валют";
  card.insertBefore(btnRefresh, card.children[0]);
})();

const getDataResponse = async () => {
  try {
    const responseData = await fetch(
      "https://netology-slow-rest.herokuapp.com"
    );
    const dataCurrency = await responseData.json();
    processingResponse(dataCurrency);
  } catch (error) {
    console.warn(error);
  }
};

const handleTextMarkup = (data) => {
  Object.values(data).map(({ CharCode, Value, Name }) =>
    markupCurrencyItem(CharCode, Value, Name)
  );
};

(() => {
  loader.classList.add("loader_active");
  const valute = JSON.parse(localStorage.getItem("valute"));
  if (valute === null) {
    getDataResponse();
  } else {
    setTimeout(() => {
      handleTextMarkup(valute);
      loader.classList.remove("loader_active");
    }, 1000);
  }
})();

const processingResponse = ({ response: { Valute: data } }) => {
  removeAndClear();
  localStorage.setItem("valute", JSON.stringify(data));
  return handleTextMarkup(data);
};

const removeAndClear = () => {
  loader.classList.remove("loader_active");
  localStorage.clear();
  const currencyDiv = [...document.querySelectorAll(".item")];
  currencyDiv.forEach((elem) => elem.remove());
};

const refresh = (e) => {
  loader.classList.add("loader_active");
  if (!e.target.classList.contains("btnRefresh")) {
    return;
  }
  getDataResponse();
};

card.addEventListener("click", refresh);
