function calcularDni(){
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	//Creo las variables min max y dni para que se cambien desde aqui si es necesario.
	let min=0;
	let max=99999999;
	/*si en esta variable dni cambio el valor y le asigno uno fuera de los limites es 
	  es cuando falla la función y salta la alerta.*/
	let dni=12345678;
	
	let letraDni;
	//si el numero del dni no esta dentro del rango de max y min salta la alerta.
		if(dni<min||dni>max){
			alert("El dni no esta en el rango permitido de numeros");
		}
	//Si está en el rango se guarda la letra del dni.
		else{
			letraDni=letras[dni%23];
			//Escribo por la consola el dni y la letra por separado.
			console.log(dni);
			console.log(letraDni);
			//Muestro en la propia ventana del navegador el dni con su letra concatenado.
			document.write("Dni completo: "+dni+"-"+letraDni);
		}
	
}