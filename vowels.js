let string = "hello world";
let vowel_count = 0;
let consanats = 0;
for (let i = 0; i < string.length; i++) {
    if (
        string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || 
        string[i] === 'o' || string[i] === 'u' || 
        string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || 
        string[i] === 'O' || string[i] === 'U'
    ) {
        vowel_count++;
    }
    else{
        consanats++;
    }
}

console.log("Vowel count for the string", string , "is", vowel_count);
console.log("consanants fot the string", string ,"is", consanats);
