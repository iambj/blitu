import { formatDate, formatSeconds } from "../timeAndDate";

describe("Test time and date functions", () => {
    describe("test formatDate to display in MM/DD/YYYY format", () => {
        it("it should format a date string", () => {
            const date = new Date("July 4, 2020");
            const result = formatDate(date);
            expect(result).toBe("7/4/2020");
        });
        it("it should format a default Date object", () => {
            const date = new Date();
            const result = formatDate(date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // months start at 0
            const day = date.getDate();
            expect(result).toBe(`${month}/${day}/${year}`);
        });
    });
});
