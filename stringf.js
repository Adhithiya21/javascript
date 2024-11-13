function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
    let str="hello";
    let reversed =reverseString(str);
  console.log("reversed string is",reversed);
  
