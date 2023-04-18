//----------------Ejercicio 1 y 2---------------------
//Escribe en la consola .
console.log("Hola Mundo");
//Manda un mensaje guardado en una variable a la vista.
let mensaje="Active el soporte JavaScript si aun no lo tiene activado.";
document.write(mensaje);
//Función que hace que se escriba en la vista una frase.
function primerScript(){
	document.write("Soy el primer Script");
}

//----------------Ejercicio 3---------------------
//Creo un array con todos los nombres de los meses.
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
//Bucle for hasta 12 que son el numero de meses que hay.
for(let i=0;i<=12;i++){
	//Escribo en consola el nombre de cada posicion del array.
	console.log(meses[i]);
}
document.write("<br>")
//----------------Ejercicio 4---------------------
var valores = [true, 5, false, "hola", "adios", 2];

//---Primer apartado---

//Comparo los valores
function masLargo(){
var largo=valores[4]>valores[3];
document.write("Elemento de texto mas largo: ");
//si largo=true
if(largo){
	document.write(valores[3]+" es mas largo que "+valores[4]);
}
//si largo=false
else document.write(valores[4]+" es mas largo que "+valores[3]);
document.write("<br>")
}
//---Segundo apartado---
function trueYFalse(){
//Cuando uno de los dos es true va a dar true.
let valorTrue=valores[0]||valores[2];
document.write("Resultado verdadero: "+valorTrue+"<br>")
//Tienen que ser los dos true para que de true por lo tanto da false.
let valorFalse=valores[0]&&valores[2];
document.write(" Resultado falso: "+valorFalse)
}
//---Tercer apartado---
function operaciones(){
//Operaciones
let suma=valores[1]+valores[5];
let resta=valores[1]-valores[5];
let multiplicacion=valores[1]*valores[5];
let division=valores[1]/valores[5];
let resto=valores[1]%valores[5];
//Escribo en la vista.
document.write("<br>Suma: "+suma+" Resta: "+resta+" Multiplicacion: "+multiplicacion+" Division: "+division+" Resto: "+resto);
}
//---Cuarto apartado---

function incremento(){
	document.write(++valores[1]);
}
function decremento(){
	document.write(--valores[1]);
}
function exponente(){
	let exponente=Math.pow(valores[1],valores[5]);
	document.write(exponente);
}
//---Ejercicio 5---
var numero1=5;
var numero2=8;
console.log("Numero1: "+numero1);
console.log("Numero2: "+numero2)
function if1(){
	if(numero1<numero2) 
console.log("numero1 no es mayor que numero2");
}
function if2(){
	if(numero2>0) 
console.log("numero2 es positivo");

	}
function if3(){
	if(numero1<0||numero1!=0) 
console.log("numero1 es negativo o distinto de cero");
}
function if4(){
	if(++numero1<numero2) 
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

