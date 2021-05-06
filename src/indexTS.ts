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

// Pick one item from an array, optionally obeying weights.
// Pick: Functions, strings, numbers.
// Weights are defaulted to 1 and simply go up in increments of 1.
//    ie.: a weight of 2 has a ration of 2:1, 3 has a ration or 3:1 and 10, 10:1.
// Currently if you use an object with weights, all need to be objects with weights.
// TODO: allow for some entries to be objects with a weight, while others just strings
// TODO: Use a default of weight:1 if it is omitted.
// function pickOne(objs: object[] | []) {
//     // Pass a simple array or pass in a array of objects to
//     // with weights: { toBePicked: weight: 1}
//     // 1 is default for all and is the standard
//     if (!objs || objs.length === 0) return null;
//     if (Array.isArray(objs)) {
//         if (typeof objs[0] === "object") {
//             // Get name of item to be picked.
//             // Only two properties are allowed,
//             // and one must be "weight"
//             let propName = "";
//             for (const [i, k] of objs.entries()) {
//                 let count = 0;
//                 let weightIncluded = false;

//                 for (const j in k) {
//                     count++;
//                     if (k.hasOwnProperty(j)) {
//                         if (j === "weight") {
//                             weightIncluded = true;
//                         } else {
//                             propName = j;
//                         }
//                     }
//                 }
//                 if (!weightIncluded) throw new Error("Weight not included.");
//                 if (count > 2) {
//                     throw new Error("Too many items in objects to pick from.");
//                 }
//             }
//             let weightedArr: any = [];
//             for (const i of objs as { weight: number; propName: string }[]) {
//                 let weight = i.weight;
//                 let arr = new Array(weight).fill(i[propName]);
//                 weightedArr.push(...arr);
//             }

//             let selection = Math.floor(Math.random() * objs.length);
//             let shuffled = shuffleArray(weightedArr);
//             return shuffled[selection];
//         } else {
//             let selection = Math.floor(Math.random() * objs.length);
//             return objs[selection];
//         }
//     } else {
//         throw new Error("An array is needed as input");
//     }
// }

module.exports = {
    shuffleArray,
    randomInRange,
    randomIntOfLength,
    padNumber,
    // pickOne,
};
