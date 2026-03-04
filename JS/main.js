// // // // // // // // Hoisting
// // // // // // // // variable declaration
// // // // // // // // var
// // // // // // // // console.log(a); //undefined ->datatype

// // // // // // // // var a=10
// // // // // // // // var a =50 //redeclaration
// // // // // // // // a=60 //re assign
// // // // // // // // console.log("hello",a)

// // // // // // // //let
// // // // // // // // console.log(b);
// // // // // // // // let b=52
// // // // // // // //unable to redeclaration
// // // // // // // // let b
// // // // // // // // b=88
// // // // // // // // console.log(b);

// // // // // // // //const
// // // // // // // // const c =10
// // // // // // // // c=66
// // // // // // // // console.log(c);

// // // // // // // // variable scope 
// // // // // // // // var
// // // // // // // // global scope
// // // // // // // //let const
// // // // // // // //local scope

// // // // // // // // {
// // // // // // // //     let c =60
// // // // // // // //     console.log(c);
// // // // // // // // }


// // // // // // // // varibale not start with number
// // // // // // // //dont use Special Characters
// // // // // // // // keyword dont use
// // // // // // // // meaning full Names

// // // // // // // // Operators
// // // // // // // //Arithmetic
// // // // // // // // +,-,*,/,%,++--
// // // // // // // let a =10
// // // // // // // let b=5

// // // // // // // // console.log(a+b);
// // // // // // // // console.log(a-b);
// // // // // // // // console.log(a*b);
// // // // // // // // console.log(a/b);
// // // // // // // // console.log(a%b);
// // // // // // // console.log(a++);
// // // // // // // console.log(++a); //11 12
// // // // // // // console.log(--a); //11
// // // // // // // console.log(a--); //11
// // // // // // // //10
// // // // // // // console.log(a);

// // // // // // // Comparision 
// // // // // // // <,>,<=,>=,==,===
// // // // // // // let a =5
// // // // // // // let b=6
// // // // // // // console.log(a>b);
// // // // // // // console.log(a<b);
// // // // // // // console.log(a<=5); 
// // // // // // // console.log(a>=5); 

// // // // // // console.log(a=="5"); //data type dont compare
// // // // // // console.log(a==="5");


// // // // // // // logical
// // // // // // // && || !
// // // // // // // and
// // // // // // // let a =5
// // // // // // // let b=6
// // // // // // // console.log(a<b && a<3 && b<10);
// // // // // // // console.log(a>b || a>3 || b>10);
// // // // // // // console.log(a!=10);


// // // // // // // assignment
// // // // // // //=,+=,-+,*=,/=,%=
// // // // // // let c = 10
// // // // // // c+=10 //c=c+10
// // // // // // console.log(c);

// // // // // // // ternary
// // // // // // let age=17

// // // // // // console.log(age>19?"Adult":"Teenager");

// // // // // // Data Types
// // // // // // Premitive
// // // // //     // number
// // // // //     let num1=10
// // // // //     console.log(typeof(num1));    
// // // // //     // boolean
// // // // //     todayClass = true
// // // // //     console.log(typeof(todayClass)); 
// // // // //     // string
// // // // //     let user = "Arjun"
// // // // //     console.log(typeof(user)); 
// // // // //     // undefined
// // // // //     let b=undefined;
// // // // //     console.log(typeof(b)); 
// // // // //     // null
// // // // //     let c=null
// // // // //     console.log(typeof(c)); 
// // // // //     // Nan -not an number
// // // // //     let a = 50
// // // // //     b="hello"
// // // // //     console.log(a*b);
    
// // // // // // non Premitive
// // // // //     // array
// // // // //     // index
// // // // //     // 1st value of index is 0
// // // // //     // length starts from
// // // // //     let x = [10,55,72,89,90] //10=0,55=1,72=2,89=3,90=4 lenth of array =5
// // // // //     let y = [20,true,undefined,"Karthick"]
// // // // //     console.log(x[1]);
// // // // //     // console.log(y);
// // // // //     console.log(y[3]);
    
    
// // // // //     // Object
// // // // //         // key value pair
// // // // //         const person = {
// // // // //             name:"Bala",
// // // // //             age:25,
// // // // //             city:"CBE",
// // // // //             isAlive:true,
// // // // //             family:{
// // // // //                 dad:"murugan",
// // // // //                 mom:"meenakshi",
// // // // //                 siblings:{
// // // // //                     brother:"Kumar",
// // // // //                     sister:"Divya"
// // // // //                 }
// // // // //             }
// // // // //         }

// // // // //         console.log(person.family.siblings.sister);
        

// // // // // functions
// // // // // function totalMarks(t,e,m,s,ss){
// // // // //     console.log(t+e+m+s+ss);
    
// // // // // }

// // // // // totalMarks(66,88,77,99,65)
// // // // // totalMarks(98,82,62,49,87)

// // // // // function totalMarks(t,e,m,s,ss){
// // // // //     return t+e+m+s+ss
    
// // // // // }

// // // // // console.log(totalMarks(66,88,77,99,65));

