function init() {
 document.getElementById('btncomentar').onclick = function () {
 crear_comentario();
 limpiar();
 contar_comentarios();
 }
}
function limpiar() {
 document.getElementById("textnombre").value="";
 document.getElementById("selectbasic").value="";
 document.getElementById("textcontenido").value="";
}
function crear_comentario() {//inicio
 var contenedor = document.getElementById("Comentarios");
 var nombre = document.getElementById("textnombre").value;
 var tipo = document.getElementById("selectbasic").value;
 var mensaje = document.getElementById("textcontenido").value;
 var f = new Date();
 var indice = document.getElementById("selectbasic").selectedIndex;

if (indice == 0 || indice == 0) {
	alert("no ha seleccionado un tipo de comentario")
	var alerta = document.getElementById("hola2");
	alerta.innerHTML = "Seleccione una Opcion";
	alerta.style.color = "red";

}else if (validar_mensaje(mensaje) && (validar_nombre(nombre))){


var fecha=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
 var comentario = document.createElement("div");
 comentario.setAttribute("id","datos");
 var caja = document.createElement("div");
 caja.setAttribute("id", "texto");
 var panel = document.createElement("div");
 panel.setAttribute("id","panel5");
 var contenidopanel = document.createTextNode(nombre);
 var fnegrita = document.createElement("div");
 fnegrita.setAttribute("style","float: right;");
 var verfecha = document.createTextNode(fecha);
 fnegrita.appendChild(verfecha);
 var ftipo = document.createElement("div");
 ftipo.setAttribute("style","float: inline-block; text-align:center;margin:-20px auto;");
 var vertipo = document.createTextNode(tipo);
 ftipo.appendChild(vertipo);
 var vercomentario = document.createTextNode(mensaje);
 caja.appendChild(vercomentario);


 panel.appendChild(contenidopanel);
 panel.appendChild(fnegrita);
 panel.appendChild(ftipo);
 comentario.appendChild(panel);
  comentario.appendChild(caja);

//Ejercicio 1
//Ejercicio 2
document.getElementById("Comentarios").appendChild(comentario);
}else {
	alert("Aun no joven");
}

}//final

function validar_nombre(campo) {
	var expresion = new RegExp("^[a-zA-ZÑñ ]*$","g");
	return expresion.test(campo);
}

function validar_mensaje(campo) {
	var expresion = new RegExp("[^]", "g");
	return expresion.test(campo);
}
window.onload = init;


