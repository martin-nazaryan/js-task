const checkSumEqualsNum = (arr, num) => {
    const sumRecursion = (a, b) => {
        if (arr[a] + arr[b] === num) {
            return true;
        }

        if (a === arr.length - 2) {
            return false;
        }

        if (b === arr.length - 1) {
            a++;
            b = a;
        }

        return sumRecursion(a, ++b);
    };

    let a = 0;
    let b = 1;
    return sumRecursion(a, b);
};

console.log(checkSumEqualsNum([1, 8, 4, 9, 69], 17));
