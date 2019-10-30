// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

const image = new Image();
image.src = './images/character-down.png';

const imageTreasure = new Image();
imageTreasure.src = './images/treasure.png'


// Iteration 1
function drawGrid() {
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    for (let i = 0; i <= height; i+=50) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(500, i);
        context.moveTo(i, 0);
        context.lineTo(i, 500);
        context.stroke();
        context.closePath();
    }
}

function randomPos () {
    return Math.floor(Math.random() * 9 );
}   

function drawPlayer(col, row) {
 //   image.addEventListener('load', () => {
    context.drawImage(image, col*50+2, row*50+2)
 //   });
}

function drawTreasure(col,row) {
//  imageTreasure.addEventListener('load', () => {
    const imageHeight = imageTreasure.height;
    const imageWidth = imageTreasure.width;
    const size = 0.20;
    context.drawImage(imageTreasure, col*50, row*50, imageWidth*size,imageHeight*size)
 //     });
}

function drawEverything() {
    drawGrid();
    window.addEventListener('load', () => {
        drawPlayer(player.col, player.row);
      //  console.log(player.col, player.row);
      });
      window.addEventListener('load', () => {
        drawTreasure(treasure.col, treasure.row);
      });
}

drawEverything();

window.addEventListener('load', () => {
    drawEverything();
});

class Character {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    moveUp() {
        if (this.row !== 0) {
            this.row -= 1;
          } else {
            this.row = this.row;
          }
    }

    moveRight(){
        if (this.col !== 9) {
            this.col += 1;
          } else {
            this.col = this.col;
          }
    }

    moveDown() {
        if (this.row !== 9) {
            this.row += 1;
          } else {
            this.row = this.row;
          }
    }

    moveLeft() {
        if (this.col !== 0) {
            this.col -= 1;
          } else {
            this.col = this.col;
          }
    }

}

class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    setRandomPosition() {
        this.col = Math.floor(Math.random() * 9);
        this.row = Math.floor(Math.random() * 9);
    }
}

const player = new Character(randomPos(),randomPos());
const treasure = new Treasure(randomPos(),randomPos())


/* console.log(player.col, player.row); 
console.log(treasure.col, treasure.row); */

window.addEventListener('keydown', (event) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
  
    // React based on the key pressed
    switch (event.keyCode) {
      case 37:
        context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
        player.moveLeft()
        drawPlayer(player.col, player.row);
        console.log('left');

        break;
      case 38:
        context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
        player.moveUp()
        drawPlayer(player.col, player.row);
        console.log('up');
        break;
      case 39:
        context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
        player.moveRight()
        drawPlayer(player.col, player.row);
        console.log('right');
        break;
      case 40:
        context.clearRect(player.col * 50 + 2, player.row * 50 + 2, 44, 44);
        player.moveDown()
        drawPlayer(player.col, player.row);
        console.log('down');
        break;
    }
    if ((player.row && player.col) === (treasure.row && treasure.col)) {
        context.clearRect(treasure.col * 50 + 2, treasure.row * 50 + 2, 44, 44);
        drawPlayer(player.col, player.row);
        drawTreasure(randomPos(), randomPos())
    }
  });