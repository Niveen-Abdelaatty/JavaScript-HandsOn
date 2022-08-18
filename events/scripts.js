//get access to the required elements 
const userInputElement = document.getElementById('reviewField');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxAllowedChars = userInputElement.maxLength;

//build the listener & update the span element
function countCharacters(event){
    const userInput = event.target.value;
    const userInputLength = userInput.length;
    const remainingChars = maxAllowedChars - userInputLength;

    if(remainingChars <= 10){
        remainingCharsElement.classList.add('warning');
        userInputElement.classList.add('warning');
    }else{
        remainingCharsElement.classList.remove('warning');
        userInputElement.classList.remove('warning');
    }

    remainingCharsElement.textContent = remainingChars;
}

//add the listener to the element
userInputElement.addEventListener('input', countCharacters);


