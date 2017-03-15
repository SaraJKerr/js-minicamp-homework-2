//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  var result = Math.max(x,y);
  return result;
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
  var german = 'Guten Tag!';
  var english = 'Hello!';
  var spanish = 'Hola!';
  if (language === 'German' || language === 'german') {
    return german;
  } else if (language === 'English' || language === 'english') {
    return english;
  } else if (language === 'Spanish' || language === 'spanish') {
    return spanish;
  } else {
    return english;
  }
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
  if (num === 10 || num === 5) {
    return true;
  } else {
  return false;
}
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  if (num < 50 && num > 20) {
    return true;
  } else {
    return false;
  }
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  var result = Math.floor(num);
  if (num === result) {
    return true;
  }
  return false;
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  var fizz = 'fizz';
  var buzz = 'buzz';
  var fb = 'fizzbuzz';
  if (num % 3 === 0 && num % 5 === 0) {
    return fb;
  } else if (num % 3 === 0) {
    return fizz;
  } else if (num % 5 === 0) {
    return buzz;
  } else {
    return num;
  }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
  if (num === 0 || num === 1) {
    return false;
  } else {
    for (var i = 2; i < num; i ++) {
      if (num % i === 0) {
        return false;
      } 
      }
    }
    return true;
  }


function returnFirst(arr) {
  //return the first item from the array
  var first = arr[0];
  return first;
}

function returnLast(arr) {
  //return the last item of the array
  var last = arr[arr.length -1];
  return last;
}

function getArrayLength(arr) {
  //return the length of the array
  var length = arr.length;
  return length;
}

function incrementByOne(arr) {
  //arr is an array of integers  
  //increase each integer by one
  //return the array
 for (var i = 0; i < arr.length; i ++) {
  arr[i] = arr[i] + 1;
 }
 return arr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  var result = '';
  for (var i = 0; i < words.length; i ++) {
    if (i < words.length - 1) {
  result = result + words[i] + ' ';
} else {
  result = result + words[i];
}
}
  return result;
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] === item) {
      return true;
    } 
  } 
    return false;
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  var result = 0;
  for (var i = 0; i < numbers.length; i ++) {
    result = result + numbers[i];
  }
  return result;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  var result = 0;
  var sum = 0;
  for (var i = 0; i < testScores.length; i ++) {
    sum = sum + testScores[i];
  }
  result = sum / testScores.length;
  return result;
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
  var result = 0;
  result = Math.max.apply(0, numbers);
  return result;

}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
