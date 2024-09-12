// Part 1: Fizz Buzz------------------------------------------------------------------------
// Loop through all numbers from 1 to 100.
for (let i = 1; i <= 100; i++){
    console.log(i);
}

// If a number is divisible by 3, log “Fizz.”
for (let i = 3; i <= 100; i += 3){
    console.log(`Fizz`, i)
}

// If a number is divisible by 5, log “Buzz.”
for (let i = 5; i <= 100; i += 5){
    console.log(`Buzz`, i)
}

// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
for (let i = 1; i <= 100; i++){
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(`Fizz Buzz`, i)
    }
}

// If a number is not divisible by either 3 or 5, log the number.
for (let i = 1; i <= 100; i++){
    if (i % 5 == 0 || i % 3 == 0) {
        console.log(i)
    }
}

// Part 2: Prime Time ------------------------------------------------------------------------------


// Part 3: Feeling Loopy ---------------------------------------------------------------------------
// Loop through the characters of a given CSV string.
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`
for(let char of str){
    console.log(char)
    if(char == `\n`)
        console.log(`Space`)


// Store each “cell” of data in a variable.
let cell1 = `ID`
let cell2 = `Name`
let cell3 = `Occupation`
let cell4 = `Age`
let cell5 = `42`
let cell6 = `Bruce`
let cell7 = `Knight`
let cell8 = `41`
let cell9 = `57`
let cell10 = `Bob`
let cell11 = `Fry Cook`
let cell12 = `19`
let cell13 = `63`
let cell14 = `Blaine`
let cell15 = `Quiz Master`
let cell16 = `58`
let cell17 = `98`
let cell18 = `Bill`
let cell19 = `Doctor's Assistant`
let cell20 = `26`

// When you encounter a comma, move to the next cell.

for (let i of str){
    console.log(i);
    if (i == ",")
        console.log(`Move to the next cell`, i)
}

// When you encounter the “\r\n” sequence, move to the next “row.”


for (let i of str){
    console.log(i);
    if (i == "\n")
        console.log(`Move to the next row`, i)
}

// Log each row of data.
    // You do not need to format the data, the following works well.
    // console.log(cell1, cell2, cell3, cell4);

console.log(cell1, cell2, cell3, cell4);
console.log(cell5, cell6, cell7, cell8);
console.log(cell9, cell10, cell11, cell12);
console.log(cell13, cell14, cell15, cell16);
console.log(cell17, cell18, cell19, cell20);

// You can make the following assumptions:
//     There will only be 4 cells per row.
//     There will be no escaped characters other than “\n."