// // // // // console.log(totalMarks(98,82,62,49,87));

// // // // // types of function
// // // // // arrow
// // // // // const add = ()=>console.log("Hello arrow working")

// // // // // add()
// // // // // IIFI
// // // // // const newIffi = function(a,b){
// // // // //     return a*b    
// // // // // }
// // // // // console.log(newIffi(10,20));

// // // // // // ananoums
// // // // // const ana = (function(){

// // // // // })

// // // // // ana()

// // // // // conditional Statement
// // // // // if
// // // // let age = 3
// // // // // if(age>=18){
// // // // //     console.log("He is Eligible to vote")    
// // // // // }
// // // // // ifelse
// // // // if(age>=18){
// // // //     console.log("He is Eligible to vote")    
// // // // }else{
// // // //     console.log("Not Eligible to vote")    
// // // // }
// // // // // elseif
// // // // if(age>19){
// // // //     console.log("He is Adult")    
// // // // }
// // // // else if(age<13 && age>4){
// // // //     console.log("He is Child")    
// // // // }
// // // // else if(age<4){
// // // //     console.log("This is Baby");
    
// // // // }
// // // // else{
// // // //     console.log("He is Teenager");
    
// // // // }
// // // // // nested if
// // // // let ug = 71
// // // // let hsc = 65
// // // // let sslc = 72
// // // // if(ug>70){
// // // //     if(hsc>70){
// // // //         if(sslc>70){
// // // //             console.log("he is Eligible for interview");
            
// // // //         }
// // // //     }
// // // // }
// // // // // nested ifelse
// // // // // switch
// // // // let day = new Date()
// // // // let today = day.getDay()

// // // // switch(today){
// // // //     case 0:
// // // //         console.log("Today is Sunday");
// // // //         break
// // // //     case 1:
// // // //         console.log("Today is Monday");
// // // //         break
// // // //     case 2:
// // // //         console.log("Today is Tuesday");
// // // //         break
// // // //     case 3:
// // // //         console.log("Today is Wednesday");
// // // //         break
// // // //     case 4:
// // // //         console.log("Today is Thursday");
// // // //         break
// // // //     case 5:
// // // //         console.log("Today is Friday");
// // // //         break
// // // //     default:
// // // //         console.log("Today is Saturday");
        
// // // // }


// // // //loops
// // // //     //while
// // // //     // let a =10
// // // //     // while(a>0){ //11-> upto 
// // // //     //     console.log(a); //0        
// // // //     //     a-- //1
// // // //     // }
// // // //     let a=0
// // // //     while(a<=10){
// // // //         if(a%2!=0){
// // // //             console.log(a);            
// // // //         }
// // // //         a++
// // // //     }
// // // //     // array access
// // // //     let arr = [50,60,70,80,90]
    
// // // //     let b=0 //5
// // // //     while(b<arr.length){
// // // //         console.log(arr[b]); //arr[0] arr[1] arr[2]
// // // //         b++
// // // //     }
// // // //     // do while
// // // //     do{
// // // //         console.log("Do while is working");
        
// // // //     }while(10<5)
// // // //     //for
// // // let arr = [50,60,70,80,90]
// // // let user = "Bala"
// // // for(let x=user.length-1;x>=0;x--){
// // //     console.log(user[x]);
    
// // // }

// // // // B
// // // // Ba
// // // // Bal
// // // // Bala

// // // //    *
// // // //   ***
// // // //  *****
// // // // *******

// // // let rows = 4;

// // // for (let i = 1; i <= rows; i++) {  //2<=4

// // //     let spaces = "";
// // //     let stars = "";

// // //     // Spaces
// // //     for (let j = 1; j <= rows - i; j++) { //1<4-2 i<2
// // //         spaces += " ";                                     
// // //     }
// // //     // Stars 
// // //     for (let k = 1; k <= (2 * i - 1); k++) {  //2*4-1 = 7
// // //         stars += "*";
// // //     }

// // //     console.log(spaces + stars);  
// // // }

// // //   *
// // //  ***
// // // *****
// // //******* 


// // //4

// // // types of for loop
// // // for of

// // // ES6 concept
// // // for(let x of arr1){ //10 20 30 40
// // //     console.log(x);    
// // // }
// // // // for in 
// // // for(let x in arr1){ //0 1 2 3
// // //     console.log(arr1[x]);    
// // // }
// // // foreach
// // // arr1.forEach((x)=>console.log(x))

// // // array methods

// // // arr1.map((x)=>console.log(x+2))

// // //10+20+30+40 = 100
// // //odd even 

// // // array methods

// // // let arr1 = [10,23,37,40]

// // // for(let x of arr1){
// // //     if(x%2!=0){
// // //         console.log(x);
        
// // //     }
// // // }
// // // filter
// // // let odds = arr1.filter((x)=>x%2==0)
// // // console.log(odds);

// // // // reduce
// // // const total = arr1.reduce((a,b)=>a+b)
// // // console.log(total);

// // // // pop
// // // let arr1 = [10,23,37,40]
// // // arr1.pop()
// // // console.log(arr1);
// // // // push
// // // arr1.push(150)
// // // console.log(arr1);

