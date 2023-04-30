$(document).ready(function(){
    $("#formedit").submit(function(e){
        e.preventDefault();
        var nombrepro = $("#nombrep").val();
        var preciopro = $("#preciop").val();
        var descripcionpro = $("descp").val();

        var msj = "";
        let enviar = false;

        if(nombrepro.trim().length < 4 || nombrepro.trim().length >50){
            msj +="El nombre debe tener entre 4 y 50 caracteres";
            enviar = true;
        }
        var letra = nombrepro.charAt(0);
        if(!esMayuscula(letra)){
            msj +="<br>El nombre debe comenzar con una letra mayúscula";
            enviar = true;
        }
        if(preciopro == 0){
            msj +="<br>El precio no puede ser 0"
            enviar = true;
        }
        if(preciopro <0){
            msj +="<br>El precio no puede ser negativo"
            enviar = true;
        }
        var descripcionpro = $("#descp").val();
        if (descripcionpro.length < 4 ){
            msj +="<br>La descripcion debe contener mas de 4 caracteres"
            enviar = true;
        }
        if(enviar){
            $("#warnings").html(msj);
        }
        else{
            $("#warnings").html("Editado con exito!");
        }

    });

    function esMayuscula(letra){
        if(letra === letra.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }

});