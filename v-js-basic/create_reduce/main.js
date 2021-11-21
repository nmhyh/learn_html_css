// Phương thức reduce có logic như thế nào?
Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        result = this[0];
        i = 1;
    }

    for (i; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce2(
    (total, number, index, array) => {
        console.log(total, number, index, array);
        return total + number
    }, 20
);
console.log(result);
