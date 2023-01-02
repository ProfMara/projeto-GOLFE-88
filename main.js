
// Crie uma variável canvas
var canvas = new fabric.Canvas("myCanvas");

//Defina as posições iniciais da bola e do buraco.
bolaY=0;
bolaX=0;
buracoY=400;
buracoX=800;
largura = 5;
altura = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		buraco = Img;
		buraco.scaleToWidth(50);
		buraco.scaleToHeight(50);
		buraco.set({
			top:buracoY,
			left:buracoX
		});
		canvas.add(buraco);
	});
	novaImagem();
}

function novaImagem(){
	fabric.Image.fromURL("ball.png", function(Img) {
		bola = Img;
		bola.scaleToWidth(50);
		bola.scaleToHeight(50);
		bola.set({
			top:bolaY,
			left:bolaX
		});
		canvas.add(bola);
	});
}

window.addEventListener("keydown", aperteiTecla);

function aperteiTecla(e){
	tecla = e.keyCode;
	console.log(tecla);

	//escreva aqui esse código para verificar se a bola está no buraco
	if(condição){
		//adicione os códigos para remover a bola e mostrar a mensagem

		
	}

	else{
		//adicione para mover a bola quando o jogador apertar para cima

		//adicione para mover a bola quando o jogador apertar para baixo		

		//adicione para mover a bola quando o jogador apertar para esquerda

		//adicione para mover a bola quando o jogador apertar para direita		

	}
}	
//adicione aqui as funções cima, esquerda, direita e baixo


