/* 

Question 1. The Magical Sorting Hat:
    Imagine you are creating a magical sorting hat for a wizard school.Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor(length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12) or Slytherin(length greater than or equal to 12)) based on the length of their names.

function assignHouses(studentNames, houseObj) {
  for (const student of studentNames) {
    if (student.length < 6) {
      houseObj[student] = "Gryffindor";
    } else if (student.length < 8) {
      houseObj[student] = "Hufflepuff";
    } else if (student.length < 12) {
      houseObj[student] = "Ravenclaw";
    } else {
      houseObj[student] = "Slytherin";
    }
  }
  return houseObj;
}

let studentNames = [
  "Abbay",
  "Areena",
  "Bhavdeep",
  "Ashutosh",
  "Abhijeet",
  "Bhavesh",
  "Nikesh",
  "Nikhil",
  "Krishnakant",
  "Venkateshwar",
  "Hritik",
  "Prashant",
  "Pankaj",
  "Sandeep",
  "Mahi",
  "Parth",
];

let houseObj = {};

assignHouses(studentNames, houseObj);

console.log(houseObj);

*/




/*

Question 2. The Double Trouble:
    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

    function doubleElement(arr) {
      arr.forEach((element, i, arr) => {
        if (arr[i] != arr[i + 1]) {
          arr[i] = element * 2;
        }
      });
      
      return arr;
    }
    
    let arr = [1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6, 7, 8, 8, 9];
    
    console.log(arr);
    console.log(doubleElement(arr));
    
*/




/*

Question 3. The Mirror String:
    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

    const getReverseStr = (str) => {
      let reversedStr = "";
      for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];   
      }
      return reversedStr;
    }
    
    function appendStr(str) {
      let reversedString = getReverseStr(str);
      // let reversedString = str.split("").reverse().join('')
      let finalString = str + reversedString;
      return finalString;
    }
    let str = "Raunak";
    console.log(appendStr(str));
    
*/




/*

Question 4. The Password Validator:
   You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function checkValidPassword(str) {
  if (str.length < 8) {
    console.log("Password must be at least 8 characters long.");
    return false;
  }

  let has_upper = false;
  let has_lower = false;
  let has_digit = false;

  for (const char of str) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      has_upper = true;
    } else if (charCode >= 97 && charCode <= 122) {
      has_lower = true;
    } else if (charCode >= 48 && charCode <= 57) {
      has_digit = true;
    }
  }

  if (!has_upper) {
    console.log("Password does not contain any Uppercase letter.");
  }
  if (!has_lower) {
    console.log("Password does not contain any Lowercase letter.");
  }
  if (!has_digit) {
    console.log("Password does not contain any digit.");
  }

  return has_upper && has_lower && has_digit;
}

let str = prompt("Enter your password : ");
if (checkValidPassword(str)) {
  console.log("Your entered Password is valid!");
} else {
  console.log("So, Please enter the Password again!");
}

*/




/*

Question 5. The Sum Selector:
   You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

   function addNum(arr) {
    let sum = 0;
    for (const element of arr) {
      if (element < 0) {
        return sum;
      }
      sum += element;
    }
  }
  
  const arr = [1, 3, 2, 3, 4, 6, 0, -3, 5, -2, 4, 2, 5, 2, 2, 5];
  
  console.log(addNum(arr));
  
*/




/*

Question 6. The Vowel Counter:
    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowel(str) {
  let count = 0;
  for (const char of str) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
      count++;
    }
  }
  return count;
  }

const str = "AEIOUBCDbcdaeiou";
console.log(countVowel(str));

*/




/*

Quesiton 7. The Local Storage Manager:
    You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button>Add Note</button>
    <div id="note"></div>
    <script>

        let noteDiv = document.querySelector("#note");
        let btn = document.querySelector("button");

        let note = localStorage.getItem("note");

        if(note){
            noteDiv.innerHTML = `<strong>${note}</strong>`;
        }

        function saveNoteToLocalStorage(note) {
            localStorage.setItem("note", note);
        }

        btn.addEventListener("click", () => {
            let note = prompt("Enter your note")
            saveNoteToLocalStorage(note)
            noteDiv.innerHTML = `<strong>${note}</strong>`;
        })

    </script>
</body>
</html>

*/




/*

Quesiton 8. Async Array Mapping:
   Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function provideArray(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newArr = [];
      arr.forEach((element) => {
        newArr.push(element * 2);
      });
      resolve(newArr);
    }, 500);
  });
}

async function provideArray(arr) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.forEach((element,index) => {
        arr[index]=element*2;
      });
      resolve(arr);
    }, 500);
  });
}

// If you want to run await without using the async keyword, then rename the file with .mjs extension.(Note :- The browser can run it, Top-Level await Support: Modern browsers' developer consoles often treat input as if it's in a top-level context, allowing 'await' to be used directly without wrapping it in an 'async' function. )

(async () => {
  let a = await provideArray([1, 2, 4, 5, 3, 2, 5]);
  console.log(a);
  let b = await provideArray([1, 2, 8, 4, 2, 7, 1]);
  console.log(b);
  let c = await provideArray([5, 6, 3, 6, 4, 1, 4]);
  console.log(c);
})()

*/




