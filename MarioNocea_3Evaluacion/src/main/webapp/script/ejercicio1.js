function altaAlumno(){
/*Pido por pantalla el nombre los apellidos y la edad
con un promt para que se guarden como tipo texto.
*/
	let nombre=prompt("Introduce tu nombre");
	let apellidos=prompt("Introduce tus apellidos");
	let edad=prompt("Introduce tu edad");
//Convierto la edad a un numero para que se guarde como tipo number.
	edad=parseInt(edad);
//Muestro los valores como en el ejemplo.
		//nombre y apellidos con salto de linea
		document.write("Nombre y apellidos: "+apellidos+","+nombre+"<br>");
		//edad y el salto de linea
		document.write("Edad: "+edad+" años.<br>");
		document.write("Edad es un tipo: "+typeof edad);
}