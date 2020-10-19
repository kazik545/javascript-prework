{
  function playGame(playerInput){
    clearMessages()
    
    const move = ['kamień', 'papier', 'nożyce'];    
    const computerMove = move[Math.floor(Math.random() * 3)];

    console.log('Ruch komputera to: ' + computerMove);
    
    printMessage('Ruch komputera to: ' + computerMove);

    function getMoveName(){ 
      let playerMove = parseInt(playerInput);

      console.log(playerMove);

      if(!isNaN(playerInput)) { 
        playerMove = move[playerMove];
        if (!playerMove) {
          playerMove = 'nieznany Ruch';
        }
      } else {
        playerMove = 'nieznany';
      }
      
      console.log('Gracz wybrał: ' + playerMove);
      
      return playerMove;
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
    const playerMove = getMoveName();
    
    console.log(playerMove)
    
    printMessage('Twój ruch to: ' + playerMove)
    displayResult(playerMove, computerMove)
  }
  
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(1)
  })
  
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(0)
  })
  
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(2)
  })
}