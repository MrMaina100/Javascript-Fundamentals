

//Variables sre the most basic building block.Variables gives us the option to store a value access it later and modify it

//CONST VS VAR VS LET 
//String concatination-combine string values
//the use of backticks is an easier option

const firstname='John';
const lastname='Cena';
let fullname;

console.log('Hello there your full name is :'+ firstname + ' '+ lastname);


const jina1='John';
const jina2='Cena';
let jinalote=jina1+' '+jina2;

console.log('hello there your name is,'+jinalote);


//Javascript is a loosely typed language. When we create a variable in Javascript we do not have the specify what type of value will be stored in the variable.Javascript will automatically do that bsed on the value provided

const num2=44;
const num3=22;
const add=num2+num3;
const sub=num2-num3;
const mult=num2*num3;
const div=num2/num3;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);

//in javascript there are a total of 7 datatypes
//we have the primitive data types -string,numbers,boolean,null,undefined,symbol
//the other datatypes are the object datatypes-Arrays,Functions,Objects
//in javascript we have opearters in the name of typeof-here we have the (typeof variable) and (typeof value)

//string 
const text='type of text';
//number

//boolean- here boolean are like light switches where they can have two values either true or false 

//null

//undefined

//arrays functions and objects 

//An Array- an array offers us an easier wy to store items .Not only can we store items in an array we can also access them and perfom various operations with a great ease. 
// Arrays are zero based ibdex.meaning in lame mans term they start counting from zero 

const friends=['kendrick', 'ye','hover','cole','mac'];

console.log(friends);

// now in the console on the web ,'kendrick' will be our zero based index 

console.log(typeof text);

//on the point of performing various operations on them we have operations like re assiging a value 

friends[4]='macmiller';
console.log(friends);

//FUNCTIONs
//Functions allows us to write our code in one place and later re-use that code all throughout our applications without copying and pasting.
//now functions reduce redundancy.

// this is how you set up a function

function  hello(){
    //logic
}
// now in order to declare a function we have to invoke it 
//HOW TO ENVOKE A FUNCTION I DOWN BELOW 
hello ();



//Parameters 
//what are parameters.Parameters is a local variable or a placeholder that essentially give javascript and idea.while naming a parameter one usually follows the rules on naming a variable thats why its considered a local variable. 

function greetings(jinalao){
    console.log('vipi '+ jinalao);
}

//greet samuel
greetings('samuel');


//RETURN 

//0bjects-They can be defined as a collection of properties,or the properties are also refered to as keys 
//the properties or the keys have values.easiest way of picturing an object is thinking of real life onjects for example a car ,(a car is an object with some properties ,color type and model.it also has methods ,if you have a car that us good enough it probably can drive it can stop or accelerate)

const person={
    name1:'Derrick',
    lastname1:'Mburu',
    age:22,
    education:false,
    married:true,
    siblings:['Nancy','James','Izoo','Kevins'],
    salamu: function (params) {
        console.log('hello my na name is John');
        
    },

}
//now to invoke a method we use the dot notation 

console.log(person.married);



//CONDITIONAL STATEMENTS 
//here conditional statements work in the way that if the condition is met then javascript runs the code,if not met then javascript moves past the code.

if (true) {
    console.log('hello mbuchez');
    
}

// now we would also want to evaluate if the value is false also run code.we could set up Else 

const value4=3>6;

if (value4) {
    console.log('yessiiirrrr');
    
} else {
    console.log('no siiirrrr');
    
}


//another example

const nambari1=8;
const nambari2=23;

if (nambari1>nambari2) {
    console.log('kwani ume chizi');
    
} else {
    console.log('cheza chini');
    
}

//now lets say you have two numbers both of them of the same value lets say const num1=8 and const num2=8..here is where the comparison operators kick in 


// const num3=9;
// const num4=9;
// const value9=num3>=num4

// if (num3>num4) {
//     console.log('Mr dejaay');
    
// } else if(value9){
//     console.log('si lazma usemem= mwenyewe najua');
// } else {
//     console.log('nina madem wa ki sure');
// }

// Logical Operators in Javascript  (||-OR) (&&-AND)

//Lets have an example where we are going to have a condition that if the name of the user is lets BOB we  are going to greet the user, however if the name is not we are going reply with wrong value.


const middlename='charles';
const umri=23;

if (middlename==='charles') {
    console.log('Mambo vipi ');
    
} else {
    console.log('wrong user');
    
}

//Switch statements.switch statements in javascript are another way we can write IF ans ELSE IF statements.for example lets have a dice we are going to roll

//when dealing withs witch statements ensure you use break ,if not javascript will continue running your code 

const dice=3;

