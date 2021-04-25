/**
 *
 * Shuffle an array using Fisher-Yates.
 * Returns a new array and is non-mutating.
 *
 * @param orderedArr
 * @returns an array
 */

function shuffleArray<ArrType>(orderedArr: ArrType[]): ArrType[] {
    const mutate: ArrType[] = [...orderedArr];
    let m: number = orderedArr.length;
    let i: number;

    while (m) {
        i = Math.floor(Math.random() * m--);
        [mutate[i], mutate[m]] = [mutate[m], mutate[i]];
    }
    return mutate;
}

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrO = [1, 2, 3, 4, 5, 6, 7, 8, {}];

console.log(shuffleArray(arrO));

/**
 * Generate a random number in range, inclusive
 * Defaults to min=0 and max=100 for working with percentages quickly.
 * Negative numbers are acceptable.
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

module.exports = {
    shuffleArray,
    randomInRange,
    randomIntOfLength,
};
