import { numericSort } from "../sort";

describe("Test numeric sort", () => {
    // empty
    it("an empty array as an argument should return a new empty array", () => {
        let firstArr = [];
        const result = numericSort(firstArr);
        expect(result.length).toBe(0);
        expect(result === firstArr).toBeFalsy();
    });
    // correct
    it("should return a correctly sorted numeric array", () => {
        let firstArr = [-10, 90, 9, 3, 6];
        const result = numericSort(firstArr);
        let same = true;
        firstArr.every((a, i) => {
            if (a !== result[i]) {
                console.log(a, result[i]);
                same = false;
            }
        });
        expect(same).toBe(true);
        expect(result === firstArr).toBeFalsy();
    });
    // non numeric - skipped, TS will take care of this
    // mixed - skipped - TS will take care of this
    // I don't see a point of looping through an array twice just
    // to check the type if TypeScript can check before run time.
});
