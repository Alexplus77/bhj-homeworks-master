const getDataCotaile = async () => {

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }    

}

getDataCotaile()