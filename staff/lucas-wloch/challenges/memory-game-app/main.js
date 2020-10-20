
var buttons = document.querySelectorAll('.button');
var clickedCards = [];


buttons.forEach(function(button){
    button.addEventListener('click' , function(){
        button.classList.add("show");
        clickedCards.push()
        checkResult();
        updateDisplay();
    })
})





















/*

    start(){
        asing a random position to every card
    }
    onClick {
        rotatecard()
        showImg()
        pasar <img> a array "par en juego"
        check if "par en juego" = [a(img),a(img)]
        updateDisplay("conseguiste un par" "vuelve a intentarlo" "gano el equipo ..." " EMPATE")


    }


*/