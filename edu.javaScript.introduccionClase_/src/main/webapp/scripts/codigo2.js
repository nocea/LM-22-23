function mayusOMinus(){
	let frase = prompt("Escribe algo");
	if(frase==frase.toUpperCase())
		document.write(frase+" esta escrito todo en mayusculas");
	else if (frase==frase.toLowerCase())
		document.write(frase+" esta todo escrito en minusculas");
	else 
		document.write(frase+" es una mezcla de mayusculas y minusculas");
}