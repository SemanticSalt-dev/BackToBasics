// Assign a random number to spookiness
let spookiness = Math.random() *  100;

// if spookiness is less than 28 then assign 'Matt', other wise if less than 71 assign 'Me', otherwise assign a blank string
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
let username = defaultName || 'Stranger'; 


