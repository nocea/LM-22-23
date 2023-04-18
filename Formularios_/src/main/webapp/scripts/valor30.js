function guardar(){
    let numero = parseInt(document.getElementsByName('tuMensaje')[0].value);
    numero=numero*0.3;
    document.write("Se guarda el número " + numero);
    console.log("Se guarda el número "+numero);
}