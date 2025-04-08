let a = 10;
let b = 20;

function add(a,b)
{
    let c = a + b;
    // console.log(c);
    return c;
}

function whatIsMyGrade (marks)
{
    if(marks>80){
        // console.log("I got HD");
        return "HD";
    } else if (marks<80) {
        // console.log("sorry I failed")
        return"failed";
    }
    else{
            return"pass";

    }
}
// start with function, name the function, write function

let marks = 86;
let grade = whatIsMyGrade(marks);

let total = add(2,4);
console.log(total);
total = add(34,56);
console.log(total);

function subtract(a,b)
{
    let res = a - b;
    // console.log(c);
    return res;
}

let result = subtract (12,4);
console.log(result);
result = subtract (a.b);
console.log(result);

