let number = 5;  
let table = '';

for (let i = 1; i <= 10; i++) {
  table += `${number} x ${i} = ${number * i}\n`;
}

console.log(table);