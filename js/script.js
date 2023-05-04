var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

function getMoveName(argMoveId) {
    let number = Number(argMoveId);
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
    if (argPlayerMove == 'papier' && argComputerMove == 'kamien') {
        printMessage('Wygrywasz!');
    }
    if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
        printMessage('Remis!');
    }
    if (argPlayerMove == 'papier' && argComputerMove == 'nozyce') {
        printMessage('Przegrywasz!');
    }
    if (argPlayerMove == 'kamien' && argComputerMove == 'kamien') {
        printMessage('Remis!');
    }
    if (argPlayerMove == 'kamien' && argComputerMove == 'papier') {
        printMessage('Przegrywasz!');
    }
    if (argPlayerMove == 'kamien' && argComputerMove == 'nozyce') {
        printMessage('Wygrywasz!');
    }
    if (argPlayerMove == 'nozyce' && argComputerMove == 'kamien') {
        printMessage('Przegrywasz!');
    }
    if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
    }
    if (argPlayerMove == 'nozyce' && argComputerMove == 'nozyce') {
        printMessage('Remis!');
    }
}

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

