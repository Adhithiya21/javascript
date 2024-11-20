let colors = ["white", "blue", "green", "yellow", "black"];

console.log("Length of the array:", colors.length);

let colorsString = colors.join();
console.log("Array as a single string:", colorsString);

console.log("Third element:", colors[2]);

let dashedColors = colors.join("-");
console.log("Combined string with dashes:", dashedColors);

colors.pop();
console.log("Array after removing the last element:", colors);

colors.push("orange");
console.log("Array after adding 'orange':", colors);