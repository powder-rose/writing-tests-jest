const getSum = require('./1')

test('Sum of Array', () => {
    expect(getSum([1, 2, 3])).toBe(6);
    expect(getSum([-2, -4, -2])).toBe(-8)
    expect(getSum([1, 2, 3, 4, 5, 6, 7, 8])).toBe(36)
    expect(getSum([1, NaN])).toBe(NaN)
    expect(getSum([1])).toBe(1)
});

const arithmetic = require('./2')
test('Calculate', () => {
    expect(arithmetic(1, 5, 'add')).toBe(6)
    expect(arithmetic(10, 2, 'subtract')).toBe(8)
    expect(arithmetic(8, 2, 'divide')).toBe(4)
    expect(arithmetic(10, 5, 'multiply')).toBe(50)
    expect(arithmetic(1, 0, 'divide')).toBe(Infinity)
    expect(arithmetic(1, NaN, 'add')).toBe(NaN)
})

const checkNumber = require('./3')

test('Check Number', () => {
    expect(checkNumber(1)).toBe(false)
    expect(checkNumber(8)).toBe(true)
    expect(checkNumber(NaN)).toBe(false)
    expect(checkNumber(12)).toBe(true)
    expect(checkNumber(0)).toBe(true)
})