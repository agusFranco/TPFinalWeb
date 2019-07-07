
function initializeResumenEntradas() {
    $(".cantidad").blur(function () {
        const precio = parseFloat($(this).closest('.table-row').find('.unit-price').html());
        const cantidad = parseInt($(this).val());
        const subtotal = (precio * cantidad).toFixed(2);
        $(this).closest('.table-row').find('.subtotal').html(subtotal);
        actualizarTotal();
    });   
}

function actualizarTotal() {
    const subtotales = $('.subtotal');
    let total = 0;

    subtotales.each(function (index, element) {
        const precio = parseFloat(element.innerHTML);
        total += precio;
    });

    $("#total").html(total.toFixed(2));
}

$(document).ready(function () {
    initializeResumenEntradas();
});