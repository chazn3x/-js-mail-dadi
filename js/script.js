let mailList = []; //array mail degli iscritti
let emailName = document.getElementById("email"); //nome della mail
let emailDomain = document.getElementById("domain"); //dominio della mail
let text = document.querySelector(".output-login"); //messaggio di accesso
let mailCheck = false; //variabile per vedere se la mail è nel sistema
let loginLayover = document.querySelector(".login-section"); //layover della seizone login
let gameLayover = document.querySelector(".game"); //layover della sezione dei dadi
let playerName = document.getElementById("player-email") //email giocatore sul dado

emailName.addEventListener("click", function() {
    loginLayover.classList.remove("layover");
    gameLayover.classList.add("layover")
    mailCheck = false;
    playerName.innerHTML = "Giocatore";
});

//pulsante per accedere
let signin = document.getElementById("signin");
signin.addEventListener("click", function() {
    mailCheck = false;
    if (emailName.value == "") {
        text.innerHTML = "Inserisci una mail valida";
        gameLayover.classList.add("layover")
        loginLayover.classList.remove("layover");
        playerName.innerHTML = "Giocatore";
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
            emailName.value = "";
            gameLayover.classList.remove("layover");
            loginLayover.classList.add("layover");
            playerName.innerHTML = email;
        } else {
            text.innerHTML = "Non sei iscritto/a, iscriviti per giocare";
            gameLayover.classList.add("layover");
        }
    }
});

//pulsante per iscriversi
let signup = document.getElementById("signup");
signup.addEventListener("click", function() {
    mailCheck = false;
    if (emailName.value == "") {
        text.innerHTML = "Inserisci una mail valida";
        gameLayover.classList.add("layover");
        loginLayover.classList.remove("layover");
        playerName.innerHTML = "Giocatore";
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
            emailName.value = "";
            gameLayover.classList.remove("layover");
            loginLayover.classList.add("layover");
            playerName.innerHTML = email;

        } else {
            mailList.push(email);
            text.innerHTML = "Benvenuto/a";
            emailName.value = "";
            mailCheck = true;
            gameLayover.classList.remove("layover");
            loginLayover.classList.add("layover");
            playerName.innerHTML = email;
        }
    }
});

// pulsante per giocare
let play = document.getElementById("play");
play.addEventListener("click", function() {
    if (mailCheck == false) {
        text.innerHTML = "Devi prima accedere o iscriverti"; // il gioco non parte se non si effettua l'accesso
        loginLayover.classList.remove("layover");
        gameLayover.classList.add("layover");
        playerName.innerHTML = "Giocatore";
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

        // risultati

        let result = document.querySelector(".output-gioco");
        if (player < computer) {
            result.innerHTML = "Hai perso!"
        } else if (player > computer) {
            result.innerHTML = "Hai vinto!"
        } else {
            result.innerHTML = "Pareggio!"
        }

    }
});