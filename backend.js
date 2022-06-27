var palabrasinit = ["CARTON", "LATAS", "VIDRIO", "BATERIAS", "PAPEL", "PLASTICOS", "CONTAMINAR"];
var palabras = localStorage.getItem("palabras");
palabras = JSON.parse(palabras);

var letras =[];
var palabraCorrecta = "";
var errores = 8;
var aciertos = 0;

console.log(palabras)

if(palabras ==null){palabras = palabrasinit}

function escogerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
    return palabraSecreta
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