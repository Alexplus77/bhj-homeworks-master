const currenciesDiv = document.querySelector("#items");
const loader = document.querySelector(".loader");
const btnRefresh = document.querySelector(".btnRefresh");

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

const processingResponse = ({ response: { Valute: data } }) => {
  changeStateActive();
  localStorage.setItem("valute", JSON.stringify(data));
  return handleTextMarkup(data);
};

(() => {    
  loader.classList.add("loader_active");
  btnRefresh.classList.remove("btnRefresh_active");
  const valute = JSON.parse(localStorage.getItem("valute"));
  if (!valute) {
    getDataResponse();
  } else {
    setTimeout(() => {
      handleTextMarkup(valute);
      changeStateActive();
    }, 1000);
  }
})();

const changeStateActive = () => {
  loader.classList.remove("loader_active");
  btnRefresh.classList.add("btnRefresh_active");
};

const removeAndClear = () => {
  localStorage.clear();
  const currencyDiv = [...document.querySelectorAll(".item")];
  btnRefresh.classList.remove("btnRefresh_active");
  currencyDiv.forEach((elem) => elem.remove());
};

const refresh = () => {
  loader.classList.add("loader_active");
  removeAndClear();
  getDataResponse();
};

btnRefresh.addEventListener("click", refresh);
