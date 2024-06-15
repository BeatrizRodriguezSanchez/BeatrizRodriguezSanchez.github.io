//Base
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let altoCanvas = canvas.height;
let anchoCanvas = canvas.width;
let pantallacarga = true;
let escenario = 0;
let madremuerta = 0;
let finalmalo = 0;
let finalbueno = 0;


let anchopantalla = canvas.width * 0.9
let largopantalla = canvas.height * 0.6
let xpantalla = canvas.width / 2 - anchopantalla / 2
let ypantalla = canvas.height / 2 - largopantalla / 2

let xdialogo = 0
let ydialogo = canvas.height / 3 * 2
let anchodialogo = canvas.width
let largodialogo = canvas.height - ydialogo - 3
let descripcion = ""
let sabernpc= ""
let fondoentidades=""
let fondoprop=""

//Definir imágenes
let titulo = new Image();

titulo.src = 'Fondos/Prueba.png'

let fondo0 = new Image();

fondo0.src = 'Fondos/plaza.png'

let fondo1 = new Image();

fondo1.src = 'Fondos/SegundoFondo.png'

let fondo2 = new Image();

fondo2.src = 'Fondos/TercerFondo.png'

let fondo3 = new Image();

fondo3.src = 'Fondos/calle.jpg'

let fondo4 = new Image();

fondo4.src = 'Fondos/metro.png'

let fondo5 = new Image();

fondo5.src = 'Fondos/Metro2.png'

let fondo20 = new Image();

fondo20.src = 'Fondos/Door.png'

let fondo21 = new Image();

fondo21.src = 'Fondos/Door2.png'

let fondo30 = new Image();

fondo30.src = 'Fondos/callejon.jpg'

let fondo40 = new Image();

fondo40.src = 'Fondos/Salon.png'

let fondo41 = new Image();

fondo41.src = 'Fondos/CuatrigesimoPrimerFondo.jpg'

let fondo50 = new Image();

fondo50.src = 'Fondos/policia_alemana.png'

let fondoFinalMalo = new Image();

fondoFinalMalo.src = 'Fondos/outro.png'

let fondoFinalBueno = new Image();

fondoFinalBueno.src = 'Fondos/Victory.png'


//Inicio

window.onload = function() {
    requestAnimationFrame(carga);
    pantallacarga++;
}



// Pantalla de carga.

function carga(){
    ctx.clearRect(0,0,anchoCanvas,altoCanvas);
    ctx.drawImage(titulo, 0, 0);
}

//cambiar aquí el tamaño del menú que salta

//meter todos los props necesarios aqui abajo, para cada objeto se necesita un sprite y una ruta
//en el sprite no se escribe nada y en la ruta se pega; la ruta de la carpeta con el sprite
//npcs no necesitan descripcion , {meter las descripciones dentro de su tipo y ya está
//props...............


function dibujarEscenario(){
    if(dialogoAbierto || ventanAbierta){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondoentidades, 0, 0);
    }
    else {
        if (escenario == 0){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondo0, 0, 0);
        }
        else if (escenario == 1){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondo1, 0, 0);
        }
        else if (escenario == 2){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondo2, 0, 0);
        }
        else if (escenario == 3){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondo3, 0, 0);
        }
        else if (escenario == 4){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondo4, 0, 0);
        }
        else if (escenario == 5){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondo5, 0, 0);
        }
        else if (escenario == 20){
            ctx.clearRect(0,0,anchoCanvas,altoCanvas);
            ctx.drawImage(fondo20, 0, 0);
        }
        else if (escenario == 21){
            ctx.clearRect(0,0,anchoCanvas,altoCanvas);
            ctx.drawImage(fondo21, 0, 0);
        }
        else if (escenario == 30){
            ctx.clearRect(0,0,anchoCanvas,altoCanvas);
            ctx.drawImage(fondo30, 0, 0);
        }
        else if (escenario == 40){
            ctx.clearRect(0,0,anchoCanvas,altoCanvas);
            ctx.drawImage(fondo40, 0, 0);
        }
        else if (escenario == 41){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondo41, 0, 0);
        }
        else if (escenario == 50){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondo50, 0, 0);
        }
    }
}

let periodico = {
    ancho: 30,
    largo: 30,
    x: 740,
    y: 390,
	escenario: 1,
    sprite: "",
    ruta: "photos/point.png",
    tipo: "prop",
    descripcion: "1 de septiembre de 1941.       Dos años de dura guerra.",
    fondo:"photos/periodico.png"
}

