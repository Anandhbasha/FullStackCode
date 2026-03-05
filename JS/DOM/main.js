let userName = document.getElementById("userName")
let pass = document.getElementById("pass")
let details = document.getElementById("details")
// getElementByClassName
// getElementByTagName
// querySelector
//querySelector
let userName1 = "admin"
let password = "pass"
const login = (event)=>{
    event.preventDefault()
    if(userName1==="admin"&& password==="pass"){
        details.innerHTML = userName.value
    }
}

const add = (a,b)=>{
    console.log(a+b);    
}


// createElement

let btn = document.createElement("button")
btn.innerText = "Click"
document.body.append(btn)
