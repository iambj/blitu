/**
 *
 * Shuffle an array using Fisher-Yates.
 * Returns a new array and is non-mutating.
 *
 * @param {array} arr - an array to be shuffled
 * @return {array} Returns a new shuffled array that didn't mutate the input
 */

function shuffleArray<ArrType>(arr: ArrType[]): ArrType[] {
    const mutate: ArrType[] = [...arr];
    let m: number = arr.length;
    let i: number;

    while (m) {
        i = Math.floor(Math.random() * m--);
        [mutate[i], mutate[m]] = [mutate[m], mutate[i]];
    }
    return mutate;
}

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrO = [1, 2, 3, 4, 5, 6, 7, 8, {}];

/**
 * Generate a random number in range, inclusive
 * Defaults to min=0 and max=100 for working with percentages quickly.
 * Negative numbers are acceptable.
 * @param {number} min - The lowest random number desired inclusively
 * @param {number} max - The largest random number desired inclusively
 * @return {number} - The random in range
 */

function randomInRange(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generate a random number of a certain amount of digits
 * @param count
 * @returns a string
 */
function randomIntOfLength(count: number): number {
    // Generate a random number of a certain amount of digits
    let num: string = "";
    for (let i = 0; i < count; i++) {
        num += Math.floor(Math.random() * Math.floor(9));
    }
    return parseInt(num);
}

/**
 *
 * @param str the initial string
 * @param total desired length of string
 * @param symbol what to pad the text with
 * @returns
 */

function padText(str: string, total: number, symbol = " ") {
    while (str.length < total) {
        str += symbol;
    }
    return str;
}

/**
 * Returns a string with the desired number of 0's padding the left.
 * Returns the same number if no padding is needed as type number.
 *
 * @param num
 * @param desiredDigits
 * @returns
 */
// TODO: add test coverage
function padNumber(num: number, desiredDigits: number = 2) {
    if (desiredDigits - String(num).length < 0) return num;
    return new Array(desiredDigits - String(num).length).fill(0).join("") + num;
}
console.log(padNumber(1));

module.exports = {
    shuffleArray,
    randomInRange,
    randomIntOfLength,
    padNumber,
};
