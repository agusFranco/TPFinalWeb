
function initializeResumenEntradas() {
    $("#botonFinalizar").prop("disabled", true);

    $(".cantidad").blur(function () {
        const cantidad = parseInt($(this).val());

        if (cantidad && cantidad > 0) {
            const precio = parseFloat($(this).closest('.table-row').find('.unit-price').html());

            const subtotal = (precio * cantidad).toFixed(2);
            $(this).closest('.table-row').find('.subtotal').html(subtotal);
            actualizarTotal();
        }
    });
}

function actualizarTotal() {
    const subtotales = $('.subtotal');
    let total = 0;

    subtotales.each(function (index, element) {
        const precio = parseFloat(element.innerHTML);
        total += precio;
    });

    if (total > 0) {
        $("#botonFinalizar").prop("disabled", false);
        $("#total").html(total.toFixed(2));
        $("#resumenTotal").html(total.toFixed(2));
    } else {
        $("#botonFinalizar").prop("disabled", true);
    }
}

function finalizar() {
    $("#successModal").modal({
        fadeDuration: 1000,
        fadeDelay: 0.50,
        escapeClose: false,
        clickClose: false
    });
}

$(document).ready(function () {
    initializeResumenEntradas();
});