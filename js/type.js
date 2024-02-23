function play(event) {
    setAttributeByIdClass('home','hidden');
    removeAttributeByIdClass ('play-ground','hidden');
    continueGame();
}

function continueGame() {
    const alphabet = randomAlphabet();
    setInnerText('currentAlphabet',alphabet);
    setAttributeByIdClass (alphabet,'bg-orange-400');

}

document.addEventListener('keyup', handleKeyPress);



