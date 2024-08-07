const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
        //console.log(square)
    })
    
    //console.log(Math.floor(Math.random() * 9))
    let randomSquare =  squares[Math.floor(Math.random() * 9)]
    //console.log(randomSquare)
    randomSquare.classList.add("mole")

    hitPosition = randomSquare.id


}

squares.forEach(square =>{
    square.addEventListener("mousedown", () =>{
        if(square.id == hitPosition){
            result++;
            score.textContent = result
            hitPosition = null
        }

    })
    // for mobile
    // square.addEventListener("touchstart", () =>{
    //     if(square.id == hitPosition){
    //         result++;
    //         score.textContent = result
    //         hitPosition = null
    //     }

    // })
})

//randomSquare();

function moveMole(){
    
    timerId = setInterval(randomSquare,500)
}

moveMole()

function countdown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game Over! Your Final score is "+result)
    }
}

let countDownTimerId = setInterval(countdown, 500)
