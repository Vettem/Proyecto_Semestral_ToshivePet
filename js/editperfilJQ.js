//
$("document").ready(function(){
    $("#form1").submit(function(e){
        e.preventDefault();
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var email = $("#email").val();
        var pass = $("#pass").val();
        var phone = $("#phone").val();
        var address = $("#address").val();

        var msj = "";
        let enviar = false;

        if (!/^[a-zA-Z]+$/.test(nombre)) {
            msj += "El nombre solo puede contener letras<br>";
            enviar = true;
        }

        if (!/^[a-zA-Z]+$/.test(apellido)) {
            msj += "El apellido solo puede contener letras<br>";
            enviar = true;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            msj += "El email no es válido<br>";
            enviar = true;
        }

        if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass)) {
            msj += "La clave debe contener al menos una mayúscula, un número y tener al menos 8 caracteres<br>";
            enviar = true;
        }

        if (!/^[0-9]+$/.test(phone)) {
            msj += "El teléfono solo puede contener números<br>";
            enviar = true;
        }

        if (!/^[a-zA-Z0-9\s]+$/.test(address)) {
            msj += "La dirección solo puede contener letras, números y espacios<br>";
            enviar = true;
        }

        if(enviar){
            $("#warnings").html(msj);
        }
        else{
            $("#warnings").html("Perfil editado correctamente");
        }
    });
});
