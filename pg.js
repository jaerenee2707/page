let checkedItems = [];

const mySlider = document.getElementById("mySlider");
const sliderValue = document.getElementById("sliderValue");

mySlider.addEventListener("input", () => {
    sliderValue.textContent = mySlider.value;
});

sliderValue.textContent = mySlider.value;

function generatePassword(length, charset) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset[Math.floor(Math.random() * charset.length)];
    }
    checkedItems = [];
    return password;
}

let charset = "";

const defaultCharSet = "abcdefghijklmnopqrstuvwxyz";
const numbersCharSet = "1234567890";
const symbolsCharSet = "!@#$%^&*()";
const uppercaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//let passwordLength = ;

const passwordModule = document.getElementById("passwordModule");
const passwordDisplay = document.getElementById("passwordDisplay");
const generateButton = document.getElementById("generateButton");
const iconSpace = document.getElementById("myIcon")

generateButton.addEventListener("click", () => {
  getCheckedItems();
  let charSet = defaultCharSet;
  for(let i = 0; i < checkedItems.length; i++){
    if(checkedItems[i] == "Numbers")
    {
      charSet = charSet + numbersCharSet;
    }
    else if(checkedItems[i] == "Symbols"){
      charSet = charSet + symbolsCharSet;
    }
    else if(checkedItems[i] == "Uppercase"){
      charSet = charSet + uppercaseCharSet;
    }
  }
  
  const password = generatePassword(mySlider.value, charSet);
  passwordDisplay.textContent = password;
  //iconSpace.classList.add("fas fa-star");
  iconSpace.style.display = "block";
});

passwordModule.style.display = "block";

passwordDisplay.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordDisplay.textContent);
    copyMessage.style.display = "block";
    setTimeout(() => {
        copyMessage.style.display = "none";
    }, 1000);
});

function Copy() {
   navigator.clipboard.writeText(passwordDisplay.textContent);
    copyMessage.style.display = "block";
    setTimeout(() => {
        copyMessage.style.display = "none";
    }, 1000);
}

function getCheckedItems() {
  let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  
  for (let i = 0; i < checkboxes.length; i++) {
    checkedItems.push(checkboxes[i].value);
  }
}


