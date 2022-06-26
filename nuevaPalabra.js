function agregarPalabra(){
    var palabraEscrita = document.getElementById("input1").value;
    var nuevaPalabra = palabraEscrita.toUpperCase();
    palabras.push(nuevaPalabra);

    var value = "";

    for (let i = 0; i < palabras.length; i++) {
        value = value + palabras[i];
    }
    console.log(palabras);
}

localStorage.setItem( "Palabras", JSON.stringify(palabras));
