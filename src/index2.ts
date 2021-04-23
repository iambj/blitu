/**
 *
 * Shuffle an array using Fisher-Yates
 * Returns a new array and is non-mutating.
 *
 * @param orderedArr
 * @returns
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
module.exports = {
    shuffleArray,
};

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(shuffleArray(arr));
