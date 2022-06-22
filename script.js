
let op = prompt(`Choose the operation you want to perform

Eg: +, -, *, /

Select: `);

let a = prompt("Enter the first number: ");
let b = prompt(`Enter the second number:
${a} ${op} :`);

let num1 = parseInt(a);
let num2 = parseInt(b);



if (op == '+') {
    optr = num1 + num2;
    alert('The result is ' + optr);
}

else if (op == '-') {
    optr = num1 - num2;
    alert('The result is ' + optr);
}

else if (op == '*') {
    optr = num1 * num2;
    alert('The result is ' + optr);
}

else if (op == '/') {
    optr = num1 / num2;
    alert('The result is ' + optr);
}

else {
    alert('The operation isnt defined');
}
