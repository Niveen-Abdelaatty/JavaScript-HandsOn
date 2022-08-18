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