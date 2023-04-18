//Escribo antes las opciones para que se muestren nada mas iniciar la vista.
	document.write("1.Madrid<br>");
	document.write("2.Paris<br>");
	document.write("3.Londres<br>");
/*Funcion que segun la opcion introducida elige una ciudad u otra
y muestra la fecha y hora*/
function gestionFechas(){
	//creo el objeto date con la fecha actual	
	var date=new Date();
	//prgunto por la opcion
	let opcion=prompt("Elige una ciudad[1-3]");
	let ciudad
	//como la fecha es la misma para todas las ciudades uso la misma.
	let fecha=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
	let hora
	//Evaluo cada opcion
	switch(opcion){
		case "1":
				ciudad="Madrid"
				//guardo la hora
				hora=(date.getUTCHours()+1)+":"+date.getMinutes()+":"+date.getSeconds();
			break;
		case "2":
				ciudad="Paris"
				hora=(date.getUTCHours()+1)+":"+date.getMinutes()+":"+date.getSeconds();
			break;
		case "3":
				ciudad="Londres"
				hora=date.getUTCHours()+":"+date.getMinutes()+":"+date.getSeconds();
			break;
		default:
				document.write("Opcion Incorrecta<br>");
			break;
			
	}
	//Muestro en la vista segun el formato
	document.write("Ciudad: "+ciudad+"<br>");
	document.write("Fecha: "+fecha+"<br>");
	document.write("Hora: "+hora);
	
}
