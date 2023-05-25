const canvas = new fabric.Canvas('myCanvas');

const playerWidth = 150;
const playerHeight = 140;

var blockImageWidth = 30;
var blockImageHeight = 30;

var playerX = 10;
var playerY = 10;

var playerObject = "";
var blockImageObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(playerWidth);
        playerObject.scaleToHeight(playerHeight);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject)
    });
}

window.addEventListener("keydown" , keyDown )

function keyDown (e){
    const keyPressed = e.keyCode;
    const passo = 10;


    if (keyPressed == 66){//b
        console.log(e.key);
        newImage("bricks.jpg");
    
    } else if (keyPressed == 83){//s
        console.log(e.key);
        newImage("stone.jpg");

    } else if (keyPressed == 89){//y
        console.log(e.key);
        newImage("yellowBricks.png");

    } else if (keyPressed == 68){//d
        console.log(e.key);
        newImage("dirt.png");

    } else if (keyPressed == 75){//k
        console.log(e.key);
        newImage("darkGrass.png");

    } else if (keyPressed == 76){//l
        console.log(e.key);
        newImage("lightGrass.png");

    } else if (keyPressed == 71){//g
        console.log(e.key);
        newImage("glowstone.png");

    } else if (keyPressed == 78){//n
        console.log(e.key);
        newImage("netherrack.jpg");

    } else if (keyPressed == 83){//s
        console.log(e.key);
        newImage("stone.jpg");

    } else if (keyPressed == 87){//w
        console.log(e.key);
        newImage("wood.jpg");}
}
