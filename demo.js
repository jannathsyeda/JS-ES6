
// function myName(){  //normal, traditional function
//     let name = "Jannath";
//     console.log(name);
// }

// var myName = function() {   //ananomous function
//     let name = "Jannath";
//     console.log(name);
// }

var myName = () => {  //arrow function (also ananomous)
    let name = "Jannath";
    //let name = "Sakib"; //redeclare. Not possible with let
    name = "Sakib";
    //console.log(name);
}

myName();



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



function printSirName(name = "ABC"){
    console.log(name);
}
printSirName(); //ABC
printSirName("Arif Ahmed"); //Arif Ahmed
printSirName(undefined); //ABC
printSirName(null); //NULL





var gender;

console.log(typeof(gender));

function countParams(hisName,...params) { //rest parameter
    //console.log(params.length);
    console.log(hisName);

}

countParams("Enam", 20,56,25,74,85,25,25);




var frndList1 = ["Sammi", "Sushmita", "Nishat"];
var sisters = ["Radia", "Nowshin"];
var myGang = ["Tawsif", ...frndList1, "Hisham" ];
console.log(myGang);
















// anisul islam tutorial 46,47,49,50, 54,55,56,59-63 
//(https://www.youtube.com/watch?v=fBhxs9OHxtY&list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX)





























