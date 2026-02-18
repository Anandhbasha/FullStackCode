// // // Hoisting
// // // variable declaration
// // // var
// // // console.log(a); //undefined ->datatype

// // // var a=10
// // // var a =50 //redeclaration
// // // a=60 //re assign
// // // console.log("hello",a)

// // //let
// // // console.log(b);
// // // let b=52
// // //unable to redeclaration
// // // let b
// // // b=88
// // // console.log(b);

// // //const
// // // const c =10
// // // c=66
// // // console.log(c);

// // // variable scope 
// // // var
// // // global scope
// // //let const
// // //local scope

// // // {
// // //     let c =60
// // //     console.log(c);
// // // }


// // // varibale not start with number
// // //dont use Special Characters
// // // keyword dont use
// // // meaning full Names

// // // Operators
// // //Arithmetic
// // // +,-,*,/,%,++--
// // let a =10
// // let b=5

// // // console.log(a+b);
// // // console.log(a-b);
// // // console.log(a*b);
// // // console.log(a/b);
// // // console.log(a%b);
// // console.log(a++);
// // console.log(++a); //11 12
// // console.log(--a); //11
// // console.log(a--); //11
// // //10
// // console.log(a);

// // Comparision 
// // <,>,<=,>=,==,===
// // let a =5
// // let b=6
// // console.log(a>b);
// // console.log(a<b);
// // console.log(a<=5); 
// // console.log(a>=5); 

// console.log(a=="5"); //data type dont compare
// console.log(a==="5");


// // logical
// // && || !
// // and
// // let a =5
// // let b=6
// // console.log(a<b && a<3 && b<10);
// // console.log(a>b || a>3 || b>10);
// // console.log(a!=10);


// // assignment
// //=,+=,-+,*=,/=,%=
// let c = 10
// c+=10 //c=c+10
// console.log(c);

// // ternary
// let age=17

// console.log(age>19?"Adult":"Teenager");

// Data Types
// Premitive
    // number
    let num1=10
    console.log(typeof(num1));    
    // boolean
    todayClass = true
    console.log(typeof(todayClass)); 
    // string
    let user = "Arjun"
    console.log(typeof(user)); 
    // undefined
    let b=undefined;
    console.log(typeof(b)); 
    // null
    let c=null
    console.log(typeof(c)); 
    // Nan -not an number
    let a = 50
    b="hello"
    console.log(a*b);
    
// non Premitive
    // array
    // index
    // 1st value of index is 0
    // length starts from
    let x = [10,55,72,89,90] //10=0,55=1,72=2,89=3,90=4 lenth of array =5
    let y = [20,true,undefined,"Karthick"]
    console.log(x[1]);
    // console.log(y);
    console.log(y[3]);
    
    
    // Object
        // key value pair
        const person = {
            name:"Bala",
            age:25,
            city:"CBE",
            isAlive:true,
            family:{
                dad:"murugan",
                mom:"meenakshi",
                siblings:{
                    brother:"Kumar",
                    sister:"Divya"
                }
            }
        }

        console.log(person.family.siblings.sister);
        