switch (dice) {
    case 1:
        console.log("you have 1");
        
        break;

    case 2:
        console.log("you have 2");
        break;

    case 3:
        console.log("you have 3");
        break;

    case 4:
        console.log("you have 4");
        break;

    case 5:
        console.log("you have 5");
        break;

    case 6:
        console.log("you have 6");
        break;
}

//Now lets look at loops in javascript 
//all loops allow you to run a block of code if the condition is met or is true lets have an example here

// Now imagine a scenario where you have some amount and when the amount is bigger than zero you will print in the console "am goin to the mall"

//While loop 

// let amount=10

// while (amount>0) {
//     console.log("i have"  + amount +  "and am going to the mall");
//     amount--
    
// }



//STRING METHODS 
//GLOBAL AND LOCAL SCOPE
//ARRAY ITERATION-(MAP,FILTER,REDUCE)
//GLOBAL OBJECTS-MATH,DATE.


//STRING PROPERTIES AND METHODS 
//soo everytime in javascript , we create a string that could be an empty string or a string with 10k paraghraps everytime we do that we have access to properties and methods that essentially allow us to work with that text 
//javascript creates a wrapper string object each and everytime we create a string using a string literal and thats how we can access those methods  

let statements="El mbuchezz";
let matokeo=statements.length;

console.log(matokeo);
console.log(statements.length);//so this is our property but then we also have methods 

console.log(statements.toLocaleLowerCase());// wlhy did we use ()-remmber to invoke a method we use ()
//now lets say we want to access the last letter of a string where that string have alot of characters what do we do.heres how

console.log(statements.charAt(statements.length -1));
//we also have indexof-now what indexof does ,it gets you the character at a specific index 
console.log(statements.indexOf("E"));//in the console it spits back index of 0 -remeber arrays and strings are zero based index 
//now we have a pretty intrersting one called trim-as the name suggests it trims .It trims the white spaces from the begginning to the end.
console.log(statements.trim());

//TEMPLATE LITERALS
//BACKTICK CHARACHTERS
//INTERPOLATION ${}-INSERT EXPRESSION

//Now lets take a trip down memory lane while we were using string concatination 


const jina6="kendrick";
const umri2=44;
const sentence="His name is " +jina6 + " and he is age " + umri2;
const sentence2=`His name is ${jina6} and his age is ${umri2}`;
console.log(sentence2);

console.log(sentence);

//the way we access template literals is the use of backticks .now where on earth are back ticks located-backticks are located at the top of the tab key left from one;

//ARRAYS PROPERTIES AND METHODS

const jina8=["kevin","Kibloshi","Adama","Vinny","Beva"];

//length(properties)
console.log(jina8.length);
console.log(jina8[jina8.length -1]);//using this property will always display the last array even if the arrays is added other values in the near future.

//concat

const lastname3=["mburu","mbulu","rombonight"];
const allnames=jina8.concat(lastname3)

console.log(allnames); 


//reverse-the reverse in other words flips the array in such a way that the last array now becomes the first array in that order.

console.log(allnames.reverse());

//unshift-the unshift adds value to the beggining of the array.
allnames.unshift("shushan");
console.log(allnames);

//shift-now what shift does is that it removes the first item from the array
allnames.shift();
allnames.shift();
console.log(allnames);

//push-now what push does is that it adds items at the end of an array.the opposite of push is pop 

allnames.push("lamar")
console.log(allnames);


//Splice-what splice does is that we can grab specific items from an arrray.splice mutates  the oroginal array.

const specificname=allnames.splice(3 , 3);
console.log(specificname);
console.log(allnames);

//arrays and for loops 

// const majina=['Susy', 'Kim', 'Lilian'];
// const lastname4=['Maina'];
// let newarray=[];

// for(let i = 0; i < majina.length; i++);{
//     console.log(i);
//     console.log(majina[i]);
//     newarray.push(`${majina[i]}${lastname4}`);
// }

// console.log(newarray);



//refrence vs the value 
//now remember premitive datatypes and object datatypes .the premitive datatypes include the string, numbers, boolean and undefined while the object datatypes include the arrays functions  and objects.



//now lets look at ternary operator 

const kivalue=4>98;

kivalue ? console.log('value is true'): console.log('value is false');

//Variable lookup

const globalnumber=9;

function addition(num6,num7){
    const globalnumber=10;

    const result=num6+num7+globalnumber;
    return result
    function multiply6() {
        globalnumber=100;
        const multiplyresult=result*globalnumber;
        console.log(multiplyresult);
        
    }
    multiply6()

}

console.log(addition(4,3));


//callbackfunctions, High order functions, functions as first class objects


//now lets talk more about functions.functions are first class objects.now what that means is that we can store functions in the variable (the expressions). We can then pass functions to another function as an argument and also return a function from the function

//now what the heck is a high order function. a high order function is simply a function that accepts another function as an argument or returns function as a result.

//now what exaclty are callback functions.callback functions are passed to another function as an argument and executed inside that function.


