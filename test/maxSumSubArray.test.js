const maxSumSubArrayFunction = require("../src/maxSumSubArray");

test('Find max sum value from subarray, with length', () => {
    expect(maxSumSubArrayFunction([100, 200, 300, 400], 2)).toBe(700);
    expect(maxSumSubArrayFunction([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(maxSumSubArrayFunction([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    expect(maxSumSubArrayFunction([1, 2], 3)).toBe(null);
});