let lata = {
    ancho: 35,
    largo: 35,
    x: 330,
    y: 490,
	escenario: 40,
    sprite: "",
    ruta: "photos/point.png",
    tipo: "prop",
    descripcion: "22 de junio de 1941.            Inica la operación Barbarroja",
    fondo:"photos/periodico.png"
}




//npcs.............................................
let madre = {
    ancho: 80,
    largo: 80,
    x: 600,
    y: 460,
		escenario: 20,
    sprite: "",
    ruta: "photos/point.png",
    tipo: "npc",
    ultimafrase:0,
    fondo:"Fondos/Door.png"
}

let madreM = {
    ancho: 80,
    largo: 80,
    x: 600,
    y: 460,
		escenario: 21,
    sprite: "",
    ruta: "photos/point.png",
    tipo: "npc",
    ultimafrase:0,
    fondo:"Fondos/Door2.png"
}

let metrvalencia = {
    ancho: 40,
    largo: 40,
    x: 650,
    y: 360,
		escenario: 5,
    sprite: "",
    ruta: "photos/point.png",
    tipo: "npc",
    ultimafrase:0,
    fondo:"Fondos/Final.png"
}


let soldado= {
    ancho: 40,
    largo: 40,
    x: 755,
    y: 500,
		escenario: 0,
    sprite: "",
    ruta: "photos/point.png",
    tipo: "npc",
    ultimafrase:0,
    fondo:"Fondos/Soldado.png"
}

let soldier= {
    ancho: 40,
    largo: 40,
    x: 325,
    y: 240,
		escenario: 30,
    sprite: "",
    ruta: "photos/point.png",
    tipo: "npc",
    ultimafrase:0,
    fondo:"Fondos/puerta.jpg"
}

let policias= {
    ancho: 40,
    largo: 40,
    x: 850,
    y: 420,
		escenario: 50,
    sprite: "",
    ruta: "photos/point.png",
    tipo: "npc",
    ultimafrase:0,
    fondo:"Fondos/policias.png"
}

let ninio= {
    ancho: 30,
    largo: 30,
    x: 1025,
    y: 350,
	    escenario: 41,
    sprite: "",
    ruta: "photos/point.png",
    tipo: "npc",
    ultimafrase:0,
    fondo:"Fondos/nino.jpg"
}





//flechas.............................................
let rightArrow = {
    ancho: 200,
    largo: 100,
    x: anchopantalla * 0.9,
    y: largopantalla + 170,
    sprite: "",
    ruta: "photos/right-arrow.png",
    tipo: "arrow",
}

let rightArrow2 = {
    ancho: 200,
    largo: 100,
    x: anchopantalla * 0.9,
    y: largopantalla - 70,
    sprite: "",
    ruta: "photos/right-arrow.png",
    tipo: "arrow",
}

let rightArrow3 = {
    ancho: 200,
    largo: 100,
    x: anchopantalla * 0.7,
    y: largopantalla - 0,
    sprite: "",
    ruta: "photos/right-arrow.png",
    tipo: "arrow",
}
let rightArrow4 = {
    ancho: 200,
    largo: 100,
    x: anchopantalla - 100,
    y: largopantalla + 40,
    sprite: "",
    ruta: "photos/right-arrow.png",
    tipo: "arrow",
}

let leftArrow = {
    ancho: 200,
    largo: 100,
    x: anchopantalla * 0.05,
    y: largopantalla,
    sprite: "",
    ruta: "photos/return-arrow.png",
    tipo: "arrow",
}
let leftArrow2 = {
    ancho: 200,
    largo: 100,
    x: anchopantalla * 0.4,
    y: largopantalla * 0.5,
    sprite: "",
    ruta: "photos/return-arrow.png",
    tipo: "arrow",
}

let upArrow = {
    ancho: 200,
    largo: 100,
    x: 750,
    y: largopantalla - 270,
    sprite: "",
    ruta: "photos/up-arrow.png",
    tipo: "arrow",
}

let upArrow2 = {
    ancho: 200,
    largo: 100,
    x: 200,
    y: largopantalla,
    sprite: "",
    ruta: "photos/up-arrow.png",
    tipo: "arrow",
}

