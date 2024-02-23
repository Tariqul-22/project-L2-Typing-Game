
let life = 10;
let score = 0 ;

function setAttributeByIdClass (id,cls){
    const element = document.getElementById(id);
    element.classList.add(cls);
}

function removeAttributeByIdClass (id,cls){
    const element = document.getElementById(id);
    element.classList.remove(cls);
}

function setInnerText (id, value){
    document.getElementById(id).innerText = value ;
}

function randomAlphabet() {
    const alphabetString = 'abcdefghijkl;mnopqrstuvwxyz,./';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 29;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

function handleKeyPress(event) {
    const playerPressed = event.key;
    console.log(playerPressed);
    const currentAlphabet = document.getElementById('currentAlphabet');
    const expectedAlphabet = currentAlphabet.innerText.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    if (playerPressed === expectedAlphabet) {
        continueGame();
        removeAttributeByIdClass (playerPressed,'bg-orange-400');
        score = score + 1;
        setInnerText('score',score);

    }
    else {
        life =life - 1;
        setInnerText('life',life);
        if (life == 0) {
            finalScore(score);

        }
    }

    if (playerPressed === 'Escape') {
        finalScore(score);
    }
}

function finalScore(score) {
    setAttributeByIdClass('play-ground','hidden');
    removeAttributeByIdClass('score-board','hidden');
    setInnerText ('final-score',score);

    
}

function playAgain(event) {
    setAttributeByIdClass('score-board','hidden');
    removeAttributeByIdClass ('play-ground','hidden');
    setInnerText('life',10);
    setInnerText('score',0);
    const currentElement = document.getElementById('currentAlphabet');
    const element = currentElement.innerText
    removeAttributeByIdClass(element,'bg-orange-400');
    continueGame();
}
