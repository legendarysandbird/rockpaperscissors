function computerPlay() {
    const choice = Math.ceil((Math.random() * 3));
    switch(choice) {
        case 1:
            return "rock";
            break;
        
        case 2:
            return "paper";
            break;
        
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    p = document.querySelector('p');
    if (playerSelection === computerSelection) {
        p.textContent = "It's a tie!"
        return "tie"
    }

    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            p.textContent = "You lose! Paper beats rock."
            return false;
        }
        else {
            p.textContent = "You win! Rock beats scissors."
            return true;
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            p.textContent = "You win! Paper beats rock."
            return true;
        }
        else {
            p.textContent = "You lose! Scissors beats paper."
            return false;
        }
    }

    else {
        if (computerSelection === "rock") {
            p.textContent = "You lose! Rock beats scissors."
            return false;
        }

        else {
            p.textContent = "You win! Scissors beats paper."
            return true;
        }
    }
}

yourScore = 0;
compScore = 0;
compMove = computerPlay();

function gameStatus(result) {
    if (result === true) {
        yourScore++;
        compMove = computerPlay();
    }
    else if (result === false) {
        compScore++;
        compMove = computerPlay();
    }
    else if (result === "tie") {
        compMove = computerPlay();
    }
    div = document.querySelector('div');
    div.textContent = `You have ${yourScore} points. Comp has ${compScore} points. Make your choice.`;
    if (yourScore === 5) {
        div.textContent = "The game is over. You win!"
        p = document.querySelector('p');
        p.textContent = `Score: ${yourScore}-${compScore}`;
    }
    else if (compScore === 5) {
        div.textContent = "The game is over. You lose!"
        p = document.querySelector('p');
        p.textContent = `Score: ${compScore}-${yourScore}`;
    }
}

btn1 = document.querySelector("#rock");
btn1.addEventListener('click', function(e) {
    result = playRound(e.target.id, compMove);
    gameStatus(result);
});

btn2 = document.querySelector("#paper");
btn2.addEventListener('click', function(e) {
    result = playRound(e.target.id, compMove);
    gameStatus(result);
});

btn3 = document.querySelector("#scissors");
btn3.addEventListener('click', function(e) {
    result = playRound(e.target.id, compMove);
    gameStatus(result);
});