//examples

// function greetmorning(jina9) {
//     const myname='Kijana Derrick'
//     console.log(`Goodmorning ${jina9} my name is ${myname}`);
    
// }
// greetmorning('Ruth');

// //okay great now what if we want to great in the afternoon or maybe evening

// function morning(name2){
//     return `Goodmorning ${name2.toUpperCase()}`;
// }

// function evening(name2){
//     return`Goodevening ${name2.repeat(2)}`;
// }

// function greet(name2,cb){
//     const jinalangu='Mbuchez';
//     console.log(`${cb(name2)}, my name is ${jinalangu}`);
// }

// greet('kingsly coman', morning)

//REPETATION
//CALL BACKS-ealier we described a call back as essentially a function that is passed into anoother another function and then called inside that function to complete some sort of routine or action 



function greetmorning(jina11){
    const myjina='kimani';
    console.log(`Goodmorning ${jina11} my name is ${myjina}`);
}

greetmorning('Derrosis');


//now lets create a high order function that will great good morning and afternoon.-remember high order functions is when a function accepts another function as an argument or returns another function as a result 

function morning(name3){   // now this is our call back
    return `Good morning ${name3}`;
}
function afternoon(name3){   // now this is our call back
    return `Good afternoon ${name3}`;
}

function greet(name3, cb){
    const name4='Lewandoski';
    console.log(`${cb(name3)} my name is ${name4}`);
}

greet('rashy', morning);
greet('deriko', afternoon);


//powerful array methods .the powerfull array methods are the FOREACH, MAP , FILTER , FIND , REDUCE 
//they ittirate over the array and there is no need to setup a forloop and you do nice modifications within those functions.The way they work is that they accept a callback function as an argument and then the function behind the scenes calls callback function against each item in the ARRAY 
//We can refrence that item in the call back parametre 


//FOR EACH.Now for each does not return a new array.The way for each works is that it ittirates over the array and then we can decide on whatever we want to do with it 

//map-in most vanilla javascript applications you will use map alot as well as in react framework.now map does return a new array so lets say with our example while setting it up --const age=people.map(function ( ){}).however it does not change the size of the original array.So if the original array has 3 items then the new array will have 3 items 
//map you cuold do anything you want as far as the values you can grab threm from the original aray and then modify them however you want as you are setting up the new array.

const people=[
    {name5:'Barney',age:20,position:'Developer', id:1, salary:200},
    {name5:'Marshall',age:25,position:'Designer', id:2, salary:300},
    {name5:'Lilly',age:30,position:'boss lady', id:3, salary:600},
    {name5:'Robin',age:30,position:'Developer', id:4, salary:500},
    {name5:'Mosbey',age:30,position:'Developer', id:5, salary:500}
];


// const age=people.map(function(person){
//     return person.name5 + 'kimani'
// });
// console.log(age);


//filter-now filter method does return a new array however it can manipulate the size of the new array.return based on the condition.




const youngpeople=people.filter(function (person) {
    return person.age<=25;
});

const Developer=people.filter(function (person) {
    return person.position ==='developer';
});

console.log(youngpeople);


const kidudumtu=people.find(function(person){
    return person.id===5;
});

console.log(kidudumtu);


//REDUCE it is very special that it can replace map and filter however we needed to understand them abit because it can be challenging.reduce still iterates over an array it still uses the callback function but it reduces the value in the array to a signle value.the value could be anything ( number,array,object)
//in the callback function instead of one parameter now we are getting two 

//1 parameter (accu)-total of all calculations
//2 parameter (curr)-current iteration/value 


// high order arrays again.lets goooooo

const companies=[
    {name6:'company one', category:'finance', start:1981, end:2003},
    {name6:'company two', category:'retail', start:1992, end:2008},
    {name6:'company three', category:'auto', start:1999, end:2007},
    {name6:'company four', category:'retail', start:1989, end:2010},
    {name6:'company five', category:'technology', start:2009, end:2014},
    {name6:'company six', category:'finance', start:1987, end:2010},
    {name6:'company seven', category:'auto', start:1986, end:1996},
    {name6:'company eight', category:'technology', start:2011, end:2016},
    {name6:'company nine', category:'retail', start:1981, end:1989},
];


