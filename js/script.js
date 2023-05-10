const buttonRock = document.getElementById('button-rock');
const buttonScissors = document.getElementById('button-scissors');
const buttonPaper = document.getElementById('button-paper');

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    const playerMove = argButtonName;
    const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId) {
    const number = Number(argMoveId);
    console.log('wywołano funkcję getMoveName z argumentem: ' + number + ' typu ' + typeof (number));
    switch (number) {
        case 1: return 'kamien';
        case 2: return 'papier';
        case 3: return 'nozyce';
        default:
            console.log('Wywolana instrukcje default');
            printMessage('Nie znam ruchu o id ' + number + '. Zakładam, że chodziło o "kamień".');
            return 'kamien';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else if ((argPlayerMove == 'papier' && argComputerMove == 'nozyce') ||
        (argPlayerMove == 'kamien' && argComputerMove == 'papier') ||
        (argPlayerMove == 'nozyce' && argComputerMove == 'kamien')) {
        printMessage('Przegrales!');
    } else {
        printMessage('Wygrales!');
    }
}

buttonRock.addEventListener('click', function () { buttonClicked('kamien'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nozyce'); });

