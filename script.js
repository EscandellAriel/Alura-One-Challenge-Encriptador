function encriptar(){
    let cadena = document.getElementById("area_texto").value.toLowerCase();
    var nueva_cadena = cadena.replace(/i/img, "imes");
    var nueva_cadena = nueva_cadena.replace(/e/img, "enter");
    var nueva_cadena = nueva_cadena.replace(/a/img, "ai");
    var nueva_cadena = nueva_cadena.replace(/o/img, "ober");
    var nueva_cadena = nueva_cadena.replace(/u/img, "ufat");
    let param = nueva_cadena;
    cambiar(param);
}

function desencriptar(){
    let cadena = document.getElementById("area_texto").value.toLowerCase();
    var nueva_cadena = cadena.replace(/ai/img, "a");
    var nueva_cadena = nueva_cadena.replace(/enter/img, "e");
    var nueva_cadena = nueva_cadena.replace(/imes/img, "i");
    var nueva_cadena = nueva_cadena.replace(/ober/img, "o");
    var nueva_cadena = nueva_cadena.replace(/ufat/img, "u");
    let param2 = nueva_cadena;
    cambiar(param2);
}

function cambiar(cadena){

    panel = document.querySelector(".panel");
    panel.style.display = "none";
    img = document.querySelector(".figura");
    img.style.display = "none";
    bloque = document.querySelector(".oculto");
    bloque.style.display = "inline";
    texto = document.querySelector(".texto_oculto");
    texto.value = cadena;

}
function copiar() {
    
    let texto = document.querySelector(".texto_oculto")
    navigator.clipboard.writeText(texto.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

/*function copiar(){
    navigator.permissions.query({name: "clipboard-write"}).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
    let texto = document.querySelector(".texto_oculto").value;
    updateClipboard(texto);}
});
}

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(() => {
    }, () => {
    });
}
*/

let btnE = document.getElementById('botonEncriptar');
let btnD = document.querySelector('.botones #botonDesencriptar');
btnE.addEventListener('click', event => {encriptar();});
btnD.addEventListener('click', event => {desencriptar();});

let btnCopiar = document.getElementById('boton_oculto');
btnCopiar.addEventListener('click', event => {copiar();});
