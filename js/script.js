let mailList = []; //array mail degli iscritti
let emailName = document.getElementById("email"); //nome della mail
let emailDomain = document.getElementById("domain"); //dominio della mail
let text = document.querySelector(".output-login"); //messaggio di accesso
let mailCheck = false; //variabile per vedere se la mail è nel sistema

//pulsante per accedere
let signin = document.getElementById("signin");
signin.addEventListener("click", function() {
    if (emailName.value == "") {
        text.innerHTML = "Inserisci una mail valida";
    } else {
        let email = emailName.value + emailDomain.value; //concatenazione email
        //controllo delle mail nel sistema
        for (let i = 0; i < mailList.length; i++) {
            if (email == mailList[i]) {
                mailCheck = true; //la mail è nel sistema
            }
        }
        if (mailCheck == true) {
            text.innerHTML = "Bentornato/a";

        } else {
            text.innerHTML = "Non sei iscritto/a, iscriviti per giocare";
        }
    }
});

//pulsante per iscriversi
let signup = document.getElementById("signup");
signup.addEventListener("click", function() {
    if (emailName.value == "") {
        text.innerHTML = "Inserisci una mail valida";
    } else {
        let email = emailName.value + emailDomain.value; //concatenazione email
        //controllo delle mail nel sistema
        for (let i = 0; i < mailList.length; i++) {
            if (email == mailList[i]) {
                mailCheck = true; //la mail è nel sistema
            }
        }
        if (mailCheck == true) {
            text.innerHTML = "Sei già iscritto/a";

        } else {
            mailList.push(email);
            text.innerHTML = "Benvenuto/a";
            mailCheck = true;
        }
    }
});

// pulsante per giocare
let play = document.getElementById("play");
play.addEventListener("click", function() {
    if (mailCheck == false) {
        text.innerHTML = "Devi prima accedere o iscriverti"; // il gioco non parte se non si effettua l'accesso
    } else {

        // mossa giocatore

        let player = Math.floor(Math.random() * 6) +1; // creazione numeri interi casuali da 1 a 6
        let playerDice = document.getElementById("player"); // variabile per riferirci al dado del giocatore
        let playerNum = playerDice.getElementsByClassName("dot"); // array che contiene tutti i pallini neri del dado
        for (let i = 0; i < playerNum.length; i++) {
            playerNum[i].style.opacity = "0"; // cancella il risultato precedente
        }
        switch (player) {
            case 1:
                playerNum = playerDice.getElementsByClassName("uno");
                break;
            case 2:
                playerNum = playerDice.getElementsByClassName("due");
                break;
            case 3:
                playerNum = playerDice.getElementsByClassName("tre");
                break;
            case 4:
                playerNum = playerDice.getElementsByClassName("quattro");
                break;
            case 5:
                playerNum = playerDice.getElementsByClassName("cinque");
                break;
            case 6:
                playerNum = playerDice.getElementsByClassName("sei");
                break;

        }
        for (let i = 0; i < playerNum.length; i++) {
            playerNum[i].style.opacity = "1"; // si rendono visibili i pallini a seconda del risultato 
        }

        // mossa computer

        let computer = Math.floor(Math.random() * 6) +1; // creazione numeri interi casuali da 1 a 6
        let computerDice = document.getElementById("computer"); // variabile per riferirci al dado del computer
        let computerNum = computerDice.getElementsByClassName("dot"); // array che contiene tutti i pallini neri del dado
        for (let i = 0; i < computerNum.length; i++) {
            computerNum[i].style.opacity = "0"; // cancella il risultato precedente
        }
        switch (computer) {
            case 1:
                computerNum = computerDice.getElementsByClassName("uno");
                break;
            case 2:
                computerNum = computerDice.getElementsByClassName("due");
                break;
            case 3:
                computerNum = computerDice.getElementsByClassName("tre");
                break;
            case 4:
                computerNum = computerDice.getElementsByClassName("quattro");
                break;
            case 5:
                computerNum = computerDice.getElementsByClassName("cinque");
                break;
            case 6:
                computerNum = computerDice.getElementsByClassName("sei");
                break;

        }
        for (let i = 0; i < computerNum.length; i++) {
            computerNum[i].style.opacity = "1"; // si rendono visibili i pallini a seconda del risultato 
        }


    }
});