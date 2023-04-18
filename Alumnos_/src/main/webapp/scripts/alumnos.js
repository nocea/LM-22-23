class Alumno{
	constructor(nombre,apellido,telefono,marca,modelo,idPortatil){
		this.marca=marca;
		this.modelo=modelo;
		this.nombre=nombre;
		this.apellido=apellido;
		this.telefono=telefono;
		this.idPortatil=idPortatil;
	}	
static registroAlumno(listaAlumnos){
	let nombreAlumno=prompt("Introduce el nombre:");
	let apellidosAlumno=prompt("Introduce el nombre:");
	let telefonoAlumno=parseInt(prompt("Introduce el nombre:"));
	let marcaAlumno=prompt("Introduce el nombre:");
	let modeloAlumno=prompt("Introduce el nombre:");
	let idPortatilAlumno=creaId(marcaAlumno,modeloAlumno);
	var AlumnoNuevo=new Alumno(nombreAlumno,apellidosAlumno,telefonoAlumno,marcaAlumno,modeloAlumno,idPortatilAlumno);
	listaAlumnos.push(AlumnoNuevo);
	return listaAlumnos;
}
static borrarAlumno(listaAlumnos){
	let posicionLista=prompt("Introduce el numero del alumno que quiere borrar.")
	return listaAlumnos;
}
static creaId(marca,modelo){
	let idcreaPortatil=marca.substring(0,3)+modelo.substring(0,3);
	return idcreaPortatil;
}
}

function menu(){
	var listaAlumnos=[];
	do{
		var opcionElegida=parseInt(prompt("Introduce una opción de las siguientes:\n 1.Registrar Alumno\n 2.Borrar Alumno\n 3.ListarAlumno\n 4.Salir"));
		switch(opcionElegida){
			case 1:Alumno.registroAlumno(listaAlumnos);
				break;
			case 2:document.write("Caso 1")
				break;
			case 3:document.write("Lista")
				break;
			case 4:document.write("Ha salido")
				break;
		}
	}while(opcionElegida!=4);
}




