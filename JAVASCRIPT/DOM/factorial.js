let a = 6;
function factorial(number)
{
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b)=>
    {
        return a*b
    })
    //arr.slice(1,)---- this returns the array from 1st index to entire array
    console.log(c)

}
//IMP is reduce function is used to reduce the array to single line based on the function you written in the parebthesis of 
//reduce function
factorial(a)
