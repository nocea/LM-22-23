function igual(){
let numero1 = 10;
let numero2 = 10;
let comparador = numero1 == numero2;
document.write(comparador);
}
function ejercicio1(){
 let numero = 12;
 numero+=5;
 numero--; 
//let multiplicacion=10**5; da fallo por la cara
 let resto=57409%16789;
 document.write("Numero: "+numero);
 document.write("<br>");
 document.write("Multiplicacion: "+ multiplicacion);
 document.write("<br>");
 document.write("Resto: "+resto);
 document.write("<br>");
 }
function distinto(){
let numero1 = 10;
let numero2 = 10;
let comparador = numero1 != numero2;
document.write(comparador);
}
function coche(marca, modelo, anioFabricacion) { 
 this.marca = marca ; 
 this.modelo = modelo ; 
 this.anioFabricacion = anioFabricacion ; 
 } 
 var Vehiculo = new coche('Honda', 'Civic', 2010); 
 var Vehiculo1 = new coche('Honda', 'Civic', 2010); 
document.write(Vehiculo==Vehiculo1);
document.write(Vehiculo===Vehiculo1);

