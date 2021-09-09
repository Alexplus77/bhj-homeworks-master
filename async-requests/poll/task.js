// const responseObj= fetch("https://netology-slow-rest.herokuapp.com/poll.php").then(
//     response => {
//         if (response.status !== 200) {
//             console.log('У нас проблемы... код' + response.status)
//             return
//         }
//         response.json().then(myObj=>console.log( myObj)) }
    
// ).catch(err => console.log('Ошибка', err))

async function f1() {
    let  response  = await fetch("https://netology-slow-rest.herokuapp.com/poll.php");
    let obj = await response.json();
   const {data:{answers:arr, title:title}={}}=obj || {}
console.log(arr, title)
}

 f1()