/*

Quesiton 9. The Asynchronous Shopper:
   Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

   function calculateRandomTimeout() {
    return Math.ceil(Math.random() * 6) * 1000;
  }
  
  async function placeOrder(product) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          `Your order for ${product} has been placed successfully. It will be delivered to you soon.`
        );
      }, calculateRandomTimeout());
    });
  }
  
  (async () => {
    let a = await placeOrder("Mac Book Pro M3");
    console.log("Congratulations Mr.A : " + a);
    
    let b = await placeOrder("Dell G15");
    console.log("Congratulations Mr.B : " + b);
    
    let c = await placeOrder("Iphone 15 Pro");
    console.log("Congratulations Mr.C : " + c);
  })();
  
*/




/*

Quesiton 10. The Coffee Machine:
    In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

const calculateRandomTimeout = () => Math.ceil(Math.random() * 6) * 1000;

async function brewCoffee(coffeeType) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Your ${coffeeType} Coffee is ready. You can pick it up from the counter.......`);
    }, calculateRandomTimeout());
  });
}

(async () => {
  let a = await brewCoffee("Capechino");
  console.log("Mr.A : " + a);
  
  let b = await brewCoffee("Hot Chocolate");
  console.log("Mr.B : " + b);
  
  let c = await brewCoffee("Cold");
  console.log("Mr.C : " + c);
})();


// Some issue here with this code

const getRandomDelay = () => Math.ceil(Math.random()*7) * 1000;

const brewCoffee = (coffeeType) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(`Your ${coffeeType} Coffee is ready. You can pick it up from the counter.......`);
    }, getRandomDelay());
  })
}

(async () => {
  let a = await brewCoffee("Cappechino");
  console.log(a);
  let b = await brewCoffee("Black Coffee");
  console.log(b);
  let c = await brewCoffee("Hot chocolate");
  console.log(c);
})()

*/




/* 

Quesiton 11. The Array Filterer:
    You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

const filterProducts = (products, criteria) => {
  return products.filter(product => {
    for (let key in criteria) {
      if (product[key] !== criteria[key]) {
        return false;
      }
    }
    return true;
  });
}

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 499.99,
    inStock: false,
  },
  {
    id: 3,
    name: "T-Shirt",
    category: "Clothing",
    price: 19.99,
    inStock: true,
  },
  {
    id: 4,
    name: "Jeans",
    category: "Clothing",
    price: 39.99,
    inStock: true,
  },
  {
    id: 5,
    name: "Blender",
    category: "Home Appliances",
    price: 29.99,
    inStock: false,
  }
];

const filterCriteria = {
  category: "Electronics",
  inStock: true,
};

const filteredProducts = filterProducts(products, filterCriteria);

console.log(filteredProducts);

*/




/* 

Quesiton 12. The Token Manager:
    You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiresIn) {
  const expirationTime = new Date().getTime() + expiresIn * 1000; // expiresIn is in seconds
  const authData = {
    token: token,
    expirationTime: expirationTime
  };
  
  localStorage.setItem('authToken', JSON.stringify(authData));
}

function getAuthToken() {
  const authData = JSON.parse(localStorage.getItem('authToken'));
  if (!authData) {
    return null;
  }

  const currentTime = new Date().getTime();
  if (currentTime > authData.expirationTime) {
    localStorage.removeItem('authToken');
    return null;
  }

  return authData.token;
}


// Set a token with an expiration time of 1 hour (3600 seconds)
setAuthToken('your-auth-token', 3600);

// Get the token
const token = getAuthToken();
if (token) {
  console.log('Token is valid:', token);
} else {
  console.log('Token has expired or does not exist.');
}

*/




/* 

Quesiton 13. The Shopping Cart Totalizer:
    You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

const calculateTotal = (products) => {
  return products.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0);
}

// const calculateTotal = (products) => products.reduce((total, product) => total + (product.price * product.quantity), 0)

const shoppingCart = [
  { price: 29.99, quantity: 2 },
  { price: 15.99, quantity: 1 },
  { price: 4.99, quantity: 4 }
];

const totalCost = calculateTotal(shoppingCart);
console.log('Total Cost :', totalCost);

*/




/* 

Quesiton 14. The Window Scroller:
    You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

smoothScrollToTop();

*/