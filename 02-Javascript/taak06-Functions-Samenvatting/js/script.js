let score = 0;
let getal1;
let getal2;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}
function showRandomNumber2(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

function geefAntwoord(antwoord){
    let score = 0;
    getal1 = document.querySelector(".getal1").innerHTML;
    getal2 = document.querySelector(".getal2").innerHTML;
    score = document.querySelector(".score").innerHTML;
    alert("x" + score + "x");
    if (getal1 > getal2 && antwoord == 'hoger'){
       alert("goed");
       parseInt(score = score + 1);
       document.querySelector(".score").innerHTML = score;
    }
    if (getal1 < getal2 && antwoord == 'lager'){
        alert("ook goed");
        parseInt(score = score + 1);
        document.querySelector(".score").innerHTML = score;
    }
    showRandomNumber1();
    showRandomNumber2();
}
showRandomNumber1();
showRandomNumber2();
