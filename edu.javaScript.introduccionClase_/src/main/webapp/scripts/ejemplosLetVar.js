function ejemplo1(){
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if, diferente variable que la primera a
  var b = 1; // El alcance es global, misma variable que la primera b

  document.write("let a en if: " + a);  // 4
  document.write(" || var b en if: " + b);  // 1
}

document.write(" || var a fuera if: " + a); // 5
document.write(" || var b fuera if: " + b); // 1
}
function ejemplo2(){
	if (x) {
  let foo;
  //let foo;
  }
}
function ejemplo31(){
	 var x = 31;
  if (true) {
    var x = 71;   
    document.write("x como var dentro de if " + x);
  } 
document.write(" || x como var fuera del if" + x);
}
function ejemplo32(){
	let x = 31;
  if (true) {
    let x = 71;
    document.write("x como let dentro de if " + x); 
  }
document.write(" || x como let fuera del if" + x); 
}
function ejemplo4(){
	var x = 'global';
let y = 'global';
document.write(this.x);//El this sirve para que pille una variable a nivel global de archivo
					   //Como no hay variable x ni y a nivel global de archivo da error de undefined.
document.write(this.y);
}