let upArrow3 = {
    ancho: 200,
    largo: 100,
    x: 650,
    y: 90,
    sprite: "",
    ruta: "photos/up-arrow.png",
    tipo: "arrow",
}

let puertaArrow = {
    ancho: 200,
    largo: 100,
    x: 300,
    y: largopantalla + 30,
    sprite: "",
    ruta: "photos/puerta-arrow.png",
    tipo: "arrow",
}

let returnArrow = {
    ancho: 200,
    largo: 150,
    x: anchoCanvas * 0.01,
    y: altoCanvas -150,
    sprite: "",
    ruta: "photos/left-arrow.png",
    tipo: "arrow",
}

let entidades = [periodico, lata, madre, soldado, soldier, madreM, metrvalencia, policias, ninio]

for (objeto of entidades) {
    objeto.sprite = new Image();
    objeto.sprite.onload = function () {
    };
    objeto.sprite.src = objeto.ruta;
}

returnArrow.sprite = new Image();
returnArrow.sprite.src = returnArrow.ruta;

puertaArrow.sprite = new Image();
puertaArrow.sprite.src = puertaArrow.ruta;

rightArrow.sprite = new Image();
rightArrow.sprite.src = rightArrow.ruta;

upArrow.sprite = new Image();
upArrow.sprite.src = upArrow.ruta;

leftArrow.sprite = new Image();
leftArrow.sprite.src = leftArrow.ruta;


//..................................................

let ventanAbierta = false
let dialogoAbierto = false

function position(event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.x;
    let y = event.clientY - rect.y;
    if(pantallacarga){
        pantallacarga = false
        return
    }
    //esto es para que si la ventana está abierta (con su texto etc) no reabra, es decir se solapen muchos menus
    if (!ventanAbierta && !dialogoAbierto) {
				if (x > rightArrow.x && x < rightArrow.x + rightArrow.ancho && y > rightArrow.y && y < rightArrow.y + rightArrow.largo && escenario <1 || x > rightArrow4.x && x < rightArrow4.x + rightArrow4.ancho && y > rightArrow4.y && y < rightArrow4.y + rightArrow4.largo && escenario ==40 
                 || x > leftArrow.x && x < leftArrow.x + leftArrow.ancho && y > leftArrow.y && y < leftArrow.y + leftArrow.largo && escenario ==2 || x > leftArrow2.x && x < leftArrow2.x + leftArrow2.ancho && y > leftArrow2.y && y < leftArrow2.y + leftArrow2.largo && escenario ==3 ||
                 x > upArrow2.x && x < upArrow2.x + upArrow2.ancho && y > upArrow2.y && y < upArrow2.y + upArrow2.largo && escenario ==4) {
						escenario++
						return
                } else if (x > rightArrow2.x && x < rightArrow2.x + rightArrow2.ancho && y > rightArrow2.y && y < rightArrow2.y + rightArrow2.largo && escenario ==1) {
						escenario=30
                        console.log(escenario);
						return
                } else if (x > rightArrow3.x && x < rightArrow3.x + rightArrow3.ancho && y > rightArrow3.y && y < rightArrow3.y + rightArrow3.largo && escenario ==2) {
						escenario=40
                        console.log(escenario);
						return
				} else if (x > returnArrow.x && x < returnArrow.x + returnArrow.ancho && y > returnArrow.y && y < returnArrow.y + returnArrow.largo && escenario >0) {
                    if (escenario ==20)
                        escenario -= 20
                    else if (escenario == 21)
                        escenario -= 21
                    else if (escenario ==30)
                        escenario -= 29
                    else if (escenario ==40)
                        escenario -= 38
                    else if (escenario ==50)
                        escenario -= 46
                    else
						escenario--
                        console.log(escenario)
						return
				} else if (x > puertaArrow.x && x < puertaArrow.x + puertaArrow.ancho && y > puertaArrow.y && y < puertaArrow.y + puertaArrow.largo && escenario ==0) {
                        if (madremuerta == 1)
                        escenario = 21
                        else if (madremuerta == 0)
						escenario = 20
                        console.log(escenario);
						return
				} else if (x > upArrow.x && x < upArrow.x + upArrow.ancho && y > upArrow.y && y < upArrow.y + upArrow.largo && escenario ==1){
						escenario++
                        console.log(escenario);
						return
                } else if (x > upArrow3.x && x < upArrow3.x + upArrow3.ancho && y > upArrow3.y && y < upArrow3.y + upArrow3.largo && escenario ==4) {
                    escenario=50
		    }
				
        for (let objeto of entidades) {
            if (objeto.escenario == escenario && x > objeto.x && x < objeto.x + objeto.ancho && y > objeto.y && y < objeto.y + objeto.largo) {
                //este if sirve para que salte la pantalla de dialogo si la condicion del objeto (el "tipo") es npc
                if (objeto.tipo == "npc") {
									fondoentidades=new Image()
                                    fondoentidades.src = objeto.fondo
                    dialogoAbierto = true
                    ventanAbierta = false
                    dialogo=objeto.ultimafrase
                    sabernpc=objeto
                    
										dialogos()
                    return
                }
                //este if sirve para que salte la pantalla de menu si la condicion del objeto (el "tipo") es prop
                else if (objeto.tipo == "prop") {
                    fondoentidades=new Image()
                                    fondoentidades.src = objeto.fondo
                    ventanAbierta = true
                    dialogoAbierto = false
                    descripcion = objeto.descripcion
                    return
                }
            }
        }
    }
    else if (ventanAbierta) {
        if (x < xpantalla || x > xpantalla + anchopantalla || y < ypantalla || y > ypantalla + largopantalla) {
            //esta linea es para salir la pantalla del menú clickando fuera del cuadrado de dialogo
            ventanAbierta = false
        }
    }
    else if (dialogoAbierto) {
        //pasar dialogos clickando
				if (!switcher)
						dialogos()
				else if (switcher && x > opt1x && x < opt1x + anchoOpt1 && y > opty && y < opty + altoOpt) // option 1
						dialogos(0)
				else if (switcher && x > opt2x && x < opt2x + anchoOpt2 && y > opty && y < opty + altoOpt) // option 1
						dialogos(1)
    }
}


