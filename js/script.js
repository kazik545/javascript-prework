let move = ['kamień', 'papier', 'nożyce'];
let computerMove = Math.floor(Math.random() * 3);

if(computerMove == 0){
  computerMove = move[0];
} 
else if(computerMove == 1){
    computerMove = move[1];
}
else{
    computerMove = move[2];
}
console.log('Ruch komputera to: ' + computerMove);
printMessage('Ruch komputera to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = 'nieznany ruch';

if(playerInput === '1'){
  playerMove = move[0];
}
else if(playerInput === '2'){
  playerMove = move[1];
}
else if(playerInput === '3'){
  playerMove = move[2];
}
console.log('Gracz wybrał: ' + playerMove);

printMessage('Twój ruch to: ' + playerMove)
if(playerMove === computerMove){
  printMessage('Remis');
}
if(playerMove === 'kamień' && computerMove === 'nożyce'){
  printMessage('wygrałeś :)');
} else if(playerMove === 'kamień' && computerMove === 'papier'){
  printMessage('przegrałeś :(');
}
if(playerMove === 'nożyce' && computerMove === 'papier'){
  printMessage('Wygrałeś :)');
} else if(playerMove === 'nożyce' && computerMove === 'kamień'){
  printMessage('Przegrałeś :(');
}
if(playerMove === 'papier' && computerMove === 'kamień'){
  printMessage('Wygrałeś :)');
} else if(playerMove === 'papier' && computerMove === 'nożyce'){
  printMessage('Przegrałeś :(');
}