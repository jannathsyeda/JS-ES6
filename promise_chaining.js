const task1=()=>{
    return new Promise((res ,reject)=>{
        res("tas1 is complete");
    })
}

const task2=()=>{
    return new Promise((res, reject)=>{
        setTimeout(
            ()=>
        {
            res("task2 is complete");
        },5000
        );
    })

}
const task3=()=>{
    return new Promise((res,reject)=>{
        res("task3 is complete");
    })
}
//chaining as call back
task1()
.then((res)=>console.log(res))
.then(task2)
.then((res)=>console.log(res))
.then(task3)
.then((res)=>console.log(res));