// Part 1: Fizz Buzz------------------------------------------------------------------------
// Loop through all numbers from 1 to 100.
for (let i = 1; i <= 100; i++){
    if (i % 5 == 0 && i % 3 == 0) {  // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
        console.log(`Fizz Buzz`)
    } else if (i % 3 == 0) { // If a number is divisible by 3, log “Fizz.”  
        console.log(`Fizz`) 
    } else if (i % 5 == 0){ // If a number is divisible by 5, log “Buzz.”
        console.log(`Buzz`)
    } else { // If a number is not divisible by either 3 or 5, log the number.
        console.log(i)
    } 
  }

// Part 2: Prime Time ------------------------------------------------------------------------------


// Part 3: Feeling Loopy ---------------------------------------------------------------------------
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
    // You do not need to format the data, the following works well.
    // console.log(cell1, cell2, cell3, cell4);

//What do we know?
    //There are only 4 cells per row
    //Only "\n" scape character
    //Commas separate cells
    //'\n' indicates a new line
    //Has to be done in a loop
    //Our input is a string, strings are iterable
    //The last row has no '\n\'
    //console.log(cell1, cell2, cell3, cell4);
    //3 things: commas, '\n\, characters

//Variables
let string= 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

//Memory allocation for future values //could be let cell = 0;
let cell = '';
let row = '';

//for(let char of string) gives access to VALUES
for(let i in string){ //for...in gives access to index numbers in index
    // console.log(string[i], i) //Tests for loop
    switch(string[i]){
        case ",":
            // console.log(cell); //Print cell
            row = row + cell + ' '; //Add cell to row
            cell = ''; //Emptying cell to reuse
            // console.log(`Found comma`); //Test case 1 *work on this 2nd bc you see commas next!
            break;
        case "\n":
            row += cell; //Add final cell to row
            cell = ''; //clear cell
            console.log(row); //Print row
            row = ''; //Clear row
            // console.log(`NewLine`); //Test case 2 *work on last to get new line
            break;
        default:    
            // console.log(string[i]); //Test case 3 *work on this 1st bc you run into char first!
            cell += string[i]; //If char, add to current cell
            break;
    }

    //If we reach final character in string, print final row
    if(i == string.length - 1){
        //string.length is length of string - 114 - index is 114
        row += cell; //Add final cell
        console.log(row) //Print row
    }
}


// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
const str = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;
let placeholder = ``;
let counter = 0;


for (let char of str) {
  switch (char) {
    // If comma do this
    case ',':
      counter++;
      if (!cell1) {
        cell1 = placeholder;
        placeholder = ``;
      } else if (!cell2) {
        cell2 = placeholder;
        placeholder = ``;
      } else {
        cell3 = placeholder;
        placeholder = ``;
      }
      break;
    //If new line do this
    case '\n':
      counter++;
      cell4 = placeholder;
      placeholder = ``;
      console.log(cell1, cell2, cell3, cell4);
      cell1 = ``;
      cell2 = ``;
      cell3 = ``;
      cell4 = ``;
      break;
    //If char do this
    default:
      counter++;
      placeholder += char;

      if (counter === str.length) { //If it's our last character we populate cell4 and print
        cell4 = placeholder;
        placeholder = ``;
        console.log(cell1, cell2, cell3, cell4);
        cell1 = ``;
        cell2 = ``;
        cell3 = ``;
        cell4 = ``;
        counter = 0;
      }
      break;
  }
}
