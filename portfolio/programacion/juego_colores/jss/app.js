let palabrascolores = ["Red", "Blue", "Green"];
let arrayDesordenado = palabrascolores.sort(() => Math.random() - 0.5);



for (let i = 0; i < palabrascolores.length; i++) {
    document.getElementById("casa" + i).style.backgroundColor = arrayDesordenado[i];
}

for (c of palabrascolores) {
    // Generar botones a partir del array
    document.getElementById("camisa").innerHTML += "<button id=" + c + ">" + c + "</button>";
}

for (c of palabrascolores) {
    // Enchufar los botones a la lógica del juego
    document.getElementById(c).onclick = (function (i) { return s; })(c);
}



let arrayescondida = [ ]

function s(event) {
    let radiobutton
    let colorradio
    if (document.getElementById('radio0').checked) {
        radiobutton = document.getElementById("casa0")
        colorradio = radiobutton.style.backgroundColor
    }
    if (document.getElementById('radio1').checked) {
        radiobutton = document.getElementById("casa1")
        colorradio = radiobutton.style.backgroundColor
    }
    if (document.getElementById('radio2').checked) {
        radiobutton = document.getElementById("casa2")
        colorradio = radiobutton.style.backgroundColor
    }

    // event.target es el botón desde el que nos han llamado. Su id es el nombre del color
    let buttoncolor = event.target.id
    if (buttoncolor == colorradio) {
        // Esconder color y botón emparejados
        radiobutton.style.display = "none"
        event.target.style.display = "none"
arrayescondida.push (radiobutton)
arrayescondida.push (event.target)
        document.getElementById("resultado").innerHTML = "Acierto";
    } else {
        document.getElementById("resultado").innerHTML = "Fallo";
    }
}

function reseteo(){

  location.reload(true);
}
function volver(){
    window.location.href ="/Programacion.html";
}

