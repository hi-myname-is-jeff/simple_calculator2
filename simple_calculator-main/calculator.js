function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero hhh";
    }
}

module.exports = { add, subtract, multiply, divide };

// Example usage
if (require.main === module) {
    const x = 10;
    const y = 5;

    console.log(`${x} + ${y} = ${add(x, y)}`);
    console.log(`${x} - ${y} = ${subtract(x, y)}`);
    console.log(`${x} * ${y} = ${multiply(x, y)}`);
    console.log(`${x} / ${y} = ${divide(x, y)}`);
}
