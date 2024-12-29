// Assign a random number to spookiness
let spookiness = Math.random() *  100;

// if spookiness is less than 28 then assign 'Matt', other wise if less than 71 assign 'Me', otherwise assign a blank string
let defaultName = spookiness < 28 ? 'Matt' : (spookiness < 71 ? 'Me' : '');

// If defaultName is empty, assign as 'Stranger', otherwise defaultName to username
let username = defaultName || 'Stranger'; 


