function comprarEntrada() {
    let count = getTicketCount();

    count += 1;

    setTicketCount(count); 
}

function irAEvento(){
    window.location.href = "form-inscripcion.html";
}


function initializeIndex() { 
}

$(document).ready(function () {
    initializeIndex();
});