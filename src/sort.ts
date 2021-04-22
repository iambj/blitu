/**
 * Sorts an array of numbers without mutating the input array.
 * Sorts based off of the real value of numbers to overcome the
 * way the builtin sort function converts array items to strings.
 *
 * @param arr takes an array of numbers
 * @returns a new array of numbers
 */
function numericSort(arr: number[]) {
    let newArr: number[] = [...arr]; // create a new array as to not mutate the input
    if (!arr.length) {
        return [];
    }
    newArr.sort((a, b) => {
        return a - b;
    });

    return newArr;
}

export { numericSort };
