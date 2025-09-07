function maxSumSubArray(arr, limit) {
    if (arr.length < limit) return null;

    let max = 0;

    for (let i = 0; i <= arr.length - limit; i++) {
        let tempSum = 0;
        for (let j = 0; j < limit; j++) {
            tempSum += arr[i + j];
        }
        if (tempSum > max) max = tempSum;
    }

    return max;
}

module.exports = maxSumSubArray;