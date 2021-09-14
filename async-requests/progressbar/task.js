const dataFile = document.querySelector('input[type=file]')
const getRespons = async () => {
    try {
       const dataPost = new FormData
        dataPost.append('file', dataFile)
        const respons = await fetch("https://netology-slow-rest.herokuapp.com/upload.php", {
            method: 'POST',
           body:dataPost
        });       
const dataRes= await respons.json()
        console.log(dataRes)
    } catch (error) {
        console.log(error)
    }
}

getRespons()