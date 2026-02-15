// // Datatypes
// // primitive data types
//     // number
//     var num1 = 10;
//     console.log(typeof(num1));    
//     // boolean
//     var isComing = true
//     console.log(typeof(isComing));    
//     // string
//     var userName = "Karthick"
//     console.log(typeof(userName));
    
//     //undefined
//     var b = undefined;
//     console.log(typeof(b));    
//     // null
//     var a =null
//     console.log(typeof(a));    
//     // Nan
//     a="name"
//     b=20
//     console.log(a*b);
    // Non Premitive
    // //array
    // let arr = [10,true,undefined,null]
    // // console.log(arr);
    // // index ->0
    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);
    // console.log(arr[3]);
    // arr[4] = 60
    // console.log(arr[4]);     
    // // Object
    // // Key value
    // const person = {
    //     name:["Arun","bala"],
    //     age:23,
    //     address:"CBE",
    //     family:{
    //         dad:"klhhhjjkk",
    //         mom:"jkgffyfg",
    //         sibilings:{
    //             sister:"ghffgf",
    //             brother:"tyunn"
    //         }
    //     }
    // }
    // console.log(person.family.sibilings.sister);
    // console.log(person.name[1]);


// functions
// function add(a,b){
//     return a+b
// }
// console.log(add(80,90));
// console.log(add(60,55));

// arrow
// const arrow = ()=>console.log("Arrow is working")
// arrow()
// // IFFI
// const newIFFI = function(){

// }
// // ananoums
// const anon = (function(){})


//contional Statement
// if
let age = 12
// if(age>=18){
//     console.log("He is Eligble to vote");    
// }
// // ifelse
// if(age>=18){
//     console.log("He is Eligble to vote");    
// }else{
//     console.log("He is Not Eligible");
    
// }

// elseif
if(age>19){
    console.log("He is Adult");
    
}
else if(age<13){
    console.log("he is Child");
    
}
else{
    console.log("He is Teenager");
    
}
// nestedif

// switch
// let today = new Date()
// let day = today.getDay()
let today = "sunday"

switch(today){
    case 0:
        console.log("Today is sunday"); 
        break  
    case 1:
        console.log("Today is monday");
        break  
    case 2:
        console.log("Today is tuesday");
        break    
    case 3:
        console.log("Today is Wednesday");
        break    
    case 4:
        console.log("Today is Thursday"); 
        break 
    case 5:
        console.log("Today is Friday"); 
        break 
    default:
        console.log("Today is Saturday");
        
}