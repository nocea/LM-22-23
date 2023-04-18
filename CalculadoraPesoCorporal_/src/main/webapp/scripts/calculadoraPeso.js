// le paso al método el formulario
function calcular(form){
	//obtengo cada valor del formulario
	var sexo=form.sexo.value;
	var edad=parseInt(form.edad.value);
	var altura=parseInt(form.altura.value);
	var pesoCorporal;
	//si la opcion es hombre una fórmula sino la otra
	if(sexo==="hombre"){
		pesoCorporal=50+((altura-150)/4)*3 + (edad - 20)/4;
		}
	else{
		pesoCorporal=(50+((altura-150)/4)*3+(edad-20)/4)*0.9;
	}
	//Muestro el resultado
	document.write("Aproximación de peso: "+pesoCorporal+"KG≈");
}