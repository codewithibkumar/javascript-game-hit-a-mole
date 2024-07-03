const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
        //console.log(square)
    })
    
    //console.log(Math.floor(Math.random() * 9))
    let randomSquare =  squares[Math.floor(Math.random() * 9)]
    console.log(randomSquare)
    randomSquare.classList.add("mole")
}

randomSquare();
