const sortFunction = require("../src/sortingDescending");

test('Sorting array descending', () => {
    expect(sortFunction([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
    expect(sortFunction([10, 0, -1, 5])).toEqual([10, 5, 0, -1]);
    expect(sortFunction([])).toEqual([]);
});