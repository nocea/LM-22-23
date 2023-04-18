function guardar(){
    let mensaje = document.getElementsByName('tuMensaje')[0].value;
    document.write("Se guarda el mensaje " + mensaje);
}

function evaluar(form){
    let resultado = form.tuExpresion.value;        
    form.tuResultado.value = eval(resultado);
}
