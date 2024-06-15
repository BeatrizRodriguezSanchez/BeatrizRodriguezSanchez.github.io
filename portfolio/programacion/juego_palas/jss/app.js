let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let anchoCanvas = canvas.width
let altoCanvas = canvas.height
let x = 100
let y = 100
let speedx = numeroAleatorioEntreDosNumeros(3, 4)
let speedy = numeroAleatorioEntreDosNumeros(3, 4)
console.log(speedx, speedy)


let player1 = {
    x: 50,
    y: altoCanvas / 3,
    ancho: 10,
    alto: 100,
    color: "Blue",
    contador: 0
}

let player2 = {
    x: 240,
    y: altoCanvas / 3,
    ancho: 10,
    alto: 100,
    color: "Red",
    contador: 0
}
//bola
function draw() {
    ctx.clearRect(0, 0, anchoCanvas, altoCanvas)
    ctx.fillStyle = "red"
    ctx.fillRect(x, y, 10, 10)

    ctx.fillStyle = player1.color
    ctx.fillRect(player1.x, player1.y, player1.ancho, player1.alto)
    ctx.fillStyle = player2.color
    ctx.fillRect(player2.x, player2.y, player2.ancho, player2.alto)
}

function numeroAleatorioEntreDosNumeros(min, max) {
    let a = 0;
    a = Math.round(Math.random() * (max - min) + min);
    return a
}


function colisiones() {
    x += speedx
    y += speedy

    //muerte bola paredes
    if (x > anchoCanvas - 10) {
        x = anchoCanvas / 2
        y = altoCanvas / 2
        player1.contador++
        document.getElementById("a").innerHTML = player1.contador
        speedx = numeroAleatorioEntreDosNumeros(3, 4)
        speedy = numeroAleatorioEntreDosNumeros(3, 4)
        let salidaleatoria = Math.random(0, 1)
        if (salidaleatoria < 0.5) {
            speedx = -speedx
            speedy = -speedy

        }
    }
    else if (x <= 0) {
        x = anchoCanvas / 2
        y = altoCanvas / 2
        player2.contador++
        document.getElementById("a2").innerHTML = player2.contador
        speedx = numeroAleatorioEntreDosNumeros(3, 4)
        speedy = numeroAleatorioEntreDosNumeros(3, 4)
        let salidaleatoria = Math.random(0, 1)
        if (salidaleatoria < 0.5) {
            speedx = -speedx
            speedy = -speedy
        }
    }
    //que no se salga la bola
    if (y > altoCanvas - 10) {
        speedy = -speedy
    }
    else if (y < 0) {
        speedy = -speedy
    }

    // colision palas
    if (x > player1.x && x < player1.x + player1.ancho
        && y > player1.y && y + 10 < player1.y + player1.alto) {
        speedx = -speedx
    }
    if (x + player2.ancho > player2.x && x < player2.x + player2.ancho
        && y > player2.y && y < player2.y + player2.alto) {
        speedx = -speedx
    }

}


//player input
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') { // up arrow
        player2.y -= 20
    }
    else if (e.keyCode == '40') { // down arrow
        player2.y += 20
    }
    if (e.keyCode == '87') { // up w
        player1.y -= 20
    }
    else if (e.keyCode == '83') { // down s
        player1.y += 20
    }
    /*     else if (e.keyCode == '37') { // left arrow
        } */
    /*     else if (e.keyCode == '39') { // right arrow
        } */
    if (player1.y < 0) {
        player1.y = 0
    }
    else if (player1.y > altoCanvas - player1.alto) {
        player1.y = altoCanvas - player1.alto
    }
    if (player2.y < 0) {
        player2.y = 0
    }
    else if (player2.y > altoCanvas - player2.alto) {
        player2.y = altoCanvas - player2.alto
    }
}



function volver(){
    window.location.href ="/Programacion.html";
}


function update() {
    draw();
    colisiones();


}
setInterval(update, 30)