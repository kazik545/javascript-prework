let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} 
else if(randomNumber == 2){
    computerMove = 'papier';
}
else{
    computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nożyce';
}
else if (playerInput != '1' || playerInput != '2' || playerInput != '3'){
  playerMove = 'badMove'
}


if(playerInput == '1' || playerInput == '2' || playerInput =='3'){
  printMessage('Twój ruch to: ' + playerMove);
}
if(computerMove == 'kamień' && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'papier' || computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis');
}
else if(computerMove == 'papier' && playerMove == 'kamień' || computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Przegrałeś :(');
}
else if(playerMove == 'badMove') {
  printMessage('Wybierz prosze 1, 2 lub 3') 
}
else{
  printMessage('Wygrałeś :)');
}


