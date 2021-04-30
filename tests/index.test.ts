const _b = require("../src/index");

describe("Test shuffling.", () => {
    it("Should return a shuffled array.", () => {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let result = _b.shuffleArray(arr);
        let differentNumbers: number = 0;
        // Use a count here so that in the future we may
        // change the shuffle to make sure at least a certain
        // number of values are change. i.e. at least 1/3 of
        // the array is different to ensure randomness.
        arr.every((a, i) => {
            // console.log(a, result[i], differentNumbers);
            if (a !== result[i]) {
                differentNumbers++;
                return false;
            }
            return true;
        });
        expect(differentNumbers).toBeGreaterThanOrEqual(1);
        expect(result).not.toEqual(arr);
    });
});
