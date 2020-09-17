console.log("Welcome to FizzBuzz!")

let x = prompt("Enter a number", 0);
let num = parseInt(x);

console.log("Counting to "+ num)

for (let i = 1; i<=num; i++)
{
    if ((i%3 === 0) && (i%5 === 0))
    {
        console.log("FizzBuzz");
    }
    else if(i%3 === 0)
    {
        console.log("Fizz");
    }
    else if(i%5 === 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}

console.log("The End!!");