var horca = document.querySelector("#horca");
var tablero = horca.getContext("2d");

function dibujarLineas(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()

    var ancho = 650/palabraSecreta.length
    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(280+(ancho*i), 440)
        tablero.lineTo(330+(ancho*i), 440)
    }
    tablero.stroke()
    tablero.closePath()
}dibujarLineas(escogerPalabraSecreta())

function escribirLetraCorrecta(index){
    tablero.font = "bold 52px Raleway";
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"

    var ancho = 650/palabraSecreta.length
    tablero.fillText(palabraSecreta[index], 290+(ancho*index), 420)
}

function escribirLetraIncorrecta(letra, errosLeft){
    tablero.font = "bold 40px Raleway";
    tablero.lineWidth = 8
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"

    tablero.fillText(letra, 330+(40*(10-errosLeft)), 510,40); 
}

function dibujarHorca(){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "gray";
    pincel.fillRect(390,50,15,280);
    pincel.fillRect(330,330,150,15);
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillRect(390,50,250,15);
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillRect(640,50,15,50);
}

function dibujarCabeza(){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "gray";
    pincel.beginPath();
    pincel.arc(645, 125, 40, 0, 2 * 3.14);
    pincel.fill();
}

function dibujarTorso(){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "gray";
    pincel.fillRect(640,150,15,100);
}

function dibujarIzq(){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "gray";
    pincel.fillRect(640,180,60,15);
}

function dibujarDer(){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "gray";
    pincel.fillRect(585,180,60,15);
}

function dibujarPiernaIzq(){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "gray";
    pincel.fillRect(655, 240, 15, 60)
}

function dibujarFinal(){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "gray";
    pincel.fillRect(625, 240, 15, 60);
    pincel.fillStyle = "black";
    pincel.fillRect(615, 110, 20, 5);
    pincel.fillStyle = "black";
    pincel.fillRect(655, 110, 20, 5);
    pincel.fillStyle = "black";
    pincel.fillRect(622, 104, 5, 20);
    pincel.fillStyle = "black";
    pincel.fillRect(662, 104, 5, 20);
}

function dibujarCanvas(){
    switch (errores) {
        case 1:
            dibujarFinal()
            break;
        case 2:
            dibujarPiernaIzq()
            break;
        case 3:
            dibujarDer()
            break;
        case 4:
            dibujarIzq()
            break;
        case 5:
            dibujarTorso()
            break;
        case 6:
            dibujarCabeza()
            break;
        case 7:
            dibujarHorca()
            break;
    }
}

function dibujarCanvasTotal(){
    dibujarPiernaIzq();
    dibujarDer();
    dibujarIzq();
    dibujarTorso();
    dibujarCabeza();
    dibujarHorca();
    dibujarFinal();
}

function alerta(){
    alert("PERDEDOR!")
}

function reload(){
    location.reload();
}

const btn = document.getElementById("nuevoJuego");
btn.addEventListener("click", (event)=>{
    location.reload();
});

var butn = document.getElementById("rendirse");
butn.addEventListener("click", (event) =>{
    dibujarCanvasTotal()
    alerta()
})
