
// alert
// alert("WELCOME !!!")

// print the text
console.log("Hello JS !!!")

// variable

var fullName="jisan"
console.log(fullName)
let Name="jisan"
console.log(Name)

const age=100
console.log(age)

// objects
let accInfo={
    Name:"Lokesh",
    Age:20,
    isCollege:false
}

console.log(accInfo["isCollege"])


// if else statement
let color;
if(4==5){
    color="black";
}
else if(7==7){
    color="blue"
}
else{
    console.log("Hari")
}
console.log(color)

// ternary operator

let isValue= 19>18 ? "true":"false";
console.log(isValue);

// switch case

let fruits="Apple";

switch(fruits){
    case "orange":
        console.log("oranges are 20 rs per kg ");
        break;
    case "Apple":
        console.log("Apples are 50per kg");
        break;
    default :
        console.log("out.of stock");
}

// getting a input from the user

// let guess=Number(prompt("Enter the Name : ")) 
console.group(typeof(guess))

// loops

for(let i=0;i<3;i++){
    console.log(i+"--> i")
}


let gameNm=25;
/* let guessNum=prompt("pls guess the number : ")
//while(){
    if(gameNm==guessNum){
        console.log("you won!!")
        break;
    }
    guessNum=prompt("you enter number is wrong pls renter the number")
}*/

// do-while it run atleast one time

let Num=9;

do{
    console.log("print")
    Num--;
}
while(Num>9);

//  template literals
console.log(`the amount ${fruits} will be 20rs only`)


// strings
let str1="Lokesh";
let str2="kumar";
let str3="lokesh kumar"
console.log(str1.concat(str2));
console.log(str1.slice(1,4));
console.log(str1.substring(1,4));
str1.replace('Lokesh','loki')
console.log(str1.replace('Lokesh','loki'))
console.log(str3.replaceAll('k','l'))

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())
console.log(str1.trim())
console.log(str1.search('L'));
console.log(str1.includes('LO'))
console.log(str1.p)

// Arrays

let arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(2);
console.log(arr);
arr.shift();
console.log(arr);
let stri=arr.toString()
console.log(stri)
console.log(arr.slice(1,3))
console.log(arr.splice(2,2,101,102))
console.log(arr);

// forEach Loop

let newArr=[1,2,3,4];
newArr.forEach((val)=>{
    console.log(val)
});

    // square of the number 
let squrNum=(num)=>{
    console.log(num*num);
}
newArr.forEach(squrNum);
console.log(newArr)
// map array

let newArray=arr.map((val)=>{
    return val;
});
console.log(newArray);

// filter arr

let newFilter=newArr.filter((val)=>{
    return val%2==0;
});
console.log(newFilter);

// reduce arr
console.log(newArr);
function sum(pervious,next){
    return pervious+next;
}
let reduceArr=newArr.reduce(sum);
console.log(reduceArr);

// function

function Multi(a,b){
    return a*b;
}

console.log(Multi(2,3));


function countVowels(a){
    let count=0;
    for(let ch of a){
        if(ch=='a'|| ch=='e'||ch=='i'||ch=='o'||ch=='u'){
            count++;
        }
    }
    return count;
}


console.log(countVowels("loki"));

// arrow function

let CallbackFunc=(a,b)=>{
    return a*b;
}

console.log(CallbackFunc(9,2));

// call back function

function add2(a,b){
    return a+b;
}

function add3(a,b,add2){
    return a+b+add2;
}
 console.log(add3(1,2,add2(1,2)))

// DOM by id

document.getElementById("new").innerHTML="LOKESH";

// DOM by class

let class1=document.getElementsByClassName("newClass");
console.log(class1);

// DOM by tag name

let TagName=document.getElementsByTagName("p");
console.log(TagName);
console.dir(TagName);


let AddName=document.getElementById("new");
 AddName.innerText=AddName.innerText+" KUMAR";


let Class=document.querySelectorAll(".Class");
Class[0].innerHTML="<p>new one</P>";

let indx=0;
for(div of Class){
    div.innerText=`Inner text ${indx}`;
    indx++;
} ;

let para=document.querySelector("div");
console.log(para.getAttribute("class"));

// node.style

let newColor=document.querySelector(".no");
newColor.style.backgroundColor="red";
// newColor.style.visibility="hidden";


// insert element

let newButton=document.createElement("button");
newButton.innerText="Click me!";
newButton.style.backgroundColor="red";
newButton.style.width="200px";
newButton.style.borderRadius="20px";

let divison=document.querySelector(".insertEle");
divison.append(newButton);
// divison.prepend(newButton);
// divison.before(newButton);
// divison.after(newButton);
// divison.remove();
// we can use only one property at a time

