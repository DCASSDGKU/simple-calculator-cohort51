function calculation() {
    // Get numbers from user
    let num1 = Number(prompt("Enter the first number: "));
    let num2 = Number(prompt("Enter the second number: "));


    // Perform calculations
    const sumResult = sum(num1, num2);
    const subsResult = subs(num1, num2);
    const multiResult = multi(num1, num2);
    const divResult = div(num1, num2);

    // Display results
    document.getElementById("results").innerHTML = `
        <p>${num1} + ${num2} = ${sumResult}</p>
        <p>${num1} - ${num2} = ${subsResult}</p>
        <p>${num1} * ${num2} = ${multiResult}</p>
        <p>${num1} / ${num2} = ${divResult}</p>
    `;
}

function sum(a, b) {
    return a + b;
}

function subs(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}