//Chiedo l'email e dichiaro la lista d'accesso
var email = prompt('Qual è la tua email?');
var emailList = ['pincopallino@gmail.com','pallinopinco@gmail.com','pallinopincopino@gmail.com'];

//Controllo se l'email inserita è presente nell'array
if (email === emailList[0] || email === emailList[1] || email === emailList[2]) {
  var login = document.getElementById('login').innerHTML = 'Login effettuato con successo';
} else {
  var login = document.getElementById('login').innerHTML = 'L\'email inserita è inesistente';
}
