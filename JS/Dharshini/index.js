// // // // // Datatypes
// // // // // primitive data types
// // // //     // number
// // // //     var num1 = 10;
// // // //     console.log(typeof(num1));    
// // // //     // boolean
// // // //     var isComing = true
// // // //     console.log(typeof(isComing));    
// // // //     // string
// // // //     var userName = "Karthick"
// // // //     console.log(typeof(userName));
    
// // // //     //undefined
// // // //     var b = undefined;
// // // //     console.log(typeof(b));    
// // // //     // null
// // // //     var a =null
// // // //     console.log(typeof(a));    
// // // //     // Nan
// // // //     a="name"
// // // //     b=20
// // // //     console.log(a*b);
// // //     // Non Premitive
// // //     // //array
// // //     // let arr = [10,true,undefined,null]
// // //     // // console.log(arr);
// // //     // // index ->0
// // //     // console.log(arr[0]);
// // //     // console.log(arr[1]);
// // //     // console.log(arr[2]);
// // //     // console.log(arr[3]);
// // //     // arr[4] = 60
// // //     // console.log(arr[4]);     
// // //     // // Object
// // //     // // Key value
// // //     // const person = {
// // //     //     name:["Arun","bala"],
// // //     //     age:23,
// // //     //     address:"CBE",
// // //     //     family:{
// // //     //         dad:"klhhhjjkk",
// // //     //         mom:"jkgffyfg",
// // //     //         sibilings:{
// // //     //             sister:"ghffgf",
// // //     //             brother:"tyunn"
// // //     //         }
// // //     //     }
// // //     // }
// // //     // console.log(person.family.sibilings.sister);
// // //     // console.log(person.name[1]);


// // // // functions
// // // // function add(a,b){
// // // //     return a+b
// // // // }
// // // // console.log(add(80,90));
// // // // console.log(add(60,55));

// // // // arrow
// // // // const arrow = ()=>console.log("Arrow is working")
// // // // arrow()
// // // // // IFFI
// // // // const newIFFI = function(){

// // // // }
// // // // // ananoums
// // // // const anon = (function(){})


// // // //contional Statement
// // // // if
// // // let age = 12
// // // // if(age>=18){
// // // //     console.log("He is Eligble to vote");    
// // // // }
// // // // // ifelse
// // // // if(age>=18){
// // // //     console.log("He is Eligble to vote");    
// // // // }else{
// // // //     console.log("He is Not Eligible");
    
// // // // }

// // // // elseif
// // // if(age>19){
// // //     console.log("He is Adult");
    
// // // }
// // // else if(age<13){
// // //     console.log("he is Child");
    
// // // }
// // // else{
// // //     console.log("He is Teenager");
    
// // // }
// // // // nestedif

// // // // switch
// // // // let today = new Date()
// // // // let day = today.getDay()
// // // let today = "sunday"

// // // switch(today){
// // //     case 0:
// // //         console.log("Today is sunday"); 
// // //         break  
// // //     case 1:
// // //         console.log("Today is monday");
// // //         break  
// // //     case 2:
// // //         console.log("Today is tuesday");
// // //         break    
// // //     case 3:
// // //         console.log("Today is Wednesday");
// // //         break    
// // //     case 4:
// // //         console.log("Today is Thursday"); 
// // //         break 
// // //     case 5:
// // //         console.log("Today is Friday"); 
// // //         break 
// // //     default:
// // //         console.log("Today is Saturday");
        
// // // }


// // // loops

// // // while
// // // let a =10
// // // while(a>=0){
// // //     if(a%2===0){
// // //         console.log(a);
// // //     }    
// // //     a--
// // // }

// // // array
// // // let arr = [20,40,55,66,87,99] //20=0,40=1,55=2,66=3,87=4,99=5
// // // let a =arr.length-1
// // // let max = arr[a]
// // // while(a>=0){
// // //     if(arr[max]<arr[a]){
// // //         max = arr[a]
// // //     }    
// // //     a--
// // // }
// // // console.log(max);
// // // do while
// // // let userName= "Bala"

// // // let b = 0
// // // while(b<userName.length){
// // //     console.log(userName[b]);
    
// // // }
// // // do while
// // // do{
// // //     console.log("Do while is working");
    
// // // }while(10>15)
// // // for
// // // let userName= "Bala"
// // // let output = ""
// // // for(let x=0;x<userName.length;x++){
// // //     output += userName[x]
// // //     console.log(output);
    
// // // }
// // // ES6 concepts --
// // // for of
// // // for(let x of userName){
// // //     console.log(x);
    
// // // }
// // // // for in
// // // for(let x in userName){
// // //     console.log(userName[x]);
    
// // // }
// // //foreach
// // // arr.forEach((x)=>console.log(x))
// // // let arr = [20,40,55,66,87,99]
// // // let a= 0
// // // let sum = 0
// // // while(a<arr.length){
// // //     sum+=arr[a]
// // //     a++
// // // }
// // // console.log(sum);

// // // MRF
// // // let arr = [20,40,55,66,87,99]
// // // // Map
// // // arr.map((x)=>console.log(x))
// // // // Reduce
// // // const total = arr.reduce((acc,sum)=>acc+sum)
// // // console.log(total);
 
// // // // Filter
// // // let graterValue = arr.filter((x)=>x>40)
// // // console.log(graterValue);
// // let arr = [20,40,55,66,87,99]
// // // pop
// // arr.pop()
// // console.log(arr);
// // // push
// // arr.push(502)
// // console.log(arr);
// // // shift
// // arr.shift()
// // console.log(arr);
// // // unshift
// // arr.unshift(1022)
// // console.log(arr);
// // // sort
// // let arr1 = [5,2,1,4,3,8]
// // let fruit = ["kiwi","Banana","orange","apple"]
// // let fruits = fruit.map((x)=>x.toLowerCase())
// // fruits.sort()
// // console.log(fruits);
// // arr1.sort()
// // console.log(arr1);
// // // slice
// // arr.slice(0,2)
// // console.log(arr);
// // arr[2] = 523
// // console.log(arr);
// // // splice
// // arr.splice(0,2,628)
// // console.log(arr);
// // //indexOf
// // console.log(arr.indexOf(66));
// // // includes
// // console.log(arr.includes(64));
// // // find
// // let finds = arr.find((x)=>x===60)
// // console.log(finds);
// // // split
// // let sen = "This is basic js code"

// // let newArr = sen.split(" ")
// // console.log(newArr);

// // spread opeartor
// // let arr = [10,20,30,40,50]
// // let arr1 = [60,70,80,90,100]

// // let arr2 = [...arr,...arr1]
// // console.log(arr2);

// // // rest opeartor
// // let [first,second,...third] = arr2
// // console.log(first,second,third);

// // destructure
// // const person = {
// //     firstName:"xyx",
// //     secondName:"abc",
// //     age:25,
// //     city:"CBE"
// // }

// // const {firstName,secondName} = person
// // // console.log(firstName);
// // // console.log(secondName);
// // // template literals
// // console.log(`User FirstName is:${firstName}`);
// // setTimeout
// // setTimeout(()=>{
// //     console.log("SetTimeout is working");
    
// // },5000)
// // setInterval

// let arr = ["Basic", "basic1", "basic2"];

// for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//         console.log(arr[i]);
//     }, i * 1000);   
// }