//...................texto dialogos......................

let dialogo = 0;
let switcher = false;
let txt = ""
let opcion1 = ""
let opcion2 = ""

function dialogos(opt) {
    console.log(dialogo)
		if (opt == 0)
				dialogo +=10
		if (opt == 1)
				dialogo +=20
		else
				dialogo++;
    switcher = false;
		if (sabernpc == policias)
		{
				switch (dialogo) {
        case 1:
            txt = "¡Hey! Estamos buscando supervivientes"
            break;

        case 2:
            txt = '¿Sabes el paradero de alguno?'
            break;
        case 3:
            opcion1 = "Estoy solo."
            opcion2 = "Hay una mujer en la plaza."
            switcher = true;
            break;
        case 14:
            txt = 'Con que no quieres cantar, ¿eh?.'
            break;
        case 15:
            txt = 'Te íbamos a dar una oportunidad para sobrevivir...'
            break;
        case 16:
            txt = "Ahora te toca tragar plomo."
            switcher = false;
            break;
        case 17:
            txt = "¡Hail Hitler!"
            switcher = false;
            break;
        case 18:
            txt = ""
            finalmalo=1
            switcher = false;
            break;

        case 23:
            txt = "Perfecto, mandaremos a algunos agentes a rescatarla."
            switcher = false;
            break;

        case 24:
            txt = "Te recomendamos buscar algún lugar donde resguardarte."
            madremuerta = 1;
            switcher = false;
            break;
				default:
						//si no hay dialogo se termina			
                        sabernpc.ultimafrase=dialogo-3
                        dialogo=0
                        dialogoAbierto=false;
						break;
				}
		} else if (sabernpc == soldado) {
				switch (dialogo) {
						case 1:
						txt = "No... la..."
						switcher=false
						break;
						case 1:
						txt = "No... la..."
						switcher=false
						break;
						case 2:
						txt = "delates..."
						switcher=false
						break;
						
						default:
						//si no hay dialogo se termina
						dialogo=0
                        sabernpc.ultimafrase=dialogo-2
						dialogoAbierto=false;
						break;
				} 
		} else if (sabernpc == soldier) {
				switch (dialogo) {
						case 1:
						txt = "No te he visto antes, ¡identifícate!"
						switcher=false
						break;
                        case 2:
                            opcion1 = "No soy de aquí."
                            opcion2 = "Busco refugio."
                            switcher = true;
                            break;
                        case 12:
                            txt = "Mmm..."
                            switcher=false
                        break;
                        case 13:
                            txt = "Sigue hacia delante y busca una parada de metro."
                            switcher=false
                        break;
                        case 14:
                            txt = "Ya lo que ocurra allí es cosa tuya."
                            switcher=false
                        break;
                        case 22:
                            txt = "Hay una plaza llena de policias por los alrededores."
                            switcher=false
                        break;
                        case 23:
                            txt = "Píedeles ayuda a ellos."
                            switcher=false
                        break;
						
						default:
						//si no hay dialogo se termina
                        sabernpc.ultimafrase=dialogo-2
						dialogo=0
						dialogoAbierto=false;
						break;
				} 
		} else if (sabernpc == metrvalencia) {
				switch (dialogo) {
						case 1:
						txt = "Otro refugiado más."
						switcher=false
						break;
                        case 2:
                            txt = '¿Estás herido, necesitas algo?.'
                        break;
                        case 3:
                            txt = 'Entra, aquí estarás a salvo.'
                        break;
                        case 4:
                            txt = 'Entra, aquí estarás a salvo.'
                        break;
						case 5:
                        txt = ""
                        finalbueno=1
                        switcher = false;
                        break;
						default:
						//si no hay dialogo se termina
						dialogo=0
						dialogoAbierto=false;
						break;
				} 
		} else if (sabernpc == madreM) {
				switch (dialogo) {
						case 1:
						txt = "..."
						switcher=false
						break;
                        case 2:
                            txt = 'Nadie contesta.'
                        break;
						
						default:
						//si no hay dialogo se termina
						dialogo=0
						dialogoAbierto=false;
						break;
				} 
		} else if (sabernpc == madre) {
            switch (dialogo) {
                case 1:
                    txt = "wer bist du?"
                    break;
        
                case 2:
                    txt = '...'
                    break;
                case 3:
                    txt = 'Oh, no eres uno de ellos.'
                    break;
                case 4:
                    txt = 'Huye antes de que te encuentren.'
                    break;
                case 5:
                    txt = 'Busca un refugio.'
                    break;
                        default:
                                //si no hay dialogo se termina
                                dialogoAbierto=false;
                                sabernpc.ultimafrase=dialogo-2
                                dialogo=0
                                break;
                        }
		} else if (sabernpc == ninio) {
				switch (dialogo) {
						case 1:
						txt = "Estoy buscando a mi perro, ¿lo has visto?"
						switcher=false
						break;
						case 2:
						txt = "Debería estar por aquí."
						switcher=false
						break;
                        case 3:
                            opcion1 = "No lo sé."
                            opcion2 = "Está muerto."
                            switcher = true;
                            break;
                        case 14:
                            txt = "Bueno, ya lo encontraré cuando me cure."
                            switcher=false
                            break;
                        case 23:
                            txt = "N-No..."
                            switcher=false
                            break;
						
						default:
						//si no hay dialogo se termina
						dialogo=0
                        sabernpc.ultimafrase=dialogo-2
						dialogoAbierto=false;
						break;
				} 
            }
    }




