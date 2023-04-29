$(document).ready(function(){
    $("#formedit").submit(function(e){
        e.preventDefault();
        var nombrepro = $("#nombrep").val();
        var preciopro = $("#preciop").val();
        var descripcionpro = $("descp").val();

        var msj = "";
        let enviar = false;

        if(nombrepro.trim().length < 4 || nombrepro.trim().length >30){
            msj +="El nombre debe tener entre 4 y 30 caracteres";
            enviar = true;
        }
        var letra = nombrepro.charAt(0);
        if(!esMayuscula(letra)){
            msj +="<br>Debe comenzar con una letra mayúscula";
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