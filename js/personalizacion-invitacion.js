
function initializePersonalizacion() {
    $("#tituloInput").keyup(function (e) {
        $("#previewTitulo").html($(this).val());
    });

    $('input[type=radio][name=color]').change(function () {
        $("#previewTitulo").css('color', this.value);
        $("#previewSubTitulo").css('color', this.value);
    });

    $('input[type=radio][name=font-size]').change(function () {
        $("#previewTitulo").css('font-size', this.value);
    });

    $("#fechaInput").keyup(function (e) {
        $("#previewSubTitulo").html($(this).val());
    });

    $('input[type=radio][name=position]').change(function () {
        if (this.value === 'bottom-right') {
            $("#previewSubTitulo").css('bottom', '5%');
            $("#previewSubTitulo").css('right', '5%');
            $("#previewSubTitulo").css('left', '');
            $("#previewSubTitulo").css('top', '');
        };

        if (this.value === 'left') {
            $("#previewSubTitulo").css('bottom', '');
            $("#previewSubTitulo").css('right', '');
            $("#previewSubTitulo").css('top', '5%');
            $("#previewSubTitulo").css('left', '5%');
        };

        if (this.value === 'right') {
            $("#previewSubTitulo").css('bottom', '');
            $("#previewSubTitulo").css('left', '');
            $("#previewSubTitulo").css('right', '5%');
            $("#previewSubTitulo").css('top', '5%');
        };
    });

    $('input[type=radio][name=background]').change(function () {
        $("#previewInvitation").css('background-color', this.value);
    });
}

$(document).ready(function () {
    initializePersonalizacion();
});