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

describe("Test random numbers.", () => {
    it("Should return a random number between 0 and 100", () => {
        let result = _b.randomInRange();
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(100);
        // result >= 0 && result <= 100).toBe(true);
    });
    it("Should return a 1", () => {
        let result = _b.randomInRange(1, 1);
        expect(result).toBe(1);
    });
    it("Should return a -1", () => {
        let result = _b.randomInRange(-1, -1);
        expect(result).toBe(-1);
    });
    it("Should return a negative number between 0 and -100", () => {
        let result = _b.randomInRange(0, -100);
        expect(result).toBeGreaterThanOrEqual(-100);
        expect(result).toBeLessThanOrEqual(0);
    });
    it("Should return a negative number between -100 and 100", () => {
        let result = _b.randomInRange(-100, 100);
        expect(result).toBeGreaterThanOrEqual(-100);
        expect(result).toBeLessThanOrEqual(100);
    });
});
