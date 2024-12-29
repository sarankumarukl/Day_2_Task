function cat(){
    if(true){
        var a=5;
        console.log(a);
    }
    console.log(a);
}

//----------------------------------------------------
console.log(a);
 var a=5 //let a=5
//----------------------------------------------------
data type
let a =BigInt123 or 12345n; 
//----------------------------------------------------
let student1={
    name:["abi","rahul"],
    age:29,
    isstudent:true,
    address:{
        city:"perunudrai",
        state:"tn"
    },
    hello: function(){
        console.log("hi");

    }
}
student1.hello();
console.log(student1.name); 
//----------------------------------------------------
let student1=new Object();
student1.name="abi";
student1.age=20;
student1.hello=function(){
    console.log("hello");
}
console.log(student1)
//----------------------------------------------------

//if else

 let c=15


if(c%3==0 && c%5==0){
    console.log("hi hello");
}
else if(c%3==0){
    console.log("hi");
}
else if(c%5==0){
    console.log("hello");
} 

//-----------------------------------------------

 if(c%3==0){
    console.log("hi");
}
if(c%5==0){
    console.log("hello");
} 

//------------------------------------------------
    let choice=[1,2,3];
    switch(choice){
        case [1,2,3]:
            console.log("hi");
            break;
        case 2:
            console.log("hello");
            break;
        case 3:
            console.log("hey");
            break;
    }

//--------------------------------------------------

//loops

let a=1;
for(console.log('a');a<=3;console.log('b')){
    console.log('c');
    a++;
} 

//----------------------------------------------------


for(let a=1;a<100;a++) or for(var a=1;a<100;a++)
console.log("hi");
console.log(a);

//----------------------------------------------------

for(a=1;a<100;a++);
console.log("hi");
console.log(a);

//----------------------------------------------------

while(true){             //while(){ return an error }
    console.log("hi");
    break;
}

//----------------------------------------------------

let a=1;
do{
    console.log(a);
    a++;
}while(a<=10);

//----------------------------------------------------
//switch
let choice=2;
switch(choice){
    case 1:
        console.log("hi");
        break;
    case 2:
        console.log("hello");
        
    case 3:
        console.log("hey");
        
    default:
        console.log("not");
        
}
//----------------------------------------------------
//function

let student1=new Object();
student1.name="abi";
student1.age=20;
student1.hello=function(){
    console.log("hello");
}
console.log(student1)  
//----------------------------------------------------

// non parameterised +without return type
function apple(){
    console.log("apple");
}
apple();
//----------------------------------------------------

//non parameterised +with return type
function apple(){
    let a= "apple";
    return a;
}
let b=apple();
console.log(b);

//or 
function apple(){

    return "apple";
}
//let b=apple();
console.log(apple());
//----------------------------------------------------

//parameterised + without return type---normal function
function add(d,c){
    console.log(d+c);
}
let d,c;
add(5,6);

//arrow function--a
let apple = () => console.log("hello");
apple();

let banana = () => "hello";
console.log(banana()); 

let orange=()=> {
    console.log("Aruna");
    return 3+3;
}
//orange();
console.log(orange());
//----------------------------------------------------
 
let student1=new Object();
student1.name="abi";
student1.age=20;
student1.hello=function(){
    console.log("hello");
}
console.log(student1.hello()); 
//----------------------------------------------------
//arrow 
let orange=(a,b)=> {
    console.log("add a + b =");
    return a+b;
    
}
//----------------------------------------------------
console.log(orange(5,7));

 let orange=(a,b)=> 
    a+b

console.log(orange(5,7)); 
//----------------------------------------------------
//spread operator(...)--spread the values
let a=[1,2,3]
let y=[4,9,8]
let b=[...a,...y]
console.log(b)
function spread(values){
    console.log(values);
}
spread(...b);
//----------------------------------------------------

let c=[1,2,3,4,5]
let d=c;
d[2]=10;
console.log(c)  //output: [1,2,10,4,5]--why because in array we pass the address only..so it change the value accordingly
//----------------------------------------------------

//rest operator--combine the values into array or object
function spread(...values){  //spead(x,...values)--x=1 values=2,3,4,5
    console.log(values);
}
spread(1,2,3,4,5);
//----------------------------------------------------

let student1={
    name:["abi","rahul"],
    age: 20
}
let values= {...student1};
console.log(values)
//----------------------------------------------------
//destructuring
let a=[1,2,3,4,5];
let [b,x,c,...y]=a;
console.log(y); 

//----------------------------------------------------

let student1={
    name:["abi","rahul","sathru","sow"],
    age:[20,21,24,25],
    city:["erode","salem","cbe","chennai"],
    state:["tn","tn","tn","tn"]
}
let [a,b,c]=student1;
//let values= {a,b,...student1};
console.log(c)
//----------------------------------------------------

 //callback
 //callback-take function as a parameter to a function
function attendance (callback){
    setTimeout(()=>{
        console.log("attendance present");
        callback();
    },2000);
}
function lunch(callback){
    setTimeout(()=>{
        console.log("lunch finished");
        callback();
    },2000);
}


function goingtohome(callback){
    setTimeout(()=>{
        console.log("going to home");
        callback(); //callback;
    },200);

}

//callbackhell 
attendance(()=>{
    lunch(()=>{
        goingtohome(()=>{
            console.log("day completed");
        })
    })
})

//----------------------------------------------------
function attendance (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let attendance=true;
            if(attendance){
                resolve("attendance present");
            }
            else
                reject("attendance absent");
            
        },2000);

    })
}
function lunch (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let lunch=true;
            if(lunch){
                resolve("had lunch");
            }
            else
                reject("not yet");
            
        },2000);

    })
}
function goingtohome (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let goingtohome=true;
            if(goingtohome){
                resolve("Boarded the bus");
            }
            else
                reject("missed the bus");
            
        },2000);

    })
}
attendance().then((value) => {console.log(value); return lunch();})
            .then((value) => {console.log(value); return goingtohome(); })
            .then((value) => {console.log(value); })
            .catch((error) => {console.error(error);})

//----------------------------------------------------
async function finalday(){
    try{
        let att=await attendance();
        console.log(att);
        let lun =await lunch();
        console.log(lun);
        let home=await goingtohome();
        console.log(home);
    } catch(error){
        console.error(error);
    }
    
}
finalday(); 
//----------------------------------------------------
example
function f1 (callback,name){
    setTimeout(()=>{
        console.log(`file ${name} is downloading`);
        callback(name);
    });
}
function f2(name){
    setTimeout(()=>{
        console.log(`file ${name} got downloaded`);
    });
}
f1(f2,"abc");
function f3(){
    setTimeout(()=>{
        console.log("download completed");
    },200);
}
f3();
//----------------------------------------------------