//Menú para mostrar las distintas opciones que tiene la web.
function menu(){
	//Lista que sirve como base de datos.
	var listaCitasMedicas=[];
	do{
		//Pregunto la opción y así acceder a los distintos métodos.
		var opcionElegida=parseInt(prompt("Introduce una opción de las siguientes:\n 1.mario\n 2.Listar Citas\n 3.Borrar Citas\n 4.Salir"));
		switch(opcionElegida){
			case 1:CitasMedicas.CrearCitaMedica(listaCitasMedicas);
				break;
			case 2:CitasMedicas.ListarCitas(listaCitasMedicas);
				break;
			case 3:CitasMedicas.BorrarCitas(listaCitasMedicas);
				break;
			case 4:alert("Ha salido.");
				break;
		}
	}while(opcionElegida!=4);
}
//Creo la clase "CitasMedicas".
class CitasMedicas{
	//Constructor de las citas con sus distintas variables
	constructor(dniUsuario,idCentroMedico,idConsulta,idMedico,fecha){
		this.dniUsuario=dniUsuario;
		this.idCentroMedico=idCentroMedico;
		this.idConsulta=idConsulta;
		this.idMedico=idMedico;
		this.fecha=fecha;
	}
	//Método que se utiliza para poder crear un objeto de citas e insertarlo en la base de datos
	static CrearCitaMedica(listaCitasMedicas){
		let dniUsuario=prompt("Introduce tu DNI:");
		let idCentroMedico=prompt("Introduce la ID del centro: ");
		let idConsulta=prompt("Introduce la ID de la consulta: ");
		let idMedico=prompt("Introduce la ID del médico: ");
		let fecha=new Date();
		let nuevaCita=new CitasMedicas(dniUsuario,idCentroMedico,idConsulta,idMedico,fecha);
		listaCitasMedicas.push(nuevaCita);
		return listaCitasMedicas;
	}
	//Método para poder listar las citas de un usuario en específico según su dni.
	static ListarCitas(listaCitasMedicas)
	{
		var dni=prompt("Introduce tu DNI: ");
		var contador=0;
		for(var i=0;i<listaCitasMedicas.length;i++)
		{	
			if(dni==listaCitasMedicas[i].dniUsuario)//Si el dni introducido se encuentra en la base de datos se muestran todas sus citas.
			{
				alert("ID_CITA: "+i+"\nDNI: "+listaCitasMedicas[i].dniUsuario+"\nCentro: "+listaCitasMedicas[i].idCentroMedico+"\nConsulta: "+listaCitasMedicas[i].idConsulta+"\nMedico: "+listaCitasMedicas[i].idMedico+"\nFecha: "+listaCitasMedicas[i].fecha);
				contador++;//Este contador se usa para saber si hay alguna cita registrada con ese dni.
			}
		}
		//Si no ha ninguna cita con ese dni.
		if(contador==0){
			alert("No hay ninguna cita asignada a este DNI: "+dni);
		}	
	}
	//Método que se utiliza para poder borrar las citas segun su posicion en la base de datos y según el dni introducido.
	static BorrarCitas(listaCitasMedicas)
	{	
		var citasUsuario=[];//Lista para poder mostrar todas las ids de todas las citas más cómodo.
		var dni=prompt("Introduce tu DNI: ");
		var contador=0;
		for(var i=0;i<listaCitasMedicas.length;i++)
		{
			if(dni==listaCitasMedicas[i].dniUsuario)
				citasUsuario.push(i);
				contador++;
		}
		if(contador==0){
			alert("No hay ninguna cita asignada a este DNI: "+dni);
		}
		else{
		var citaElegida=prompt("Elige la cita que quieres eliminar:\n "+citasUsuario.join(" \n"));
			delete(listaCitasMedicas[citaElegida]);
			}
		
					
		return listaCitasMedicas;
	}
}
