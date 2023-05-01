//validacion de datos en registro con jquery

$("documemt").ready(function(){
    $("#formRegistro").submit(function(e){
        e.preventDefault();
        //datos en variables
        var nombreCompleto = $("#fullname").val();
        var email = $("#email").val();
        var telefono = $("#phone").val();
        var clave = $("#pass");
        //direccion
        var calle = $("#Street").val();
        var comuna = $("#ciTy").val();
        var region = $("#sTate").val();
        var codigoP = $("#zIp").val();

        //mensajes
        var msj = "";
        //bandera
        let enviar = false;

        //                                                                            validaciones
        if (nombreCompleto.trim().length < 8 || nombreCompleto.trim().length > 30){
            msj += "El nombre debe tener entre 8 y 30 caracteres<br>";
            enviar = true;
        }

        // letra mayus al principio del nombre
        var letra = nombreCompleto.charAt(0);
        if (!esMayscula(letra)){
            msj += "El nombre debe comenzar con mayuscula<br>";
            enviar = true;
        }

        if (email.trim().length < 12 || email.trim().length > 30){
            msj += "El email debe tener entre 12 y 30 caracteres<br>";
            enviar = true;
        }

        if (telefono.length < 8 || telefono.length > 14){
            msj += "El telefono debe estar en un rango de 8 a 15 numeros<br>";
            enviar = true;
        }
        //  FALTA LA CLAVE

        //Direcciones
        if (calle.trim().length < 10 || calle.trim().length > 25){
            msj += "La calle tiene que estar entre los 10 y 25 caracteres<br>";
            enviar = true;
        }

        if (comuna.trim().length < 8 || comuna.trim().length > 25){
            msj += "La comuna tiene que estar entre los 8 y 25 caracteres<br>";
            enviar = true;
        }

        if (region.trim().length < 8 || comuna.trim().length > 25){
            msj += "La region tiene que estar entre los 8 y 25 caracteres<br>";
            enviar = true;
        }

        if (codigoP.trim().length < 8 || codigoP.trim().length > 25){
            msj += "El codigo postal tiene que estar entre los 8 y 25 caracteres<br>";
            enviar = true;
        }


        //                                                                        FIN DE LAS VALIDACIONES

        //  Envio de mensaje al html
        if(enviar){
            $("#warnings").html(msj);
        }
        else{
            $("#warnings").html("Enviado");
        }

    });

    function esMayscula(letra){
        if(letra === letra.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }

});