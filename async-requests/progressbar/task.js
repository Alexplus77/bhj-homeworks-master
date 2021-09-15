
const send = document.querySelector('#send')
const progress = document.querySelector('#progress')
console.log()
   

const getRespons = async (e) => {   
    try {        
        const response = await fetch("https://netology-slow-rest.herokuapp.com/upload.php", {
            method: 'POST',
           body: new FormData()
        });
        
const dataRes =  response.body.getReader();
        const { done, value } = await dataRes.read()
        console.log(value.length)
        
    } catch (error) {
        console.log(error)
    }
}
send.addEventListener('click', (e) => {
e.preventDefault()
    getRespons()
 })
