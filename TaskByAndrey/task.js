const carts = document.querySelector('.carts')
const getDataCotaile = async () => {

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
    try {
        const response = await fetch(url)
        const data = await response.json()
processingResponse(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }    

}
getDataCotaile()

const renderCocktailMarkup =(img, title)=>{
    const divCart = document.createElement('div')
    divCart.classList.add('cart')
    carts.appendChild(divCart)

    const image = document.createElement('img')
        image.setAttribute('src', img)
    divCart.appendChild(image)

    const titleCoctail = document.createElement('div')
    titleCoctail.classList.add('title')
    titleCoctail.innerText = title;
    divCart.appendChild(titleCoctail)
}

const processingResponse = ({ drinks }) => {
    drinks.forEach(coctail => {
        renderCocktailMarkup(coctail.strDrinkThumb, coctail.strDrink);
    })
}