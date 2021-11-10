let mailList = []; //array mail degli iscritti
let emailName = document.getElementById("email"); //nome della mail
let emailDomain = document.getElementById("domain"); //dominio della mail
let text = document.getElementById("output");

//pulsante per accedere
let signin = document.getElementById("signin");
signin.addEventListener("click", function() {
    let email = emailName.value + emailDomain.value; //concatenazione email
    let mailCheck = false; //variabile per vedere se la mail è nel sistema
    //controllo delle mail nel sistema
    for (let i = 0; i < mailList.length; i++) {
        if (email == mailList[i]) {
            mailCheck = true; //la mail è nel sistema
        }
    }
    if (mailCheck == true) {
        console.log("Bentornato");
        text.innerHTML = "Bentornato";

    } else {
        console.log("Non sei iscritto");
        text.innerHTML = "Non sei iscritto";
    }
});

//pulsante per iscriversi
let signup = document.getElementById("signup");
signup.addEventListener("click", function() {
    let email = emailName.value + emailDomain.value; //concatenazione email
    let mailCheck = false; //variabile per vedere se la mail è nel sistema
    //controllo delle mail nel sistema
    for (let i = 0; i < mailList.length; i++) {
        if (email == mailList[i]) {
            mailCheck = true; //la mail è nel sistema
        }
    }
    if (mailCheck == true) {
        console.log("Sei già iscritto");
        text.innerHTML = "Sei già iscritto";

    } else {
        mailList.push(email);
        console.log("Benvenuto");
        text.innerHTML = "Benvenuto";
    }
});