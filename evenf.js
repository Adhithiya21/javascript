function isEven(num) {
    return num % 2 === 0;
}

const num = 6;
const isEvenNumber = isEven(num);

if (isEvenNumber) {
    console.log("The number", num, "is even");
} else {
    console.log("The number", num, "is odd");
}

