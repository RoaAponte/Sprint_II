function agregarPalabra(){
    var palabraEscrita = document.getElementById("input1").value;
    var nuevaPalabra = palabraEscrita.toUpperCase();
    palabras.push(nuevaPalabra);

    var value = "";

    for (let i = 0; i < palabras.length; i++) {
        value = value + palabras[i];
    }
    localStorage.setItem( "Palabras", JSON.stringify(palabras));
    console.log(palabras);
}
