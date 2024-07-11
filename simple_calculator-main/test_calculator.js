const { add, subtract, multiply, divide } = require('./calculator');
const assert = require('assert');

describe('Calculator', () => {
    it('should add two numbers', () => {
        assert.strictEqual(add(3, 5), 8);
    });

    it('should subtract two numbers', () => {
        assert.strictEqual(subtract(10, 5), 5);
    });

    it('should multiply two numbers', () => {
        assert.strictEqual(multiply(2, 3), 6);
    });

    it('should divide two numbers', () => {
        assert.strictEqual(divide(10, 2), 5);
        assert.strictEqual(divide(10, 0), "Cannot divide by zero");
    });
});