// // // // shift
// // // arr1.shift()
// // // console.log(arr1);

// // // // unshift
// // // arr1.unshift(400)
// // // console.log(arr1);

// // // //sort
// // // let arr = [5,3,1,2,8,7]
// // // arr.sort()
// // // console.log(arr);

// // // //slice
// // // console.log(arr.slice(1,3)); //1,2
// // // splice
// // let arr = [10,20,30,40,50,60]
// // arr.splice(1,2,800,7000)
// // console.log(arr);

// // // find
// // let finds = arr.find((x)=>x===11)
// // console.log(finds);

// // // includes
// // console.log(arr.includes(11));

// // // indexof
// // console.log(arr.indexOf(7000));
// // // split
// // let text = "I am Learning Js"

// // let newVal = text.split(" ")
// // console.log(newVal);


// // spread opeartor
// let arr = [5,3,1,2,8,7]
// let arre = [10,20,30,40]
// let arr2 = [...arr,...arre]
// console.log(arr2);

// //rest operator
// let [first,second,...rest] = arr
// console.log(first);
// console.log(second);
// console.log(rest);



// // destructure
// const person = {
//     name:"arun",
//     age:20
// }

// const {name,age} = person
// console.log(name);
// console.log(age);


// // Template literals
// console.log("userName:"+name);
// console.log(`userName:${name}`);
// // string concordination

// setTimeout
// setTimeout(()=>{
//     console.log("SetTimeout");    
// },2000)
// // setInterval
// setInterval(()=>{
//     console.log("SetTimeout");    
// },2000)

// let arr = ["image1","image2","image3"]

// for(let i = 0;i<arr.length;i++){
//     setInterval(()=>{
//         console.log(arr[i]);
        
//     },i*2000)
// }

// async
// promise

// const ticketBook = new Promise((resolved,reject)=>{
//     const success = false
//     if (success){
//         resolved("Ticket Booked Confirmed")
//     }
//     else{
//         reject("Unable to Book the Ticket")
//     }
// })

// ticketBook.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})


// any

// const friend1 = new Promise((resolved,reject)=>{
//     let reached1 = true
//     if(reached1){
//         resolved("Friend1 Reached Home")
//     }
//     else{
//         reject("Friend1 Not yet Reached")
//     }
// })
// const friend2 = new Promise((resolved,reject)=>{
//     let reached2 = false
//     if(reached2){
//         resolved("Friend2 Reached Home")
//     }
//     else{
//         reject("Friend2 Not yet Reached")
//     }
// })
// const friend3 = new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//         let reached3 = false
//         if(reached3){
//             resolved("Friend3 Reached Home")
//         }
//         else{
//        https://fakestoreapi.com/products     reject("Friend3 Not yet Reached")
//         }
//     },5000)
// })

// Promise.any([friend1,friend2,friend3]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
// race
// Promise.race([friend1,friend2,friend3]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

// all
// Promise.all([friend1,friend2,friend3]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

//allSettled
// Promise.allSettled([friend1,friend2,friend3]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})


// get method

// const getData = new Promise((resolved,reject)=>{
//     fetch(`https://fakestoreapi.com/products/1`).then((res)=>{
//         if(res.ok){
//             resolved(res.json())
//         }
//         else{
//             reject("Unable to Connect API")
//         }
//     })
// })

// getData.then((result)=>{console.log(result)}).catch((err)=>console.log(err))


// post data 
// const getData = new Promise((resolved,reject)=>{
//     fetch(`https://fakestoreapi.com/products/`,{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({

//             title:"Test Product",
//             price:500
//         })
//     }).then((res)=>{
//         if(res.ok){
//             resolved(res.json())
//         }
//         else{
//             reject("Unable to Connect API")
//         }
//     })
// })

// getData.then((result)=>{console.log(result)}).catch((err)=>console.log(err))

// put Data

// const getData = new Promise((resolved,reject)=>{
//     fetch(`https://fakestoreapi.com/products/1`,{
//         method:"PUT",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({

//             title:"Update Product",
//             price:999
//         })
//     }).then((res)=>{
//         if(res.ok){
//             resolved(res.json())
//         }
//         else{
//             reject("Unable to Connect API")
//         }
//     })
// })

// getData.then((result)=>{console.log(result)}).catch((err)=>console.log(err))


// Delete data
// const getData = new Promise((resolved,reject)=>{
//     fetch(`https://fakestoreapi.com/products/1`,{
//         method:"DELETE"
//     }).then((res)=>{
//         if(res.ok){
//             resolved("Product Deleted Succesfully")
//         }
//         else{
//             reject("Unable to Connect API")
//         }
//     })
// })

// getData.then((result)=>{console.log(result)}).catch((err)=>console.log(err))


// async

const fetchData = async()=>{
    const res = await fetch(`https://fakestoreapi.com/products`)
    if(res.ok){
        const data = await res.json()
        console.log(data);
        
    }
    else{
        console.log("Unable to connect API");
        
    }
}

fetchData()


