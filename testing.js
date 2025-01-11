console.log("hello beautiful.");
console.log("i hear things are nice out there.");
console.log("maybe i'll be able to visit one day.");
console.log("for now lets run some scripts.");

let startingOffHere = Math.random() *  100;

let defaultName;
// apply a string value to default name spookiness leaving it blank if spookier than 71%
switch (true) {
    case startingOffHere < 28:
      defaultName = 'Matt';
      break;
    case startingOffHere < 71:
      defaultName = 'Sir';
      break;
    default:
      defaultName = 'Stranger';
  }


console.log(`starting at a cool ${startingOffHere.toFixed(2)}`);

console.log(`it\'s good to have you with us ${defaultName}`);

// Lets lets to sort 3 ways

let speciesArray = [ {speciesName:'shark', numTeeth:50}, 
                        {speciesName:'dog', numTeeth:42}, 
                        {speciesName:'alligator', numTeeth:80}, 
                        {speciesName:'human', numTeeth:32}];

// Bubble Sort

const bubbleSortSpeciesByTeeth = arr => {
    let len = arr.length;
    let swapped;
    do {
        swapped = false; // reset swap flag each pass
        for (let i = 0; i < len - 1; i++) { // iterate through array
            if(arr[i].numTeeth > arr[i + 1].numTeeth) { // if this is greater than that next one in the array - swap them - this and that
                const logHelper = i + 1;
                console.log(`im switching elements ${i} and ${logHelper}`);
                let tempArrItem =  arr[i]; // assign a temporary holder for this
                arr[i] = arr[i + 1]; // assign the value of that to this
                arr[i + 1] = tempArrItem; // what was this is now assigned to that
                swapped = true; // set swap to true to repeat the cycle if any changes were found in pass through
            }
        console.log('new loop');
        }
    } while (swapped); // continue as long as changes were made
    return arr; // return the sorted array
}

console.log(bubbleSortSpeciesByTeeth(speciesArray));

// again

speciesArray = [ {speciesName:'shark', numTeeth:2}, 
                    {speciesName:'dog', numTeeth:460}, 
                    {speciesName:'alligator', numTeeth:670}, 
                    {speciesName:'human', numTeeth:921}];

function insertionSortSpeciesByTeeth(arr) {
    for (let i = 1; i < arr.length; i++) { // iterate starting at the second element
        let key = arr[i]; // store current element as the 'key'
        let j = i - 1; // initialize a pointer to the element before this one
            while (j >= 0 && arr[j].numTeeth < key.numTeeth) { // while the element before is greater than its predecessor
                const logHelper = j + 1;
                console.log(`im switching elements ${j} and ${logHelper}`);
                arr[j + 1] = arr[j]; // assign the before element with value of the after element
                j = j - 1; //move j pointer one to the left
            }
        arr[j + 1] = key; // insert the key back in its correct position
        if (i < arr.length) {
            console.log('to the top');
        }
    }
    return arr; // return the sorted array
}

console.log(insertionSortSpeciesByTeeth(speciesArray));

speciesArray = [ {speciesName:'shark', numTeeth:1400}, 
                    {speciesName:'dog', numTeeth:11}, 
                    {speciesName:'alligator', numTeeth:34}, 
                    {speciesName:'human', numTeeth:1}];

function selectionSortSpeciesByTeeth(arr) {
    for (let i = 0; i < arr.length - 1; i++) { // iterate though all but the last element
        console.log('from the top');
        let minIndex = i; // Assume the index to the left is the minimum value
        for (let j = i + 1; j < arr.length; j++) { // search through and find the index of actual minimum value
            if (arr[j].numTeeth < arr[minIndex].numTeeth) { // if the element to the right less than the minimum value currently found
                minIndex = j; // update index of minimum value with the found index
            }
        }
        if (minIndex !== i) { // if the minimum value index is lower than the current index
            console.log(`im switching elements ${i} and ${minIndex}`);
            let temp = arr[i]; // swap the current element and the minimum element
            arr[i] = arr[minIndex]; // swap the current element and the minimum element
            arr[minIndex] = temp; // swap the current element and the minimum element
        }
    }
    return arr; // return the sorted array
}

console.log(selectionSortSpeciesByTeeth(speciesArray));