const umri3=[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// foreach-now for each is a much better way and easier way to loop through an array rather than using a for loop.it does not return anything back but it is a much and nicer way to loop through data

// okay lets have a basic for loop.
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < companies.lengtht; i++) {
//     console.log(companies[i]);
    
// } 
// the code above is the basic  for loop and just use it for your refrence.

companies.forEach(function (company){
    console.log(company.name6);

});

// filter-now lets look at the filter array.just as the name says, filter allows us to filter things out from the array.lets have an example, we have the ages(umri3)array and we want the ages above 21

//now lets have it with the for loop and later look at the filter 

// let candrink=[]
// for (let i = 0; i < umri3.length; i++) {
//     if(umri3[i]>=21){
//         candrink.push(umri3[i])

//     }
    
// }

// console.log(candrink);


//now lets use filter

const candrink = umri3.filter(function (umri3) {
    if(umri3 >= 21){
        return true;
    }
});

console.log(candrink);

// with filter we can make it into one line using the arrow function 

//lets have another example where we will be filtering the retail companies

const retailcompanies= companies.filter(function (company){
    if(company.category==='retail'){
        return true;
    }
});

console.log(retailcompanies);


const retail=companies.filter( company=> company.category==='retail');
console.log(retail);

//filter company that started from the 80s

const startup=companies.filter(function (company){
    if(company.start >= 1980 && company.start < 1990){
        return true;
    }
});

console.log(startup);

//lets have one more with the companies that lasted atleast 10 years or more

const teamten= companies.filter(company=> (company.end-company.start >=10));

console.log(teamten);


//MAP-now lets look at map .map works a little bit different instead of filtering we can create a new array of anything from the current array.













//sort-now lets look at sort. sort basically works like the other functions 
//an example .lets sort companies by the start year .from the earlist to the latest year


const sortedcompany= companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;

    }else{
        return -1;
    }
});

console.log(sortedcompany);

//now lets sort ages from the highest to the lowest 

const sortedages=umri3.sort(function(a,b){
    if(a>b){
        return 1;

    }else{
        return -1;
    }
    
});



console.log(sortedages);


// reduce 
//here we will be working with an example .using the ages array lets all add the ages together.


const miaka=[20,3,45,65,12,3,12,15,16,34,54,67,89,]

//now using the high order arrays filter the ages grater than 21 


// const great21=miaka.filter(function (age){
//     if(age>=21){
//         return true;

//     }
// });

// console.log(great21);


//now lets write the code using the ES6 Arrow functions.

const great21=miaka.filter(age=> age>=21);
console.log(great21);

//now lets create the age array in assending order using sort 

const sortage=miaka.sort(function(a,b){
    if(a>b){
        return 1;
    }else{
        return -1;
    }

});

console.log(sortage);


const watu=[
    {name7:'abby', salary2:200},
    {name7:'kngs', salary2:300},
    {name7:'huria', salary2:500}
];

const addedup= watu.reduce(function(total,salary2){
    return total+salary2;
},0);

console.log(addedup);


//MATH OBJECT-this is part of the starndard built in object im javascript.Javascript has some nifty global objects which can use anywhere in our application without any extra setup

//DATE OBJECT- similarly with math object  we can work with date object  however eith the date object it can be a bit complicated.



//Examine the document object

// console.dir(document)

// var items= document.getElementsByClassName('list-group-item');
// console.log(items);

// console.log(items[2]);
// items[2].textContent='mbuchez';
// items[2].style.color='purple';
// items[2].style.backgroundcolor='yellow';

// //now lets talk about query-selectors.
// //now you use the query selector for one-item.query selectors only grab the first item 

// const header = document.querySelector('#main-header');
// header.style.color = 'red';


// const itemlist = document.querySelector('#items');
// // console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundcolor = 'blue';

//creating new elements 

var newdiv= document.createElement('div');
//class
newdiv.className='yoo';

//id
newdiv.id='drezzy';

//insert attribute 

newdiv.setAttribute('title', 'yoo mbuchez');

//create a text node- this wold be used to add content in the div.
//here we actually create another variable.

var newdivtext= document.createTextNode('ita  kuaje mbuchezz');


//after creating a new div 
newdiv.appendChild(newdivtext);
console.log(newdiv);


//events ( mouse events keyboard events )

// var button = document.getElementById('button').addEventListener('click', buttonclick)

// function buttonclick() {

//  document.getElementById('header-title').textContent='wale wote tuna jua ni warazi';
//  document.querySelector('#main').style.backgroundcolor = '#f45'; 
//     // console.log('clicked clicked ');
    
// }

//mouse events 

// the dom again my brothers and sisters 

//DOM standing for document object model -here we are going to llearn how to intereact with the elemnt .finally we are going to be able to use all the knowledge and make a webpage dynamic 
 
//we are going to cover on how to select items , traverse the dom , inserting and removing elements . applying style and adding and removing css elements 



//Get attribute set attribute 

//okay okay the dom by traversy media .been having problem understandig this final part of javascript but anyway lets get into it 

const formy =document.querySelector('#my-form');
const nameinput =document.querySelector('#name');
const emailinput =document.querySelector('#email');
const msg =document.querySelector('.msg');
const userlist =document.querySelector('#users');


formy.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventdefault();


    if (nameinput.value==='' || emailinput.value==='') {
        alert("please enter value");
    }else {
        console.log('success');
    }
}