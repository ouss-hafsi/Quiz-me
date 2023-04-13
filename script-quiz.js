
//  start-game
const overlayStart = document.querySelector('#overlay-start')
overlayStart.style.display = 'block'
let condition = false
const startGame = document.querySelector('#start-game')


const timeOut = document.querySelector('#overlay-time-out')
const restartGame = document.querySelector('#restart-game')

const gameOver = document.querySelector('#overlay-game-over')
const gameOverResult = document.querySelector('#game-over-result')
const restartGameOver = document.querySelector('#restart-game-over')

const winner = document.querySelector('#overlay-game-winner')
const winnerText = document.querySelector('#winner-text')
const restarWinner = document.querySelector('#restart-winner')


const next = document.querySelector('#next')
const scoreTag = document.querySelector('#score')
const display = document.querySelector('#display-q')
const questionDisplay = document.querySelector('#question-display')


//        getting an array from localstorage
const question = localStorage.getItem('array')
const getQuestion = JSON.parse(question)
console.log(getQuestion)

const countDown = document.querySelector('#count-down')
let startingMinutes = 2
let time = startingMinutes * 60
let myInterval = setInterval(updateCountdown, 1000)

const input1 = document.querySelector('#input-1')
const input2 = document.querySelector('#input-2')
const input3 = document.querySelector('#input-3')
const input4 = document.querySelector('#input-4')

const answerDiv1 = document.querySelector('#my-answers-1')
const answerDiv2 = document.querySelector('#my-answers-2')
const answerDiv3 = document.querySelector('#my-answers-3')
const answerDiv4 = document.querySelector('#my-answers-4')


function getQuiz() {
    let answerResult;
    let index = 0
    let score = 0
    scoreTag.innerText = `Score : ${score}`

    //           display questions
    questionDisplay.innerText = `${index + 1} / 10 : ${getQuestion[index].question}`

    //           display answers
    function getAnswers() {
        let result;
        let arr = []
        function firstArray () {
            for (let i = 0; i <= getQuestion.length - 1; i++) {
                if (getQuestion[index] !== getQuestion[i]) {
                    arr.push(getQuestion[i])
                }
            }
        }
        firstArray()

        let indexRandomOne = arr.slice(0,3)
        const maxRandomOne = indexRandomOne.length
        // console.log(indexRandomOne)

        let indexRandomTwo = arr.slice(3, 6)
        const maxRandomTwo = indexRandomTwo.length
        // console.log(indexRandomTwo)

        let indexRandomThree = arr.slice(6, 10)
        const maxRandomThree = indexRandomTwo.length
        // console.log(indexRandomThree)


        let answers = [getQuestion[index].answer,
         indexRandomOne[Math.floor(Math.random() * maxRandomOne)].answer, 
         indexRandomTwo[Math.floor(Math.random() * maxRandomTwo)].answer, 
         indexRandomThree[Math.floor(Math.random() * maxRandomThree)].answer]
        answers.sort()


        input1.innerText = answers[0]
        input2.innerText = answers[1]
        input3.innerText = answers[2]
        input4.innerText = answers[3]

        answerDiv1.addEventListener('click', () => {
            result = input1.innerText
            answerDiv1.style.background = 'black'
            answerDiv2.style.background = 'transparent'
            answerDiv3.style.background = 'transparent'
            answerDiv4.style.background = 'transparent'
            input1.style.color = "white"
            input2.style.color = "black"
            input3.style.color = "black"
            input4.style.color = "black"
            if (result === getQuestion[index].answer) {
                answerResult = true
            }
            else {
                answerResult = false
            }
        })

        answerDiv2.addEventListener('click', () => {
            result = input2.innerText
            answerDiv1.style.background = 'transparent'
            answerDiv2.style.background = 'black'
            answerDiv3.style.background = 'transparent'
            answerDiv4.style.background = 'transparent'
            input1.style.color = "black"
            input2.style.color = "white"
            input3.style.color = "black"
            input4.style.color = "black"

            if (result === getQuestion[index].answer) {
                answerResult = true
            }
            else {
                answerResult = false
            }
        })

        answerDiv3.addEventListener('click', () => {
            result = input3.innerText
            answerDiv1.style.background = 'transparent'
            answerDiv2.style.background = 'transparent'
            answerDiv3.style.background = 'black'
            answerDiv4.style.background = 'transparent'
            input1.style.color = "black"
            input2.style.color = "black"
            input3.style.color = "white"
            input4.style.color = "black"
            if (result === getQuestion[index].answer) {
                answerResult = true
            }
            else {
                answerResult = false
            }
        })

        answerDiv4.addEventListener('click', () => {
            result = input4.innerText
            answerDiv1.style.background = 'transparent'
            answerDiv2.style.background = 'transparent'
            answerDiv3.style.background = 'transparent'
            answerDiv4.style.background = 'black'
            input1.style.color = "black"
            input2.style.color = "black"
            input3.style.color = "black"
            input4.style.color = "white"
            if (result === getQuestion[index].answer) {
                answerResult = true
            }
            else {
                answerResult = false
            }
        })
    }
    getAnswers()

    next.addEventListener('click', () => {
        answerDiv1.style.background = 'white'
        answerDiv2.style.background = 'transparent'
        answerDiv3.style.background = 'transparent'
        answerDiv4.style.background = 'transparent'
        input1.style.color = "black"
        input2.style.color = "black"
        input3.style.color = "black"
        input4.style.color = "black"
        if (score == 9) {
            clearInterval(myInterval)
            winnerText.innerText = `🔥BOOM!🔥 we have a winner here`
            winner.style.display = 'block'
            restarWinner.addEventListener('click', () => {
                index = 0
                score = 0
                myInterval = setInterval(updateCountdown, 1000)
                time = startingMinutes * 60
                getQuiz()
                winner.style.display = 'none'
            })
        }
        if (index == 9 && score != 9) {
            clearInterval(myInterval)
            gameOverResult.innerText = `you got ${score} out of 10 question not bad!!`
            gameOver.style.display = 'block'
            restartGameOver.addEventListener('click', () => {
                score = 0
                index = 0
                myInterval = setInterval(updateCountdown, 1000)
                time = startingMinutes * 60
                getQuiz()
                gameOver.style.display = 'none'
               
            })
        }
        index += 1
        questionDisplay.innerText = `${index + 1} / 10 : ${getQuestion[index].question}`
        if (answerResult === true) {
            score += 1
            scoreTag.innerText = `score: ${score}`
            
        }
       
        getAnswers()
        answerResult = false
        
    })

}

getQuiz()


//          timer   
function updateCountdown() {
    if (condition == false) {
        time++
    }
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    countDown.innerHTML = `Time ${minutes} : ${seconds}`
    time--

    // run out of time condition
    startGame.addEventListener('click', () => {
        condition = true
        overlayStart.style.display = 'none'
    })

    if (seconds == 0 && minutes == 0) {
        timeOut.style.display = 'block'
        time++
        restartGame.addEventListener('click', () => {
            index = 0
            time = startingMinutes * 60
            getQuiz()
            timeOut.style.display = 'none'
        })
    }
}


