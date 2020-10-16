function playGame(playerInput){
  clearMessages()
  let move = ['kamień', 'papier', 'nożyce'];
  let playerMove;
  let computerMove = move[Math.floor(Math.random() * 3)];

  console.log('Ruch komputera to: ' + computerMove);
  printMessage('Ruch komputera to: ' + computerMove);

  function getMoveName(){
    //let playerInput = prompt('Wybierz swój ruch! 0: kamień, 1: papier, 2: nożyce.');


    playerMove = parseInt(playerInput);

    console.log(playerMove);

    if(!isNaN(playerInput)) { 
      playerMove = move[playerMove];
      if (!playerMove) {
        playerMove = 'nieznany Ruch';
      }
    } else {
      playerMove = 'nieznany';
    }
  }
  function displayResult(playerMove, computerMove){
    if(playerMove === computerMove){
      printMessage('Remis');
    } else {
      if(playerMove === 'papier') {
        if(computerMove === 'nożyce'){
          printMessage('Przegrałeś :(');
        } else {
          printMessage('Wygrałeś');
        }
      }
      if(playerMove === 'nożyce'){
        if(computerMove === 'kamień'){
          printMessage('Przegrałeś :(');
        } else {
          printMessage('Wygrałeś :)');
        }
    }
    if(playerMove === 'kamień'){
        if(computerMove === 'papier'){
          printMessage('Przegrałeś :(');
        } else {
          printMessage('Wygrałeś :)');
        }
    }
    }
  }
  getMoveName()

  console.log('Gracz wybrał: ' + playerMove);

  printMessage('Twój ruch to: ' + playerMove)

  displayResult(playerMove, computerMove)
}
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(0)
})
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1)
})
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(2)
})