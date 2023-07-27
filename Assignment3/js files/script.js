// Variables
let lo = 1
let hi = 10
let chances = 3
let guessed = 0
let correct_ans = Math.floor(Math.random()*(hi-lo+1)+lo)


// UI Elements
let hints= document.querySelector('#hints')
let chance= document.querySelector('#chance')
let input = document.querySelector('#guess')
let btn = document.querySelector('#guesser')


// Add Event Listener
btn.addEventListener('click', takeInput)


hints.innerHTML= `Let's guess a number between ${lo} & ${hi}`
chance.innerHTML = `${chances} chances left`

// Random Number
function randomNumber(value){
    chances--
    chance.innerHTML = `${chances} chances left`
    let correct = false
        
        if(value < correct_ans){
            showAlert('correct answer is greater', 'error')
        } else if (value > correct_ans) {
            showAlert('correct answer is smaller', 'error')
        } else {
            correct = true
            showAlert('YOU WON! Play Again?', 'success')
          
        }
        guessed++
        
    if(guessed >= 3 || correct){
        btn.setAttribute('disabled', '')
        input.setAttribute('disabled', '')
        restartButton()
    }
}

function restartButton(){

    let restart = document.createElement('BUTTON')
    restart.innerText= 'Restart Game'
    restart.id = 'reBtn'

    let guesser = document.querySelector('#guesser')
    guesser.insertAdjacentElement("afterend", restart);
    
    restart.addEventListener('click', loadScreen)

}

function showAlert(message, className){
    let div = document.createElement('div')
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    let container = document.querySelector('.container')
    let hints = document.querySelector('#label')
    container.insertBefore(div, hints);

    setTimeout(()=>{
        document.querySelector('.alert').remove()
    }, 2500)
}



// Event Listener
function loadScreen(e){
    window.location.reload()
}

function takeInput(e){
    let number = e.target.previousElementSibling.value
    if(number===''){
        showAlert('Give A Number', 'error')
    } else {
        randomNumber(Number(number))
    }
}