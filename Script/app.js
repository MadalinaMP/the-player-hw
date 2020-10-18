class Player {
  constructor(gameContainer, playerCharacter) {
    this.gameContainer = gameContainer;
    this.playerCharacter = playerCharacter;
  }

  registerMovement() {
    window.addEventListener("keydown", (event) => {
      this.movePlayerHTML(event);
    });
  }

  movePlayerHTML(event) {
    var nextLeft = parseInt(this.playerCharacter.style.left);
    var nextTop = parseInt(this.playerCharacter.style.top);
    var movePlayerBy = 10;

    //console.log(event);

    switch (event.key) {
      case "ArrowLeft":
        nextLeft = nextLeft - movePlayerBy;
        break;

      case "ArrowRight":
        nextLeft = nextLeft + movePlayerBy;
        break;

      case "ArrowUp":
        nextTop = nextTop - movePlayerBy;
        break;

      case "ArrowDown":
        nextTop = nextTop + movePlayerBy;
        break;
    }

    //console.log(nextLeft, nextTop);

    if (this.isPlayerPositionIsInDiv(nextLeft, nextTop)) {
      this.playerCharacter.style.left = nextLeft + "px";
      this.playerCharacter.style.top = nextTop + "px";
    }
  }

  isPlayerPositionIsInDiv(nextLeft, nextTop) {
    if (
      !(nextLeft < 0) &&
      !(nextTop < 0) &&
      !(nextLeft > 380) &&
      !(nextTop > 380)
    ) {
      return true;
    } else {
      return false;
    }
  }
}

const gameContainer = document.querySelector("#gameContainer");
const playerCharacter = document.getElementById("playerCharacter");
const myPlayer = new Player(gameContainer, playerCharacter);
myPlayer.registerMovement();
