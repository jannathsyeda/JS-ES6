console.log('---normal, traditional function---------------------------------')
function myName(){ 
    let name = "Jannath";
    console.log(name);
}

var myName = function() {   //ananomous function
    let name = "Jannath";
    console.log(name);
}

var myName = () => {  //arrow function (also ananomous)
    let name = "Jannath";
    //let name = "Sakib"; //redeclare. Not possible with let
    name = "Sakib";
    //console.log(name);
}

myName();


console.log('---obj element ------------------------------')
var myObj = {
    myName: "Fahima",
    hobby: ['gardening', 'coding', 'dancing'],
    age: 25,
    myInfo: function() {
        this.hobby.forEach(item => {
            console.log(`Hobby is: ${item}`);
        })
    }
}

myObj.myInfo();




console.log('---default param-------------------------------')
function printSirName(name = "ABC"){
    console.log(name);
}
printSirName(); //ABC
printSirName("Arif Ahmed"); //Arif Ahmed
printSirName(undefined); //ABC
printSirName(null); //NULL


console.log('---rest param------------------------')
function countParams(hisName,...params) { //rest parameter
    //console.log(params.length);
    console.log(`hisName=${hisName}`);

}

countParams("Enam", 20,56,25,74,85,25,25);


var frndList1 = ["Sammi", "Sushmita", "Nishat"];
var sisters = ["Radia", "Nowshin"];
var myGang = ["Tawsif", ...frndList1, "Hisham" ];
console.log(myGang);


console.log('---undefind--------------------')

var gender;

console.log(typeof(gender));


console.log('--hoisting---------------------------------------------')
// anisul islam tutorial 46,47,49,50, 54,55,56,59-63 
//(https://www.youtube.com/watch?v=fBhxs9OHxtY&list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX)
//*hoisting (js er default behaviour ,variable assign agey kore pore var key word di a declare korley kaj kore,var declare na korley o kaj kore.but let and const eivahbe kaj kore na,js er default behaviour er jonno nicheyr var takey auto upore ni a jay,ekei hoisting boley)
name1='fahi';
console.log(name1);
var name1;


console.log('--strict mode--------------------------------------------------')
//strict mode diley hoisting o kaj kore na,var sara kaj kore na .file er ekdom upore "use strict" likha lage
"use strict" //eivahbe declare kore
nameStrict='fahi';
console.log(nameStrict);
// var nameStrict;


console.log('--object literals--------------------------------------------------')
//A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
 function student(name2,age1){
    return {
        //can wright same way a object 
        // name2:name2,
        name2,
        age1
        // age1:age1
    }
}
const result=student('fahi',25);
console.log(result);



console.log('--object function--------------------------------------------------')

const Object=
{
    body:function(){
        return('hello! Im object function');
    }
}
console.log(Object.body());

console.log('--ES6 object function consize method--------------------------------------------------')


const Object1=
{
    'body1'(){
        return('hello! Im object function');
    }
}
console.log(Object1['body1']());











