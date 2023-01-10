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

//Definimos una clase nueva que extiende de la clase celular

class CelularDeAltaGama extends celular {
	constructor (color,peso,tamaño,rdc,ram,rdce){
		//Con super heredamos las propiedades del constructor padre 
		super (color,peso,tamaño,rdc,ram);
		//Nueva propiedad que le agregamos a nuestra clase extendida
		this.resolucionDeCamaraExtra = rdce;
	} 

	// Definimos los nuevos metodos que van a pertenecer a la clase
	// CelularDeAltaGama pero no a la clase padre

	grabarVideoLento () {
		alert ("Estas grabando en camara lenta");
	}

	reconocimientoFacial () {
		alert ("Vamos a reiniciar un reconocimiento facial");
	}

	infoAltaGama () {
		return this.mobileInfo() + `Resolucion de camara extra : 
									${this.resolucionDeCamaraExtra}`
	}


}




//Instanciacion de la clase Celular
// celular1 = new celular("rojo","150g","5","hd","1GB");
// celular2 = new celular("negro","155g","5.4","full hd","2GB");
// celular3 = new celular("blanco","15046g",".9","full hd","2GB");

//Prueba de los metodos 
//celular1.presionarBotonEncendido();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.reiniciar();


// //Escribimos sobre nuestro index.html (Correspondiente al problema3)
// document.write (`
// 	${celular1.mobileInfo()} <br>
// 	${celular2.mobileInfo()} <br>
// 	${celular2.mobileInfo()} <br>
// 	`)

celular1 = new CelularDeAltaGama("rojo","150g","5","hd","1GB","full hd");
celular2 = new CelularDeAltaGama("rojo","150g","5","hd","1GB","hd");


document.write (`
	${celular1.infoAltaGama()} <br><br>
	${celular2.infoAltaGama()} <br>
	`)