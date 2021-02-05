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
console.log(i);
