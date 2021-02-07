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