const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies

// Progression 2: using setTimeout() - use 1000 units for time parameter
//Progression 3: Create a function to creat cookies
// use setTimeout() -- use 2000 units for time parameter

// Progression 4: calling functions

let currentScript = 'withoutCallback.js';
const button = document.getElementById('button');
button.textContent = `Current Script: ${currentScript}`;

button.onclick=()=>{
  window.location.href = `./index2.html`
}

const getCookies = (cookies) =>{
  setTimeout(()=>{
    for (let i of cookies){
      document.getElementById('content').innerHTML += `<h1>${i.name}</h1>`
    }
  },1000)
}

const createCookies = (newCookie) =>{
  setTimeout(()=>{
    cookies.push(newCookie)
  },2000)
}

getCookies(cookies)
createCookies(newCookie)
