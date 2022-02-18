const numbersNames = {
    // we also can use libruary but it is what it is :)
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "elewen",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
  };
  
function numberToString(number) {
    let strNumber = "";
    if (number < 21) {
        strNumber = strNumber + numbersNames[number];
    } else {
        strNumber =
        strNumber +
        numbersNames[number - (number % 10)] +
        "-" +
        numbersNames[number % 10];
    }
    return strNumber;
}

export default numberToString