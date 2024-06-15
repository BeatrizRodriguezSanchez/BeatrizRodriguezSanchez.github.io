// CREAR EL CANVAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 720;

// DECLARACIONES
let labaWidth = -1280;
let lavaColision = 20;
let labaSpeed = 20;

let colisiones = [
    //1
    {
        x1: 10, x2: 370,
        y1: 60, y2: 180,
    },
    //2
    {
        x1: 490, x2: 850,
        y1: 60, y2: 180,
    },
    //3
    {
        x1: 10, x2: 130,
        y1: 60, y2: 300,
    },
    //4
    {
        x1: 730, x2: 850,
        y1: 180, y2: 420,
    },
    //5
    {
        x1: 970, x2: 1090,
        y1: 180, y2: 540,
    },
    //6
    {
        x1: 1090, x2: 1210,
        y1: 180, y2: 300,
    },
    //7
    {
        x1: 250, x2: 370,
        y1: 300, y2: 420,
    },
    //8
    {
        x1: 490, x2: 610,
        y1: 300, y2: 420,
    },
    //9
    {
        x1: 10, x2: 130,
        y1: 420, y2: 660,
    },
    //10
    {
        x1: 370, x2: 490,
        y1: 420, y2: 540,
    },
    //11
    {
        x1: 130, x2: 250,
        y1: 540, y2: 660,
    },
    //12
    {
        x1: 490, x2: 610,
        y1: 540, y2: 660,
    },
    //13
    {
        x1: 730, x2: 850,
        y1: 540, y2: 660,
    },
    //borde1
    {
        x1: 10, x2: 1210,
        y1: 60, y2: 60,
    },
    //borde2
    {
        x1: 10, x2: 1210,
        y1: 660, y2: 660,
    },
    //borde3
    {
        x1: 1210, x2: 1270,
        y1: 420, y2: 660,
    },

]

function colisionNivel2(box, positionplayer) {
    let checkderecha = (positionplayer.x2 >= box.x1)
    let checkizquierda = (positionplayer.x1 <= box.x2)
    let checkabajo = (positionplayer.y1 <= box.y2)
    let checkarriba = (positionplayer.y2 >= box.y1)
    return checkderecha && checkarriba && checkizquierda && checkabajo
}


// CARGAR IMAGENES ASSETS
const bgImg = new Image();
bgImg.onload = function () {
};
bgImg.src = "photos/nivel2.jpg"; // URL del Background--------------

const playerDownImg = new Image();
playerDownImg.onload = function () {
    player.width += playerLeftImg.width / 4;
    player.height += playerLeftImg.height;
};
playerDownImg.src = "assets/playerDown.png";

const labaImg = new Image();
labaImg.onload = function () {
};
labaImg.src = "assets/laba.png";

const playerLeftImg = new Image();
playerLeftImg.src = "assets/playerLeft.png";
playerLeftImg.onload = function () {
};

const playerRightImg = new Image();
playerRightImg.onload = function () {
};
playerRightImg.src = "assets/playerRight.png";

const playerUpImg = new Image();
playerUpImg.onload = function () {
};
playerUpImg.src = "assets/playerUp.png";



const player = {
    x: 70,
    y: 330,
    width: 0,
    height: 0,
    vel: 3,
    moving: false,
    direction: 'right',
    frameCount: 0,
    currentFrame: 0,
    totalFrames: 4,
    move: function () {
        if (this.moving) {
            this.frameCount++;
            //console.log("Frame count: " + this.frameCount);
            if (this.frameCount >= 5) {
                this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
                this.frameCount = 0;
                //console.log("Current frame: " + this.currentFrame );
            }

            let newX = this.x;
            let newY = this.y;

            switch (this.direction) {
                case 'up':
                    newY -= this.vel;
                    break;
                case 'down':
                    newY += this.vel;
                    break;
                case 'left':
                    newX -= this.vel;
                    break;
                case 'right':
                    newX += this.vel;
                    break;
            }
            //COLISIONES CAMINO
            let rectangulopj = {
                x1: newX,
                x2: newX + 66,
                y1: newY,
                y2: newY + 66,
            }

            let chocar = false

            for (let collision of colisiones) {

                if (colisionNivel2(collision, rectangulopj)) {
                    chocar = true
                }
                        }
            if (!chocar) {
                this.x = newX
                this.y = newY
            }
            //cambio nivel
            if (newX + this.width >= canvas.width) {
                //COLISION CAMBIO DE NIVEL,ES UN RELOAD EN EL ¨segundoNivel.html¨
                window.location.replace('photos/end.jpg')
            }
            

        }
    },

    //DIBUJA AL PERSONAJE
    draw: function () {
        switch (this.direction) {
            case 'up':
                ctx.drawImage(playerUpImg, this.currentFrame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
                break;
            case 'down':
                //console.log("hola " + playerDownImg + " " + this.currentFrame * this.width + " " +  0 + " " + this.width + " " + this.height + " " + this.x + " " + this.y + " " + this.width + " " + this.height);
                ctx.drawImage(playerDownImg, this.currentFrame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
                break;
            case 'left':
                ctx.drawImage(playerLeftImg, this.currentFrame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
                break;
            case 'right':
                //console.log("hola R" + playerRightImg + " " + this.currentFrame * this.width + " " +  0 + " " + this.width + " " + this.height + " " + this.x + " " + this.y + " " + this.width + " " + this.height);
                ctx.drawImage(playerRightImg, this.currentFrame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
                break;
        }
    }

};


//el KeyCode está rarete, pero funciona
document.addEventListener('keydown', function (e) {
    if (e.keyCode === 65 || e.keyCode === 87 || e.keyCode === 68 || e.keyCode === 83) {
        player.moving = true;
        switch (e.keyCode) {
            case 65: // A
                player.direction = 'left';
                break;
            case 87: // W
                player.direction = 'up';
                break;
            case 68: // D
                player.direction = 'right';
                break;
            case 83: // S
                player.direction = 'down';
                break;
        }
    }
});


document.addEventListener('keyup', function (e) {
    if (e.keyCode === 65 || e.keyCode === 87 || e.keyCode === 68 || e.keyCode === 83) {
        player.moving = false;
        player.frameCount = 0;
        player.currentFrame = 0;
    }
});


// LA LAVA
function labaMove() {
    labaWidth += labaSpeed;
    lavaColision += labaSpeed;
};

function drawLaba() {
    ctx.drawImage(labaImg, labaWidth, 0, canvas.width, canvas.height);
}
function checkCollisionLaba(playerX, playerY, playerWidth, playerHeight) {
    if (playerX < lavaColision) {
        location.reload();
        return (playerX < lavaColision)
    }
}

//NO TOCAR,parece irrelevante, pero se rompe el juego sino
function checkCollisions(player) {
    // Verificar colisión con los márgenes del canvas
    checkCollisionLaba(player.x, player.y, player.width, player.height);
}

// REPETIDOR
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height)
    player.draw();
    player.move();
    drawLaba();

    checkCollisions(player);
    requestAnimationFrame(update);
}

update();
setInterval(labaMove, 1000);
//findemimierda
