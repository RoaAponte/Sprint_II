var palabras = ["CARTON", "LATAS", "VIDRIO", "BATERIAS", "PAPEL", "PLASTICOS", "CONTAMINAR"];
var tablero = document.getElementById("horca").getContext("2d");
var letras =[];
var palabraCorrecta = "";
var errores = 8;
var aciertos = 0;

console.log(palabras)

function escogerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
    return palabraSecreta
}

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

function verificarLetraElegida(key){
    if(letras.length < 1 || letras.indexOf(key)<0)
    {
        letras.push(key)
        return false
    }else{
        letras.push(key)
        return true
    }
}

function agregarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase()
    console.log(aciertos)
}

function agregarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<=0){
        errores -= 1
    }
}

function derrota(errores){
    if (errores == 1) {
        alert("PERDISTE")
        location.reload()
    }
}

function victoria(aciertos){
    if(aciertos == palabraSecreta.length){
        alert("YA TENEMOS GANADOR")
        location.reload()
    }
}

document.onkeydown = (e) => {
    let letra = e.key.toUpperCase()
    if(!verificarLetraElegida(e.key)){
        if(palabraSecreta.includes(letra)){
            agregarLetraCorrecta(palabraSecreta.indexOf(letra))
            for (let i=0; i<palabraSecreta.length; i++){
                if(palabraSecreta[i]==letra){
                    aciertos++
                    escribirLetraCorrecta(i);
                    victoria(aciertos)
                }
            }
        }else{
            if(!verificarLetraElegida(e.key)) return
            agregarLetraIncorrecta(letra)
            dibujarCanvas(errores)
            escribirLetraIncorrecta(letra, errores)
            derrota(errores)
        }
    }
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
