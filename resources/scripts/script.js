// Assign a random number to spookiness
let spookiness = Math.random() *  100;


let defaultName;

// apply a string value to default name spookiness leaving it blank if spookier than 71%
switch (true) {
    case spookiness < 28:
      defaultName = 'Matt';
      break;
    case spookiness < 71:
      defaultName = 'Me';
      break;
    default:
      defaultName = '';
  }

// If defaultName is empty, assign as 'Stranger', otherwise defaultName to username
// This step remains as an example of a coalescing OR statement
// I'm still trying to fully accept how this works. 
let username = defaultName || 'Stranger'; 

function updateSpookiness(elementId) {
  // Calculate spookiness rounded down to the hundredths place
  let spookyHundredthFloored = Math.floor(spookiness * 100) / 100; // Calculate spookiness rounded down to the hundredths place
  let fullStringThree = `I'm ${spookyHundredthFloored.toFixed(2)}% spooky.`; // Create the string to display
  const listItem = document.getElementById(elementId); // Get the list item and update its text content
  listItem.textContent = fullStringThree;
}

function updateAboutMe(elementId) {
  let fullStringOne = `About ${username}`; // Create the full string needed for this element
  const headingOne = document.getElementById(elementId); //create a variable and and assign it to the document element with id="aboutMe"
  console.log(fullStringOne); // print to console for testing - can remove
  headingOne.textContent = fullStringOne;
} 

function updateThingsAbout(elementId) {
  let fullStringTwo = `Some things about ${username}.`;
  const headingTwo = document.getElementById(elementId);
  headingTwo.textContent = fullStringTwo;
}

function booSpan(elementId) {
  const spanOne = document.getElementById(elementId); //create a variable and and assign it to the document element with id="spook"
    if (username === 'Stranger') {
        let spookStringOne = ` (Spooky)`; // Create the string needed for this element
        spanOne.textContent = spookStringOne;  // change the contents of this document element to the sting assigned to spookStringOne
    }
}

// change background color at random
function getRandomColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changeColor(){
  let newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
}


console.log(`Hello, Stranger!`);