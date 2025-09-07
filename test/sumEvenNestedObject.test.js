const sumEvenNestedObjectFunction = require("../src/sumEvenNestedObject");

test('Sum even number nested object', () => {
    const object1 = {
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
                superInner: 2,
                notANumber: true,
                alsoNotANumber: "yup"
            }
        }
    };

    const object2 = {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: 'car' }
    };

    const object3 = { a: 1, b: { c: 3 } }

    expect(sumEvenNestedObjectFunction(object1)).toBe(6);
    expect(sumEvenNestedObjectFunction(object2)).toBe(12);
    expect(sumEvenNestedObjectFunction(object3)).toBe(0);
});