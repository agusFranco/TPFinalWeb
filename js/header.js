function getTicketCount() {
    const count = localStorage.getItem('ticketCounter');

    if (!count) {
        return 0;
    }

    return parseInt(count);
}

function setTicketCount(counter) {
    localStorage.setItem('ticketCounter', counter);
    $("#cart-counter").html(counter);
}

function toggleMenu() {
    const menu = $(".menu");

    if (menu.css('display') == 'none') {
        $(".menu").slideDown();
    } else {
        $(".menu").slideUp();
    }
}

function configureMenuVisibility() {
    $(window).resize(function () {
        if ($(this).width() > 750) {
            $(".menu").show();
        } else {
            $(".menu").hide();
        }
    });
}

function initializeHeader() {    
    configureMenuVisibility();
    $("#cart-counter").html(getTicketCount());
}

$(document).ready(function () {
    initializeHeader();
});