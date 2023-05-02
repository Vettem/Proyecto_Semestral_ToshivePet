//
$("document").ready(function(){
    $("#formRegistro").submit(function(e){
        e.preventDefault();
        var nombreCompleto = $("#fullname").val();
        var email = $("#email").val();
        var telefono = $("#phone").val();
        var clave = $("#pass").val();
        var calle = $("#Street").val();
        var comuna = $("#ciTy").val();
        var region = $("#sTate").val();
        var codigoP = $("#zIp").val();

        var msj = "";
        let enviar = false;

        // Validación de nombre completo
        if (!/^[A-Z][a-zA-Z\s]*$/.test(nombreCompleto)) {
            msj += "El nombre debe comenzar con mayúscula y solo puede contener letras y espacios<br>";
            enviar = true;
        }

        // Validación de email
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            msj += "El email no es válido<br>";
            enviar = true;
        }

        // Validación de teléfono
        if (!/^[0-9]{8,14}$/.test(telefono)) {
            msj += "El teléfono debe contener solo números y tener entre 8 y 14 dígitos<br>";
            enviar = true;
        }

        // Validación de clave
        if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(clave)) {
            msj += "La clave debe contener al menos una mayúscula, un número y tener al menos 8 caracteres<br>";
            enviar = true;
        }

        // Validación de calle
        if (!/^[a-zA-Z0-9\s]*$/.test(calle)) {
            msj += "La calle solo puede contener letras, números y espacios<br>";
            enviar = true;
        }

        // Validación de comuna
        if (!/^[a-zA-Z\s]*$/.test(comuna)) {
            msj += "La comuna solo puede contener letras y espacios<br>";
            enviar = true;
        }

        // Validación de región
        if (!/^[a-zA-Z0-9\s]*$/.test(region)) {
            msj += "La región solo puede contener letras, números y espacios<br>";
            enviar = true;
        }

        // Validación de código postal
        if (!/^[0-9]*$/.test(codigoP)) {
            msj += "El código postal solo puede contener números<br>";
            enviar = true;
        }

        if(enviar){
            $("#warnings").html(msj);
        }
        else{
            $("#warnings").html("Registro exitoso");
        }
    });
});
