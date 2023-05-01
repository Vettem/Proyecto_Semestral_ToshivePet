//validacion de datos en registro con jquery

$("document").ready(function(){
    $("#form1").submit(function(e){
        e.preventDefault();
        //datos en variables
        var email = $("#email").val();
        var clave = $("#password").val();

        //mensajes
        var msj = "";
        //bandera
        let enviar = false;

        //                                                                            validaciones
        if (email.trim().length < 12 || email.trim().length > 30){
            msj += "El email debe tener entre 12 y 30 caracteres<br>";
            enviar = true;
        }

        //  FALTA LA CLAVE
        if (clave.length < 8 || clave.length > 14){
            msj += "La clave debe estar en un rango de 8 a 15 caracteres (Letras)<br>";
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

});