function createPlayerHTML(playerCharacter, positionX, positionY) {
  //poti face div-u aici sau sa-l iei din html
  var playerCharacter = document.getElementById(playerCharacter);
  playerCharacter.style.left = positionX + "px";
  playerCharacter.style.top = positionY + "px";
}

//event-ul il inregistram pe window sau document
//verificare de keydown - folositi switch/if else. switch arata mai bn
function registerMovement() {
  window.addEventListener("keydown", movePlayerHTML);
}

function movePlayerHTML(player) {
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
registerMovement();
