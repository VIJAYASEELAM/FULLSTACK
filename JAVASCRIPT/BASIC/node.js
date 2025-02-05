console.log("Computer is blasting");
console.log("expectations will hurt uh ");

let real_name = "vijaya"
let friend = "seelam"
console.log(`Her name is ${real_name} and her friend name is ${friend}`)
//called ${} as template literals
// \ the backslash is used for ESCAPING

// FOR REPLACING stringname.replace("77","sa");
//77 replaces with sa
//if the 77 occurs more times first occurance only be replaced

let random = Math.random()

let numbers = [1,2,3,4,5]
numbers.splice(2,1,23,24)
//iN splice it has parameters startpos,no of el to remove,then the eements u want to add
console.log(numbers)

//OBJECTS iteration
//The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, allowing scripts (such as JavaScript) to dynamically access, modify, and manipulate the content, structure, 
//and style of a webpage.

let obj = {
    a:1,
    b:2,
    c:3
}
for(const key in obj)
{
    if(Object.hasOwnProperty.call(obj,key))//parameters are objname and iterator name
    {
        const ele = object[key];
        console.log(key,element)
    }
}
//by rule one elemnt should have one id
for(const iterator of numbers)
{
    console.log(iterator)
}