// add a new class style to existing one 

// classList

let newclasslist=document.querySelector(".classlistt");
newclasslist.classList.add("newclaslist");

// Events

// onclick

let eventButt=document.querySelector(".eventButt");
eventButt.onclick=()=>{
    console.log("button pressed");
};

// onmouseover

let eventDiv=document.querySelector(".eventDiv");
eventDiv.onmouseover=()=>{
    console.log("Div overd");  
};

// object

eventDiv.onclick=(e)=>{
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
}

// Event Listener

let event1Butt=document.querySelector(".eventButt");
event1Butt.addEventListener("click",()=>{
    console.log("Event listner");
});

event1Butt.removeEventListener("click",()=>{
    console.log("Event listner");
});


// toogle button

const bdy=document.querySelector("body");
const toogleButt=document.querySelector(".toogleButt");
let mode="light";
toogleButt.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        bdy.style.backgroundColor="black";
        // bdy.classList.add(".black");
        // bdy.classList.remove(".white");
    }    
    else{
        mode="light";
        bdy.style.backgroundColor="white";
        // bdy.classList.add(".white");
        // bdy.classList.remove(".black");
    }
})

// --prototype--

const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    },
};
const lokesh={
    salary:50000,
};

lokesh.__proto__=employee;



const lokesh1={
    salary:50000,
    calcTax(){
        console.log("Tax rate is 25%");
    },
};

lokesh1.__proto__=employee;



// oops

class Parent{
    constructor(branch){
        this.branch="cce ";
    }
}
class Child extends Parent{
    constructor(sec,branch){
        super(branch);
        this.sec=sec;
       
    }
}

let chi=new Child("i","cce");
console.log(chi.branch);

// try -catch

try{
    console.log(a)
}
catch(e){
    console.log(e);
    
}


// call back hell


function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("Data",dataId)
    },2000);
    if(getNextData){
        getNextData();
    }
}

getData(1,()=>{
    getData(2);
});

// promise

function GetData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data",dataId)
        },2000);
        resolve("success");
        if(getNextData){
            getNextData();
        }
    });
}

GetData(1).then((res)=>{
    return GetData(2);
}).then((res)=>{
    console.log(res);
})
GetData(1).catch((rej)=>{
    console.log("reject")
})


// await 

// async function DataNum(){
//    await getData();
// //    await fun should be surrounded by async
// };

// API

const URL="https://cat-fact.herouapp.com/facts";

//  const getFacts=()=>{
//     console.log("getting Data"); 
//     let response=fetch(URL);
//     console.log(response);
//     let data=response.json();
//     console.log(data);

// }

// function getFACTS(){
//     fetch(URL).then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// } 




let ToO=document.querySelector(".to");
ToO.querySelector("img");


// descructor 


let id=2;
let newName='loki';

let studentTwo={
    id,
    newName,
    description:'new one',
}

const{ description}=studentTwo;
console.log(description);
// this is known as descrutor

const oldArray=[1,2,3];
// using a destructor in array

const [arrayFirstElement,arraySecondElement]=oldArray;
console.log(arrayFirstElement,arraySecondElement)


// fearures of es6 aboove also


const personArray=[
    {
        name:"person 1",
        age:10,
        country:"USA"
    },
    {
        name:"person 2",
        age:20,
        country:"UK"
    },
    {
        name:"person 3",
        age:30,
        country:"INR"
    },{
        name:"person 4",
        age:40,
        country:"RUS"
    },
]

// discructor

const [FirstObj]=personArray;
console.log(FirstObj)
console.log(FirstObj.country)

// map

let getAllNames=personArray.map((singlePerson,index)=>{
    return singlePerson.name;

});
console.log(getAllNames);

//   filter
let getPersonFromUSA=personArray.filter((singlePerson)=>{
    return singlePerson.country==='USA';
})
console.log(getPersonFromUSA);

// some -it return true or false
//  it check if anyone of them have above 20
let checkAnyOneisAbove20=personArray.some((person)=>{
    return person.age>20;
});
console.log(checkAnyOneisAbove20);

// every -it return true or false
//  it check if all of them have above 20 age

let checkAllAgeisAbove20=personArray.every((person)=>{
    return person.age>20;
});
console.log(checkAllAgeisAbove20);

let Fruit=["apple","orange","grapes"];

// includes -it check the particular element is present on the array
 console.log(Fruit.includes('apple'));

//  indexOf  -> it return the actual index of the  
console.log(Fruit.indexOf('apple'))

// findIndex

console.log(personArray.findIndex((value)=>{
    value.country==='RUS';
}))
