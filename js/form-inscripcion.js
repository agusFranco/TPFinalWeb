
function initializeFormInsc() {
    $(".eliminar").click(function () {
        if ($(".form-group-row").length > 1) {
            $(this).closest(".form-group-row").remove();
        } else {
            $(this).closest(".form-group-row").find(".nombre").val("");
            $(this).closest(".form-group-row").find(".apellido").val("");
            $(this).closest(".form-group-row").find(".dni").val("");
            $(this).closest(".form-group-row").find(".importe").val("");
        }

        actualizarTotal();
    });

    $(".importe").blur(function () {
        actualizarTotal();
    });
}

function agregarPersona() {
    const clonar = $(".form-group-row").first().clone(true, true).find("input").val("").end();
    $(".form-group-row").last().after(clonar);
}

function actualizarTotal() {
    const importes = $('.importe');


    let total = 0;

    if (importes.length > 1) {
        importes.each(function (index, element) {
            const precio = parseFloat(element.value);
            total += precio;
        });
    }
    else{
        total += parseFloat(importes.val());
    }


    if (total > 0) {
        $("#total").html(total.toFixed(2));
    }
}

$(document).ready(function () {
    initializeFormInsc();
});