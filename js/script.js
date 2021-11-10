let mailList = []; //array mail degli iscritti
let emailName = document.getElementById("email"); //nome della mail
let emailDomain = document.getElementById("domain"); //dominio della mail
let text = document.querySelector(".output");

//pulsante per accedere
let signin = document.getElementById("signin");
signin.addEventListener("click", function() {
    if (emailName.value == "") {
        text.innerHTML = "Inserisci una mail valida";
    } else {
        let email = emailName.value + emailDomain.value; //concatenazione email
        let mailCheck = false; //variabile per vedere se la mail è nel sistema
        //controllo delle mail nel sistema
        for (let i = 0; i < mailList.length; i++) {
            if (email == mailList[i]) {
                mailCheck = true; //la mail è nel sistema
            }
        }
        if (mailCheck == true) {
            text.innerHTML = "Bentornato/a";

        } else {
            text.innerHTML = "Non sei iscritto/a";
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
        let mailCheck = false; //variabile per vedere se la mail è nel sistema
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
        }
    }
});