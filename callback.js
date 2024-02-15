const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies

  // Progression 2: using setTimeout() 

//Progression 3: Create a function to creat cookies



// Progression 5: calling function

let currentScript = 'callback.js';
const button = document.getElementById('button');
button.textContent = `Current Script: ${currentScript}`;

button.onclick=()=>{
  window.location.href = `./index.html`
}

const getCookies = (cookies) =>{
  setTimeout(()=>{
    for (let i of cookies){
      document.getElementById('content').innerHTML += `<h1>${i.name}</h1>`
    }
  },1000)
}

const createCookies = (newCookie) =>{
  cookies.push(newCookie)
  return getCookies(cookies)
}

createCookies(newCookie)