class app {
	constructor (descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;

	}

	instalar () {
		if (this.instalada == false){
			this.instalada = true;
			alert ("app instalada correctamente");
		}
	}

	desinstalar () {
		if (this.instalada == true){
			this.instalada = false ; 
			alert ("app desinstalada correctamente");
		}
	}

	abrir () {
		if (this.iniciada == false && this.instalada == true){
			this.iniciada = true ;
			aler ("app iniciada");
		}
	}

	cerrar() {
		if (this.iniciada == true && this.instalada == true){
			this.iniciada = false ;
			alert ("app cerrada");
		}
	}

	appInfo (){
		return `
		descargas : <b>${this.descargas}</b></br>
		Puntuacion : <b>${this.puntuacion}</b></br>
		Peso : <b>${this.peso}</b></br>
		`
	}
}

app1 = new app("16000","5 estrellas","900 mb");
app2 = new app("1000","4 estrellas","400 mb");
app3 = new app("6000","4.5 estrellas","100 mb");
app4 = new app("23000","4.8 estrellas","1 gb");
app5 = new app("900","5 estrellas","250 mb");
app6 = new app("17","3.7 estrellas","522 mb");
app7 = new app("42981","2.9 estrellas","723 mb");

document.write (`
	${app1.appInfo()} <br>
	${app2.appInfo()} <br>
	${app3.appInfo()} <br>
	${app4.appInfo()} <br>
	${app5.appInfo()} <br>
	${app6.appInfo()} <br>
	${app7.appInfo()} <br>

	`);