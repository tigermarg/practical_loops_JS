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