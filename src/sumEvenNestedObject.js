function sumEvenNestedObject(obj) {
    let sum = 0;

    function recursive(current) {
        for (let key in current) {
            let val = current[key];
            if (typeof val === 'number' && val % 2 === 0) {
                sum += val;
            } else if (typeof val === 'object' && val !== null) {
                recursive(val);
            }
        }
    }

    recursive(obj);
    return sum;
}

module.exports = sumEvenNestedObject;