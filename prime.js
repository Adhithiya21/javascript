let number = 29; 
let isPrime = number > 1; 

for (let i = 2; i * i <= number; i++) 
{ 
  if (number % i === 0) 
    {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? `${number} is prime` : `${number} is not prime`);