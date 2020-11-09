class game {
    constructor (jugador,jugando){
      this.jugando = jugando;
      this.jugador = jugador;
   };
   
    play (num) {    
            switch(num) {
                case 0:
                case 2:
                case 4:
                case 6:
                case 8: {this.jugador = "O";
                proximoJugador = "X";
                };
                break;
                case 1:
                case 3:
                case 5:
                case 7 : {this.jugador = "X";
                proximoJugador = "O";
                };
                break;
            };
            jugador = this.jugador;
    };
    updateDisplay() {
        this.jugando = `${"turno de: "} ${proximoJugador}`;
        jugando.textContent = this.jugando;
    };
    endgame() {
        let result
        if (buttons[0].textContent === buttons[1].textContent && buttons[1].textContent === buttons[2].textContent && buttons[2].textContent !== "") { result = `${"GANA "} ${buttons[0].textContent}`
        jugando.textContent = result
        }
        else if (buttons[3].textContent === buttons[4].textContent && buttons[4].textContent === buttons[5].textContent && buttons[5].textContent !== "") { result = `${"GANA "} ${buttons[3].textContent}`
        jugando.textContent = result
        }
        else if (buttons[6].textContent === buttons[7].textContent && buttons[7].textContent === buttons[8].textContent && buttons[8].textContent !== "") { result = `${"GANA "} ${buttons[6].textContent}`
        jugando.textContent = result
        }
        else if (buttons[0].textContent === buttons[3].textContent && buttons[3].textContent === buttons[6].textContent && buttons[6].textContent !== "") { result = `${"GANA "} ${buttons[0].textContent}`
        jugando.textContent = result
        }
        else if (buttons[1].textContent === buttons[4].textContent && buttons[4].textContent === buttons[7].textContent && buttons[7].textContent !== "") { result = `${"GANA "} ${buttons[1].textContent}`
        jugando.textContent = result
        }
        else if (buttons[2].textContent === buttons[5].textContent && buttons[5].textContent === buttons[8].textContent && buttons[8].textContent !== "") { result = `${"GANA "} ${buttons[2].textContent}`
        jugando.textContent = result
        }
        else if (buttons[0].textContent === buttons[4].textContent && buttons[4].textContent === buttons[8].textContent && buttons[8].textContent !== "") { result = `${"GANA "} ${buttons[0].textContent}`
        jugando.textContent = result
        }
        else if (buttons[2].textContent === buttons[4].textContent && buttons[4].textContent === buttons[6].textContent && buttons[6].textContent !== "") { result = `${"GANA "} ${buttons[2].textContent}`
        jugando.textContent = result
        } else if (buttons[0].textContent !== "" &&
                   buttons[1].textContent !== "" &&
                   buttons[2].textContent !== "" &&
                   buttons[3].textContent !== "" &&
                   buttons[4].textContent !== "" &&
                   buttons[5].textContent !== "" &&
                   buttons[6].textContent !== "" &&
                   buttons[7].textContent !== "" &&
                   buttons[8].textContent !== "") 
                    {
                    result = `${"EMPATE"}`
                    jugando.textContent = result
                    };
    };
};



const buttons = document.querySelectorAll("[data-button]");
const jugando = document.querySelector("[data-jugando]");
let jugador;
let proximoJugador; 
let i = 0;


game = new game(jugador,jugando);


buttons.forEach( button => {
    button.addEventListener("click", () => {
           if (button.textContent !=="O" && button.textContent !=="X"){
            game.play(i);
            button.textContent = `${jugador}`;
            game.updateDisplay();
            game.endgame();
            i++;
            };
    });
});


   

