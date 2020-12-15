//Chiedo l'email e dichiaro la lista d'accesso
var email = prompt('Qual è la tua email?');
var emailList = ['pincopallino@gmail.com','pallinopinco@gmail.com','pallinopincopino@gmail.com'];

//Button da cliccare per giocare
var playButton = document.getElementById('btn');

//Contenitori in cui viene mostrato il risultato della partita
var userResult = document.getElementById('userResult');
var pcResult = document.getElementById('pcResult');

//Numero dell'utente
var userDice = Math.floor(Math.random() * 6) +1;

//Numero del computer
var pcDice = Math.floor(Math.random() * 6) +1;

//Variabile usata per verificare l'email di registrazione + controllo registrazione
var emailFound;

for (var i = 0; i < emailList.length; i++) {
  if (emailList[i] === email) {
    emailFound = true;
  }
}

//GIOCO DADI

if (emailFound) {
  playButton.innerText = 'Clicca qui per lanciare!';
  playButton.addEventListener('click', //Button per iniziare la partita
    function(){
      userResult.innerText = 'Il numero dell\'utente è: ' + userDice;
      pcResult.innerText = 'Il numero del computer è: ' + pcDice;
      if (userDice > pcDice) {
        var victory = document.getElementById('result').innerHTML = 'Hai vinto';
      } else if (userDice === pcDice) {
        var draw = document.getElementById('result').innerHTML = 'Hai pareggiato';
      } else {
        var defeat = document.getElementById('result').innerHTML = 'Hai perso';
      }
    })
} else if (emailList[i] !== email){
  login.innerText = 'Non sei registrato'; //Se non registrato il gioco non parte e il button rimane invisibile
  playButton.style.visibility = 'hidden';
}
