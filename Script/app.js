class Player {
  //aici definim logica
  //toate metodele, logica de player, o sa poata folosi containerul pentru ca l-am pus aici pe this.
  constructor(gameContainer, playerCharacter) {
    this.gameContainer = gameContainer;
    this.playerCharacter = playerCharacter;
  }

  //vrem sa apara un div care va fi playerul in gameContainer
  //pt inceput il punem intr-un colt din container
  //div va avea pozitie absoluta si ne jucam cu x si y sa mutam div-u in interior
  createPlayerHTML(playerCharacter, positionX, positionY) {
    //poti face div-u aici sau sa-l iei din html
    var playerCharacter = document.getElementById(playerCharacter);
    playerCharacter.style.left = positionX + "px";
    playerCharacter.style.top = positionY + "px";
  }

  //event-ul il inregistram pe window sau document
  //verificare de keydown - folositi switch/if else. switch arata mai bn
  registerMovement() {
    window.addEventListener("keydown", movePlayerHTML);
  }

  movePlayerHTML(player) {
    //daca o dat arrow up bagam logica etc
    var left = parseInt(movePlayer.left, 10);
    var top = parseInt(movePlayer.top, 10);

    var movePlayer = document
      .getElementById("playerCharacter")
      .getBoundingClientRect();

    switch (player) {
      case 37:
        place("move", left - 10, top);
        break;

      case 39:
        place("move", left + 10, top);
        break;

      case 38:
        place("move", left, top - 10);
        break;

      case 40:
        place("move", left, top + 10);
        break;
    }
    console.log(player);
  }

  checkIfPlayerIsOutsideOfContainer() {
    //returneaza true sau false in functie daca player-u o iesit sau nu din container
  }
}

//trebuie sa facem un obiect player si el o sa fie pus in container

const gameContainer = document.querySelector("#gameContainer");
//facem un obiect de tip player
const player1 = new Player();
//legatura independent intre player1 si gameContainer: prin constructor
//apelare createPlayerHTML(): ori aici inafara, ori in constructor!!!
player1.registerMovement();
player1.createPlayerHTML();
