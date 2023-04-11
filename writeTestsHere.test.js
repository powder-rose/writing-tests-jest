const getSum = require('./1')

test('Sum of Array', () => {
    
    expect(getSum([1, 2, 3])).toBe(6);
    expect(getSum([null])).toBeNull()
    expect(getSum([undefined])).toBeUndefined()
    expect(getSum([1, NaN])).toBe(NaN)
    expect(getSum([1, 3])).toBeLessThan(5)
    expect(getSum([0.1, 0.5])).toBeCloseTo(0.6)
    
});

const arithmetic = require('./2')
test('Calculate', () => {
    expect(arithmetic(1, 5, 'add')).toBe(6)
    expect(arithmetic(0.1, 0.5, 'add')).toBeCloseTo(0.6)
    expect(arithmetic(-5, -3, 'add')).toEqual(-8)
    expect(arithmetic(undefined, undefined, 'add')).toBe(NaN)
    expect(arithmetic(10, 2, 'subtract')).toBeGreaterThan(7)
    expect(arithmetic(10, 2, 'subtract')).toBe(8)
    expect(arithmetic(10, 2, 'subtract')).not.toBeUndefined();
    expect(arithmetic(8, 2, 'divide')).toBe(4)
    expect(arithmetic(1, 0, 'divide')).toBe(Infinity)
    expect(arithmetic(0.10, 0.5, 'multiply')).toBeCloseTo(0.05)
    expect(arithmetic(0.6, 7,'multiply')).toBeLessThanOrEqual(4.5)
    
})

const checkNumber = require('./3')

test('Check Number', () => {
    expect(checkNumber(1)).toBeFalsy()
    expect(checkNumber(8)).toBeTruthy()
    expect(checkNumber(NaN)).not.toBeTruthy()
    expect(checkNumber(-5)).not.toBeTruthy()
})