//const 
// (cant not re assign ,u cant change value of const variable)
const name="fahima";
// name="jannath";
console.log(name);

const numbers=[12,3,1,12,33,66,88];
numbers[0]=90;
numbers.push(70);
console.log(numbers);

const fruits={
    name:"mango", 
    color:"yellow"
}
console.log(fruits);
fruits.name='orange';
console.log(fruits);// (but cant change whole fruits value)

//let
let patient="Mina"; //u can change value of let variable 
patient="Raju";
console.log(patient);
//let is called scope variable,it only works inside the scope ,like declare in curly basis ,only work in that place!
let sum =0;
for(let i=0 ;i<10;i++)
{
    sum=sum+i;
   
}
// console.log(i);//it show eeror undefined ,cz let is use in scope,inside the curly basis


//default pereameter
//if default is declare ,and also pass peram ,then ignor default
function add(n1,n2=20)
{
    sum=n1+n2;
    return sum;
}
let result=add(1,3);
console.log(result);


//es6 template
//* use kharet(``), *can see multi line with template

const firstName="fahima";

const lastName="jannath";
const add2=`${firstName} ${lastName} ${1+6+8} u can use karet  ,it called es6 template.it is usefull cz it ignore adding strings without + and all `;
console.log(add2);

//*can see multi line with template

const multiline=`1multiline.
2multiline.
3multiline.`;
console.log(multiline);


//old function
const doubleIt=function myfun(num) {

    let sum1=0;
    sum1=sum1+num;
    return num*2 ,sum1;
}
const sum1=doubleIt(10);
console.log(' result :' ,sum1);

// ES6 arrow function 
const  arrowFunction= n1 => n1*10;
const resultArrow=arrowFunction(5);
console.log(resultArrow);

//two param
const  arrowFunction2= (n1,n2) => n1*n2;
const resultArrow2=arrowFunction2(5,7);
console.log(resultArrow2);

//without param
const  arrowFunction3 = () => 5;
const resultArrow3=arrowFunction3();
console.log(resultArrow3);

//arrow
const doMath=(x,y) =>{
    const sum=x+y;
    const diff=x-y;
    const result= sum*diff;
    return result;

}
let result6=doMath(7,4);
console.log(result6);

//Spread operator, concatenate multiple arrays, array max
const array1=[3,5,4,3,1,6,5];
const array2=[8,5,9,2,4,5,6];
const array3=[2,5,9,7,5,6,9,7];
const addALLArray=[...array1,...array2,...array3];
console.log(addALLArray);

const ArrayMax=[100,200,300];
const result9=Math.max(...ArrayMax);
console.log('array max= ',result9);

//Class, constructor, create object from class
class student{
constructor(sId ,sName){
    this.id=sId;
    this.name=sName;
    this.university="metro";
}
}

const student1=new student('033','jannath');
const student2=new student('042','gazi');
console.log(student1," ",student2.name,);

// functional js 
//Note->map(array return ,main array thik tahkey),filter function(all s wala array name dibe),reduce(1ta value ans dey,like sob jug kori ekta ans dibo)-return array but main array change hoy na 


//Note->oop main 3 pincipals -Encapsulation, inheritance,polymorphism
//Inheritance, extends class, super, class method
class parent{
    constructor(FatherName,id){
        this.FatherName="Mr.anis";
        this.id=33;
    }


}
class child extends parent{
    constructor(ChildName,i){
        super(); //call parent class constructor
        this.ChildName=ChildName;
        this.i=i;
    }
    
 addParentChild(){

   return this.ChildName+ " "+this.FatherName;

 }
}
const child1=new child('fahi',1);
// console.log(child1);
console.log(child1.addParentChild());


//disstructuring
//*kuno ekta bishal array theke kuno ekta element ke kuno variable e rakar shortcut upay

const person={
    name1:'fahi',
    roll1:33,
    address:'sylhet',
    contact:010232
}

const { name1, roll1 } = person;

console.log(name1,roll1);


//array Destructure
const arrayFriends=['mita','tina','rita','mita','any','mitu'];

const [ firstPosition,secondP,...restpositions]=arrayFriends;//array they []  variable declare e
console.log(firstPosition);
console.log(restpositions);


//complex obj Destructure
const Complexobject={
    name7:'fahi',
    roll9:33,
    info:{
        name0:'jannath',
        roll0:01
    }
}
const {name0}=Complexobject.info;
console.log(name0);