function botonEncriptar(){
const encriptar = document.getElementById('entrada_texto').value; //recibe los valores desde el cuadro de texto y activa el boton
const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
document.getElementById("salida_texto").value = encriptado //devuelve el valor ya tratado
document.getElementById("entrada_texto").value=" "; //vacia el cuadro de texto
}
//Funcion para desencriptar
function botonDesencriptar(){
const desencriptar= document.getElementById ("entrada_texto").value; //recibe los valores desde el cuadro de texto y activa el boton
const desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
document.getElementById("salida_texto").value = desencriptado //devuelve el valor ya tratado
document.getElementById("entrada_texto").value=" "; //vacia el cuadro donde se recibieron los datos
}
//Funcion para copiar
function botonCopiar(){
const copyText = document.getElementById("salida_texto"); //recibe el click del boton
copyText.select(); 
document.execCommand("Copy"); //copia el texto
document.getElementById("salida_texto").value=" "; //vacia el cuadro de texto
}