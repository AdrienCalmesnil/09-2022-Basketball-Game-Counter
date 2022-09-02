let scoreHome = document.getElementById('score-home')
let scoreGuest = document.getElementById('score-guest')
let countHome = 0
let countGuest = 0

// Home functions
function add1Home(){
    countHome++
    scoreHome.textContent = countHome
}

function add2Home(){
    countHome += 2
    scoreHome.textContent = countHome
}

function add3Home(){
    countHome += 3
    scoreHome.textContent = countHome
}

// Guest functions
function add1Guest(){
    countGuest++
    scoreGuest.textContent = countGuest
}

function add2Guest(){
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function add3Guest(){
    countGuest += 3
    scoreGuest.textContent = countGuest
}

// Reset score function 
function resetScore(){
    countHome = 0
    countGuest = 0
    scoreHome.textContent = countHome
    scoreGuest.textContent = countGuest
}

if(countHome > countGuest){
    console.log('Home is winning')
}else if(countHome < countGuest){
    console.log('Guest is winning')
}else{
    console.log("Draw")
}