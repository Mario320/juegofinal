var x = 10, y = 300;

function carro () {

var img = document.getElementById("ima")
var canvas = document.getElementById("imagen");
var ctx=canvas.getContext("2d");
ctx.clearRect(0,0,800,460);//limpia todo el canvas

ctx.drawImage(img,x,y);//dibuja la imagen

	
}
/*
function dibujar_circle () {
	// body...

var canvas = document.getElementById("imagen");
var ctx=canvas.getContext("2d");


ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(175,205,10,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();

//2
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(370,300,10,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();

//3

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(520,225,10,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();

//4
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(700,315,10,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();



}*/

function whichButton(event){

	switch(event.keyCode) {
case 39:
x=x+5;//mueve la nave 5 pixeles a la derecha
if (x > 600) {
	x = 600;
}
carro();


break;
x=x-5;//mueve la nave 5 pixeles a la izquierda
case 37:
if (x < 10) {
	x = 10;
}

carro();

//break;
//case 38:


//y=y-5;//sube la imagen 5 pixeles

//carro();
//break;

//case 40:
//y=y+5;//baja la imagen 5 pixeles

//carro();


}
}



window.onload = carro();
