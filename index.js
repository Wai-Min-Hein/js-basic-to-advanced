/**************** Javascript Datastructure and Algrothriam ****************/

/****************    1.Reverse String  ***************** START *****************    ****************/

// I will explain you how it works

// 1. First you have to know you can loop strings
// 2. In "Hello" word, first value of char is "H" and I write "reversed = char + reversed", so for first loop "reversed" will be "H" and then second valeue of char will be "e" and so reversed will be "eH" because of "reversed = char + reversed".

/****************     Code Start    ****************/

const reverseString = (str) => {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
};
console.log(reverseString("Hello"));

/****************     Code End    ****************/

/****************    Reverse String with Array method    ****************/

//In this code what you need to kow is

// 1. string.split() turn string data into array
//2. array.join() turns array data into string

/****************     Code Start    ****************/

const reverseStringWithArray = (str) => {
  return str.split("").reverse().join("");
};
console.log(reverseStringWithArray("Hello"));

/****************     Code End    ****************/

/****************    Reverse Interger    ****************/

//In this code what you need to kow is

// 1. parseInt(string) turns string into a number. If parseInt('007'), it will ignore 00 and return integer value 7.
//2. The Math.sign(integer) static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is. It means Math.sign(44) it will return 1 and Math.sign(-44) it will return -1.

/****************     Code Start    ****************/
const reverseInt = (n) => {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
};

console.log(reverseInt(-25));
/****************     Code End    ****************/

/****************    1.Reverse String  ***************** END *****************    ****************/
