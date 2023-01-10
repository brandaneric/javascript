class celular {

	//Definicion del constructor de la clase celular
	constructor (color,peso,tamaño,rdc,ram){
		this.color = color ;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.memoriaRam = ram;
		this.encendido = false;

	}

	presionarBotonEncendido () {
		if (this.encendido == false){
			alert("Celular prendido");
			this.encendido == true; 
		} else {
			alert("Celular apagado");
			this.encendido == false; 
		}
	}

	reiniciar () {
		if (this.encendido == true){
			alert("reiniciando celular");
		} else {
			alert ("el celular esta apagado");
		}
	}

	tomarFoto () {
		alert (`Foto tomada en una resulucion de : ${this.resolucionDeCamara}`);
	}

	grabarVideo () {
		alert (`Grabando video en ${this.resolucionDeCamara}`);
	}

	//Metodo de la clase
	mobileInfo (){
		return ` 
		Color : <b>${this.color}</b><br>
		Peso : <b>${this.peso}</b><br>
		Tamaño : <b>${this.tamaño}</b><br>
		Resolucion de Video : <b>${this.resolucionDecamara}</b><br>
		Memoria Ram : <b>${this.memoriaRam}</b><br>
		`;
	}


}




//Instanciacion de la clase Celular
celular1 = new celular("rojo","150g","5","hd","1GB");
celular2 = new celular("negro","155g","5.4","full hd","2GB");
celular3 = new celular("blanco","15046g",".9","full hd","2GB");

//Prueba de los metodos 
//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();


//Escribimos sobre nuestro index.html
document.write (`
	${celular1.mobileInfo()} <br>
	${celular2.mobileInfo()} <br>
	${celular2.mobileInfo()} <br>
	`)

