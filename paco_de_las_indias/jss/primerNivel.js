// DECLARACIONES
let labaWidth = -1280;
let lavaColision =20;
let labaSpeed = 20;

// CREAR EL CANVAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 720;

// CARGAR IMAGENES ASSETS
const bgImg = new Image();
bgImg.onload = function () {
};
bgImg.src = "photos/nivel1.jpg"; // URL del Background--------------

const playerDownImg = new Image();
playerDownImg.onload = function () {
    player.width += playerLeftImg.width / 4;
    player.height += playerLeftImg.height;
};
playerDownImg.src = "assets/playerDown.png";

const labaImg = new Image();
labaImg.src = "assets/laba.png";
labaImg.onload = function () {
};

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


// Detecta colisiones camino. Se llama mas abajo
function colisionCamino(arriba, abajo, newY) {
    if (newY + 50 < arriba) {
        return true
    }
    else if (newY + 68 > abajo) {
        return true
    }
    return false
}

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
            //COLISIONES CAMINO COMO TAL
            if (!colisionCamino(720 / 3, (720 / 3) * 2, newY)) {
                this.y = newY;
            }

            if (newX + this.width >= canvas.width) {
                //COLISION CAMBIO DE NIVEL,ES UN RELOAD EN EL ¨segundoNivel.html¨
                window.location.replace('segundoNivel.html')
            }
            //MOVER DERECHA
            else {
                this.x= newX
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
    lavaColision+=labaSpeed;
    
};

function drawLaba() {
    ctx.drawImage(labaImg, labaWidth, 0, canvas.width, canvas.height);

/*     ctx.drawImage(labaImg, labaEncrease, 0, 1280, canvas.height, 0, 0, labaWidth, canvas.height); */
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
