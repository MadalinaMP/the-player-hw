class Player {
  constructor(gameContainer, playerCharacter) {
    this.gameContainer = gameContainer;
    this.playerCharacter = playerCharacter;
  }

  createPlayerHTML() {
    var playerCharacter = document.getElementById(playerCharacter);
  }

  registerMovement() {
    window.addEventListener("keydown", this.movePlayerHTML);
  }

  movePlayerHTML() {
    var newPlayer = this.createPlayerHTML();
    var toLeft = parseInt(this.newPlayer.style.left);
    var upwards = parseInt(this.newPlayer.style.top);
    var movePlayerBy = 10;

    switch (newPlayer) {
      case "left":
        toLeft = toLeft - movePlayerBy + "px";
        break;

      case "right":
        toLeft = toLeft + movePlayerBy + "px";
        break;

      case "up":
        upwards = upwards - movePlayerBy + "px";
        break;

      case "down":
        upwards = upwards + movePlayerBy + "px";
        break;
    }
  }

  checkIfPlayerIsOutsideOfContainer(player) {
    if (
      this.playerCharacter.style.top !== -1 ||
      this.playerCharacter.style.right !== -1 ||
      this.playerCharacter.style.top !== 381 ||
      this.playerCharacter.style.right !== 381
    ) {
      player.movePlayerHTML();
    }
  }
}

const gameContainer = document.querySelector("#gameContainer");
const myPlayer = new Player();
myPlayer.movePlayerHTML();
