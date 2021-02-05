function function1(){
    alert("Dit is een willekeurig alert bericht!");
}
function function2(){
    console.log(prompt("Wat is je naam?"));
}
function function3(){
    let Antwoord = confirm()
    if (Antwoord == true){
        console.log("Ok")
    }
    if  (Antwoord == false){
        console.log("dan niet")
    }

}
function allesBijElkaar(){
    function1();
    function2();
    function3();
}
allesBijElkaar();