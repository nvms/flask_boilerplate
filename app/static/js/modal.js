jQuery.fn.centerModal = function() {
    this.css("position", "absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 4) + $(window).scrollTop() - 2) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}

$(document).ready(function() {

    // clicking on .modal (backdrop) closes the modal and dialog
    $('.modal').on('click', function() {
        $(this).css('display', 'none');
    });

    // prevent propogation when clicking on dialog inside modal
    $('.modal > .dialog').on('click', function(event) {
        event.stopPropagation();
    });

    // find all elements with data-action="modal" and give them their
    // appropriate bindings (data-target)
    $('[data-action="modal"]').on('click', function() {
        target = $(this).attr('data-target');
        $(target + ' > .dialog').centerModal();
        $(target).css('display', 'block');


    });

});
