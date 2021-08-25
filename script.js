/* 
// let randomNumberResult = generateRandomNumber();
document.getElementById('check-btn').addEventListener('click',function(){
    //history add
    addHistory('guess-input');
    
    // massNumber()

    generateRandomNumber()
    console.log(generateRandomNumber())
    if(myinputValue <generateRandomNumber()){
        console.log(`it's small`)
    }else if(myinputValue == generateRandomNumber()){
        console.log(`it's equal`)
    }else{
        console.log(`it's greaetr`)
    }
})

let historyPush = [];
function addHistory(inputValue){
    let collectInput = document.getElementById(inputValue);

    let addHistory = document.createElement('p');
    let historyClass = addHistory.classList.add('add-history')
    let guesBtn =  document.querySelector('#change-value');
        if(parseInt(collectInput.value) >= 0){
            addHistory.innerText = `Your last Input value ${collectInput.value}`;
            addHistory.style.cssText = `
                    border : 1px solid black;
                    padding : 12px;
                    margin-top: 10px;
                `
            guesBtn.prepend(addHistory);
                
        }else{
            addHistory.innerText = 'please type a valid Number';
            addHistory.style.cssText = `
                    border : 1px solid black;
                    padding : 12px;
                    margin-top: 10px;
                    color: red;
                `
            guesBtn.prepend(addHistory);
        }
        collectInput.value = '';
        historyPush.push(addHistory)
        
        if(historyPush.length > 4){
            guesBtn.removeChild(guesBtn.lastElementChild)
        }
}

function generateRandomNumber(){
    let randomNumber = Math.round(Math.random() *100);
    return randomNumber;
}



// const massNumber = ()=>{
//     let collectVAlue = addHistory('guess-input');
//     if(collectVAlue == randomNumberResult){
//         console.log('successfully add')
//     }else if(collectVAlue > randomNumberResult){
//         console.log(`it's big`)
//     }else if(collectVAlue < randomNumberResult){
//         console.log(`it's short`)
//     }
// } */
let correctNumber = getRandomNumber();

let guses = [];


document.getElementById('check-btn').addEventListener('click',playGame);
document.getElementById('restart').addEventListener('click', initGame)

function playGame(){
    let numberGuess = document.getElementById('guess-input').value;
    displayResult(numberGuess)
    ;
    saveGuessStory(numberGuess);
    displayHistory()
    document.getElementById('guess-input').value = ' ';
    
}

function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*100) + 1;
    return randomNumber;
}

function displayResult(guessNumber){
    if(guessNumber > 0){
        if(correctNumber > guessNumber){
            showNumberBelow();
        }else if(correctNumber == guessNumber){
            showYouWon()
        }else{
            showNumberAbove();
        }
    }else if(guessNumber<0){
        notANumber()
    }
    
}

function getDialog(dialogType,text){
    let dialog;
    
    // dialog.style.padding = '16px';
    switch(dialogType){
        case "warning" :
            dialog = "<div class='warning'>"
            break;
        case 'won':
            dialog = "<div class = 'won'>"
    }

    dialog += text;
    dialog += `</div>`
    return dialog;
}

function showYouWon(){
    const text = `<p class="bg-green-400 p-4 mt-4">Awesome you got it😍</p>`
    let dialog = getDialog('won', text);
    document.getElementById('result').innerHTML= dialog;
}

function showNumberAbove(){
    const text = `<p class="bg-red-400 text-white p-4 mt-4">Your Number is to high😥</p>`
    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML= dialog;
}

function showNumberBelow(){
    const text = `<p class="bg-red-400 text-white p-4 mt-4">Your Number is to low😥</p>`
    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML= dialog;
}

function notANumber(){
    const text = `<p class="bg-red-400 text-white p-4 mt-4">please type a correct number☹</p>`
    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML= dialog;
}

function saveGuessStory(gues){
    guses.push(gues);
}

function displayHistory(){
    let index = guses.length - 1;
    let list = "<ul class ='list-group'>";
    while(index >= 0){
        list +=  `<li class= 'list-li border p-2 mt-3'>your guess is ${guses[index]}</li>`
        index -= 1;
        
    }
    list += '</ul>'
    document.getElementById('history').innerHTML = list
}


function initGame(){
    let correctNumber = getRandomNumber();
    document.getElementById('result').innerHTML= " ";
    document.getElementById('history').innerHTML = " ";
}
