// // Promise
// // const Order = new Promise((rej,res)=>{
// //     let sucess = "Placed"
// //     if(sucess==="Placed"){
// //         rej("Order Placed Succesfully")
// //     }
// //     else{
// //         res("Unable to Place Order")
// //     }
// // })

// // Order.then((result)=>{console.log(result)}).catch((err)=>console.log(err))

// // const fetchData = new Promise((resolved,reject)=>{
// //     fetch(`https://fakestoreapi.com/products`).then((res)=>{
// //         if(res.ok){
// //             resolved(res.json())
// //         }
// //         else{
// //             reject("unable to connect API")
// //         }
// //     })
// // })


// // fetchData.then((data)=>console.log(data)).catch((err)=>{console.log(err)})





// // const fetchProducts = new Promise((resolved,reject)=>{
// //     fetch(`https://fakestoreapi.com/products`).then((res)=>{
// //         setTimeout(()=>{
// //             if(res.ok){
// //             resolved(res.json())
// //         }
// //         else{
// //             reject("unable to connect API")
// //         }
// //         },10000)
// //     })
// // })


 
// const fetchUsers = new Promise((resolved,reject)=>{
//     fetch(`https://fakestoreapi.com/users`).then((res)=>{
//         setTimeout(()=>{
//             if(res.ok){
//             resolved(res.json())
//         }
//         else{
//             reject("unable to connect API")
//         }
//         },5000)
//     })
// })

// // Promise.race([fetchUsers,fetchProducts]).then((res)=>{console.log(res)}).catch((err)=>console.log(err))
// // Promise.allSettled([fetchUsers,fetchProducts]).then((res)=>{console.log(res)}).catch((err)=>console.log(err))
// // Promise.all([fetchUsers,fetchProducts]).then((res)=>{console.log(res)}).catch((err)=>console.log(err))
// // Promise.any([fetchUsers,fetchProducts]).then((res)=>{console.log(res)}).catch((err)=>console.log(err))


// // fetchUsers.then((result)=>{console.log(result)}).catch((err)=>console.log(err))
// fetchUsers.then((result)=>{
//     for(let i=0;i<result.length;i++){

//         const {id,email,username,password,name} = result[i]
//         const {firstname,lastname} =  name
//         console.log(id,email,username,password,firstname,lastname);        
//     }
// }).catch((err)=>console.log(err))









// // let users = [
// //     {
// //         userName:"abc",
// //         userAge:25,
// //         email:"ab@gmail.com"
// //     },
// //      {
// //         userName:"xyz",
// //         userAge:25,
// //         email:"xy@gmail.com"
// //     },
// //     {
// //         userName:"def",
// //         userAge:28,
// //         email:"defy@gmail.com"
// //     }
// // ]


// // users.map((item)=>{
// //     console.log(item.email)    
// // })












// DOM ->Document Object Module

// let btn = document.getElementById("btn")
// const handleClick = ()=>{
//     btn.innerHTML =btn.innerHTML ===  "Clicked"?"Click": "Clicked"
//     btn.innerHTML ==="Clicked"?document.body.style.backgroundColor="black":
//     document.body.style.backgroundColor="white"
// }


// btn.addEventListener("click",()=>{
//     btn.innerHTML =btn.innerHTML ===  "Clicked"?"Click": "Clicked"
//     btn.innerHTML ==="Clicked"?document.body.style.backgroundColor="black":
//     document.body.style.backgroundColor="white"
// })
// let user = document.getElementById("userName")
// let password = document.getElementById("password")
// let username = "admin"
// let pass = "pass"
// const loginPage = ()=>{
//     if(user.value===username && password.value===pass){
//         alert("Succesfully login")
//     }
//     else{
//         alert("Login Error");        
//     }
// }


// let head = document.createElement("h6")
// head.innerText = "Welcome"
// document.body.append(head)

// let btn = document.createElement("button")
// let conatiner = document.getElementById("continer")
// btn.textContent = "Login"

// btn.style.backgroundColor = "red"
// btn.setAttribute("class","button")
// conatiner.append(btn)



// spread
let arr = [10,20,30,40]
let arr1 = [10,20,30,40]
let arr2 = [...arr,...arr1]
console.log(arr2);

// rest
let [one,two,...others] = arr2
console.log(one);
console.log(two);
console.log(others);