//esto dibuja TODOS los sprites de arriba
function dibujarEntidades() {
    for (let objeto of entidades) {
				if (objeto.escenario == escenario && dialogoAbierto == false && ventanAbierta == false)
						ctx.drawImage(objeto.sprite, objeto.x, objeto.y, objeto.ancho, objeto.largo)
    }
}

//cambiar numero de largo y ancho de nuestro menú según nuestro canvas
function dibujarPantalla() {
    if (ventanAbierta) {
/*         ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(titulo, 0, 0); */
        ctx.beginPath();
        ctx.rect(xpantalla, ypantalla, anchopantalla, largopantalla)
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.strokeRect(xpantalla, ypantalla, anchopantalla, largopantalla);
        ctx.fillStyle = "black"
        ctx.globalAlpha = 0.5
        ctx.fill()
        ctx.globalAlpha = 1
        //txt descripciones
        ctx.font = "50px serif";
        ctx.fillStyle = "white"
        ctx.fillText(descripcion, xpantalla + 10, ypantalla + 60);

    }

}

let opt1x = xdialogo + 200
let opt2x = xdialogo + anchodialogo - 580
let anchoOpt1 = 0
let anchoOpt2 = 0
let opty = ydialogo + (largodialogo/2)
let altoOpt = 60

function dibujarDialogo() {
    if (dialogoAbierto) {
        ctx.beginPath();
        ctx.rect(xdialogo + 3, ydialogo + 3, anchodialogo - 5, largodialogo)
        //fondo trasnsparente y linea
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.strokeRect(xdialogo, ydialogo, anchodialogo, largodialogo);
        ctx.fillStyle = "black"

        ctx.globalAlpha = 0.5
        ctx.fill()
        ctx.globalAlpha = 1

        // txt dialogos
        ctx.font = "50px serif";
        ctx.fillStyle = "white"
        ctx.fillText(txt, xdialogo + 10, ydialogo + 60);
				ctx.closePath();


				if (switcher)
				{
						ctx.beginPath();
						ctx.fillStyle = "pink"
						// Option 1
						let textSize1 = ctx.measureText(opcion1)
						let textSize2 = ctx.measureText(opcion2)
						anchoOpt1 = textSize1.width + 10
						anchoOpt2 = textSize2.width + 10
						
						ctx.rect(opt1x, opty, anchoOpt1, altoOpt)
						// option 2
						ctx.rect(opt2x, opty, anchoOpt2, altoOpt)
						ctx.closePath()
						ctx.fill()

						ctx.beginPath()
						ctx.fillStyle = "black"
						ctx.fillText(opcion1, opt1x + 5, opty + 45);
						ctx.fillText(opcion2, opt2x + 5, opty + 45);
						ctx.fill()
						ctx.closePath()
				}
    }
}

