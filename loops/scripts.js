// JavaScript Calculator Script
const userNum = document.getElementById("user-number");
const calButton = document.getElementById("cal-btn");
const outputArea = document.getElementById("calculated-sum");

function calculateSum() {
  let sum = 0;

  for (let i = 0; i <= userNum.value; i++) {
    sum = sum + i;
  }
  outputArea.style.display = "block";
  outputArea.textContent = sum;
}

calButton.addEventListener("click", calculateSum);


// Highlight Links Script
const linksArray = document.querySelectorAll("#highlight-links a");
const highlightBtn = document.getElementById("highlight-btn");

function highlightLinks() {
  for (const link of linksArray) {
    link.classList.add("highlight");
  }
}

highlightBtn.addEventListener("click", highlightLinks);


// Display data stored into an object Script
const dummyUserData = {
  FirstName: 'Niveen',
  lastName: 'Abdelaatty',
  job: 'Front End Developer',
  work_experience_yrs: 12
};

const userDataDisplayBtn = document.getElementById('user-data-display-btn');

function displayUserData(){

    const ul = document.getElementById('output-user-data');

    ul.innerHTML = '';

    for(const propert in dummyUserData){
        const li = document.createElement('li');
        const outputText = propert.toUpperCase() + ': ' + dummyUserData[propert];
        li.appendChild(document.createTextNode(outputText));
        li.setAttribute('id', propert);
        ul.appendChild(li);
    }
}

userDataDisplayBtn.addEventListener('click', displayUserData);


// Statistics Script
const dicRollsListELement = document.getElementById('dice-rolls');
const rollDiceBtn = document.getElementById('roll-dice-btn');

function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls(){

const TargetNumberInputElement = document.getElementById('user-target-number');
const outputTotalRollsElement = document.getElementById('output-total-rolls');
const outputTargetNumberElement = document.getElementById('output-target-number');

  const enteredNum = TargetNumberInputElement.value;
  dicRollsListELement.innerHTML = '';

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while(!hasRolledTargetNumber){ //looping as long as it's true
    
    const rolledNumber = rollDice(); 
    numberOfRolls++;

    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    dicRollsListELement.append(newRollListItemElement);

    hasRolledTargetNumber = rolledNumber == enteredNum;
  } 
  outputTargetNumberElement.textContent =  enteredNum; 
  outputTotalRollsElement.textContent = numberOfRolls;
}
rollDiceBtn.addEventListener('click', deriveNumberOfDiceRolls);