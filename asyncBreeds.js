const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    // if (!error) return data;

    // CHANGE 1: Pass data into callback instead of returning it directly
    if (!error) callback(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// CHANGE 2: Moved the console.log into a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) // => print out details correctly.
};

// CHANGE 3: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);

// (change 3) we try to get the return value (does not work)
// const bombay = breedDetailsFromFile('Bombay');

//(change 2) console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!