
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
    else {
        total += parseFloat(importes.val());
    }

    if (isNaN(total)) {
        total = 0;
    }

    $("#total").html(total.toFixed(2));
}

function inscribirse() {
    const summary = $("#summary");
    summary.empty();

    const subscribers = $(".form-group-row");

    if (subscribers.length > 1) {
        subscribers.each(function (index, element) {
            const formInputs = $(this).find(":input");
            completarModal(formInputs);
        });
    }
    else {
        const formInputs = subscribers.find(":input");
        completarModal(formInputs);
    }

    $("#successModal").modal({
        fadeDuration: 1000,
        fadeDelay: 0.50,
        escapeClose: false,
        clickClose: false
    });
}


function completarModal(formInputs) {
    let parragraph = '<p>';

    formInputs.each((function (index, element) {
        if (element.name.startsWith('nombre')) {
            const name = '<span> Nombre: <strong>' + element.value + '</strong> </span>';
            parragraph = parragraph.concat(name);
        }

        if (element.name.startsWith('apellido')) {
            const name = '<span> Apellido: <strong>' + element.value + '</strong> </span>';
            parragraph = parragraph.concat(name);
        }

        if (element.name.startsWith('dni')) {
            const name = '<span> DNI: <strong>' + element.value + '</strong> </span>';
            parragraph = parragraph.concat(name);
        }

        if (element.name.startsWith('importe')) {
            let importe = parseFloat(element.value);

            if (isNaN(importe)) {
                importe = 0;
            }

            const name = '<span> Importe: <strong>$' + importe.toFixed(2) + '</strong> </span>';
            parragraph = parragraph.concat(name);
        }
    }));

    parragraph = parragraph.concat('</p>', '<hr>');

    summary.append($.parseHTML(parragraph)[0]);
    summary.append($.parseHTML(parragraph)[1]);
}

$(document).ready(function () {
    initializeFormInsc();
});