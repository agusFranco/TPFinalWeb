function initializeContacto() {
    $("#consulta").keyup(function (e) {
        const pending = 1000 - $(this).val().length;
        $("#caracteresPendientes").html(pending);
    });

    $("#consulta").keydown(function (e) {
        const pending = 1000 - $(this).val().length;
        $("#caracteresPendientes").html(pending);
    });

    $("#form").validate({
        event: "blur",
        rules:
        {
            'nombre': "required",
            'email':
            {
                required: true,
                email: true
            },
            'consulta': {
                maxlength: 1000,
                required: true
            },
            'telefono':'phone'
        },
        messages: {
            'nombre': "Ingrese su nombre",
            'email': {
                required: 'Debe ingresar un email',
                email: 'Debe ingresar un email v&aacute;lido'
            },
            'consulta': {
                required: 'Debe ingresar su consulta',
                maxlength: 'Su consulta puede poseer un maximo de 1000 caracteres'
            },
        },
        debug: true, errorElement: "label", errorContainer: $("#errores"),
        submitHandler: function (form) {
            $("#processing").show();
            $("#processing").html("<p>Enviando el formulario, por favor espere...</p>");
            form.submit();
        }
    });;
}

$(document).ready(function () {
    initializeContacto();
});