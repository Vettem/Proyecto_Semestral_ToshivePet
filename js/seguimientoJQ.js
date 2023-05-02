//
$("document").ready(function(){
    $("#formseguimiento").submit(function(e){
        e.preventDefault();
        var seguimiento = $("#seguimiento").val();

        var msj = "";
        let enviar = false;

        // Validar seguimiento
        if (!/^[0-9]+$/.test(seguimiento)) {
            msj += "El número de seguimiento sólo puede contener números<br>";
            enviar = true;
        } else if(/\s/.test(seguimiento)) {
            msj += "El número de seguimiento no puede contener espacios en blanco<br>";
            enviar = true;
        }

        if(enviar){
            $("#warnings").html(msj);
        }
        else{
            $("#warnings").html("Busqueda exitosa");
        }

    });

});