function dibujarFlechas() {
		if (escenario > 0  && dialogoAbierto == false && ventanAbierta == false)
		{
				ctx.drawImage(returnArrow.sprite, returnArrow.x, returnArrow.y, returnArrow.ancho, returnArrow.largo)
		}
		if (escenario == 0 && dialogoAbierto == false && ventanAbierta == false)
		{
				ctx.drawImage(rightArrow.sprite, rightArrow.x, rightArrow.y, rightArrow.ancho, rightArrow.largo)
                ctx.drawImage(puertaArrow.sprite, puertaArrow.x, puertaArrow.y, puertaArrow.ancho, puertaArrow.largo)
		}
		if (escenario == 1 && dialogoAbierto == false && ventanAbierta == false)
		{
				ctx.drawImage(rightArrow.sprite, rightArrow2.x, rightArrow2.y, rightArrow2.ancho, rightArrow2.largo)
				ctx.drawImage(upArrow.sprite, upArrow.x, upArrow.y, upArrow.ancho, upArrow.largo)
		}
		if (escenario == 2 && dialogoAbierto == false && ventanAbierta == false)
		{   
				ctx.drawImage(leftArrow.sprite, leftArrow.x, leftArrow.y, leftArrow.ancho, leftArrow.largo)
				ctx.drawImage(rightArrow.sprite, rightArrow3.x, rightArrow3.y, rightArrow3.ancho, rightArrow3.largo)
		}
		if (escenario == 3 && dialogoAbierto == false && ventanAbierta == false)
		{   
				ctx.drawImage(leftArrow.sprite, leftArrow2.x, leftArrow2.y, leftArrow2.ancho, leftArrow2.largo)
		}
		if (escenario == 4 && dialogoAbierto == false && ventanAbierta == false)
		{   
            ctx.drawImage(upArrow.sprite, upArrow3.x, upArrow3.y, upArrow3.ancho, upArrow3.largo)
            ctx.drawImage(upArrow.sprite, upArrow2.x, upArrow2.y, upArrow2.ancho, upArrow2.largo)
		}
        if (escenario == 40 && dialogoAbierto == false && ventanAbierta == false)
            {
                    ctx.drawImage(rightArrow.sprite, rightArrow4.x, rightArrow4.y, rightArrow4.ancho, rightArrow4.largo)
            }
	}

function dibujarFinal(){
    if (finalmalo==1){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondoFinalMalo, 0, 0);
    }
    if (finalbueno==1){
        ctx.clearRect(0,0,anchoCanvas,altoCanvas);
        ctx.drawImage(fondoFinalBueno, 0, 0);
    }
    else{
    }
}

function dibujarTodo() {
    if (pantallacarga){
        carga()
    }
    else{
        //esto es para limpiar el menú
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        dibujarEscenario()
        dibujarEntidades()
        dibujarPantalla()
        dibujarFlechas()
        dibujarDialogo()
        dibujarFinal()

    }
}

canvas.addEventListener("click", position, false);
setInterval(dibujarTodo, 300);