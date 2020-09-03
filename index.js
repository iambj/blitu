// Shuffle and array using Fisher-Yates (TODO:)
// Returns a new array and is non-mutating.
function shuffleArray(orderedArr) {
    let mutate = [...orderedArr];
    let newArr = [];
    while (mutate.length > 0) {
        let pick = Math.floor(Math.random() * mutate.length);
        let items = mutate.splice(pick, 1)[0];
        newArr.push(items);
    }
    return newArr;
}

// Pick one item from an array, optionally obeying weights.
// Pick: Functions, strings, numbers.
// Weights are defaulted to 1 and simply go up in increments of 1.
//    ie.: a weight of 2 has a ration of 2:1, 3 has a ration or 3:1 and 10, 10:1.
// Currently if you use an object with weights, all need to be objects with weights.
// TODO: allow for some entries to be objects with a weight, while others just strings
// TODO: Use a default of weight:1 if it is omitted.
function pickOne(objs) {
    // Pass a simple array or pass in a array of objects to
    // with weights: { toBePicked: weight: 1}
    // 1 is default for all and is the standard
    if (!objs || objs.length === 0) return null;
    if (Array.isArray(objs)) {
        if (typeof objs[0] === "object") {
            // Get name of item to be picked.
            // Only two properties are allowed,
            // and one must be "weight"
            let propName = "";
            for (const [i, k] of objs.entries()) {
                let count = 0;
                let weightIncluded = false;

                for (const j in k) {
                    count++;
                    if (k.hasOwnProperty(j)) {
                        if (j === "weight") {
                            weightIncluded = true;
                        } else {
                            propName = j;
                        }
                    }
                }
                if (!weightIncluded) throw new Error("Weight not included.");
                if (count > 2) {
                    throw new Error("Too many items in objects to pick from.");
                }
            }
            let weightedArr = [];
            for (const i of objs) {
                let weight = i.weight;
                let arr = new Array(weight).fill(i[propName]);
                weightedArr.push(...arr);
            }

            let selection = Math.floor(Math.random() * objs.length);
            let shuffled = shuffleArray(weightedArr);
            return shuffled[selection];
        } else {
            let selection = Math.floor(Math.random() * objs.length);
            return objs[selection];
        }
    } else {
        throw new Error("An array is needed as input");
    }
}

// Generate a random number in range, inclusive
// Defaults to min=0 and max=100 for working with percentages quickly.
// Negative numbers are acceptable.
function randomInRange(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIntOfLength(count) {
    // Generate a random number of a certain amount of digits
    let num = "";
    for (let i = 0; i < count; i++) {
        num += Math.floor(Math.random() * Math.floor(9));
    }
    return num;
}

// TODO: add test coverage
function padText(str, total, symbol = " ") {
    while (str.length < total) {
        str += symbol;
    }
    return str;
}

// Returns a string with the desired number of 0's padding the left.
// Returns the same number if no padding is needed as type number.
// TODO: add test coverage
function padNumber(num, desiredDigits) {
    if (desiredDigits - String(num).length < 0) return num;
    return new Array(desiredDigits - String(num).length).fill(0).join("") + num;
}

// Benchmark a function. Takes an array of parameters.
// Logs by default as this is a debugging tool. "all" logs everything.
function benchmark(func, args, log = true) {
    let startTime = Date.now();
    log == true || log == "all" ? console.log("start", startTime) : null;
    let result = func(...args);
    let endTime = Date.now();
    log == true || log == "all" ? console.log("end", endTime) : null;
    let timing = (endTime - startTime) / 1000;
    log === "all" ? console.log(`Time: ${timing}s`) : null;
    // If the function returned anything, pass it along
    if (result) {
        return result;
    } else {
        return `Time: ${timing}s`;
    }
}

module.exports = {
    benchmark,
    padNumber,
    padText,
    pickOne,
    randomInRange,
    randomIntOfLength,
    shuffleArray,
};
