module.exports = function toReadable(n) {
    let beforeTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let afterTwenty = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let strN = n.toString();
    if (n === 0) return "zero";
    if (n < 20) return beforeTwenty[n];
    if (strN.length === 2 && strN[1] === "0") return afterTwenty[strN[0]];
    if (strN.length === 2 && strN[1] !== "0")
        return `${afterTwenty[strN[0]]} ${beforeTwenty[strN[1]]}`;
    if (strN.length === 3 && strN[strN.length - 1] === "0" && strN[1] === "0") {
        return `${beforeTwenty[strN[0]]} hundred`;
    }
    if (strN.length === 3 && strN[1] === "0") {
        return `${beforeTwenty[strN[0]]} hundred ${
            beforeTwenty[strN[strN.length - 1]]
        }`;
    }
    if (strN.length === 3 && strN[1] === "1") {
        let sliceStr = strN.slice(-2);
        return `${beforeTwenty[strN[0]]} hundred ${beforeTwenty[sliceStr]}`;
    }
    if (strN.length === 3 && strN[1] <= 9 && strN[2] === "0") {
        return `${beforeTwenty[strN[0]]} hundred ${afterTwenty[strN[1]]}`;
    }
    if (strN.length === 3) {
        return `${beforeTwenty[strN[0]]} hundred ${afterTwenty[strN[1]]} ${
            beforeTwenty[strN[2]]
        }`;
    }
};
