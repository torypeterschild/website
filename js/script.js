$("#dreamexpand").click(function() {
    $(this).toggleClass('expander');
    $(this).toggleClass('collapsed');
    if ($(this).hasClass('expanded')) {
        $(this).toggleClass('expanded');
    } else {
        $(this).addClass('expanded');
    }
    if ($("#collapseTwo").hasClass('in')) {
        $("#loveexpand").toggleClass('expander');
        $("#loveexpand").toggleClass('collapsed');
        $("#loveexpand").toggleClass('expanded');
    }
});


$("#loveexpand").click(function() {
    $(this).toggleClass('expander');
    $(this).toggleClass('collapsed');
    if ($(this).hasClass('expanded')) {
        $(this).toggleClass('expanded');
    } else {
        $(this).addClass('expanded');
    }
    if ($("#collapseOne").hasClass('in')) {
        $("#dreamexpand").toggleClass('expander');
        $("#dreamexpand").toggleClass('collapsed');
        $("#dreamexpand").toggleClass('expanded');
    }
});


$("#altlove").click(function() {
    $("#loveexpand").addClass('expander').removeClass('expanded');
    $("#loveexpand").addClass('collapsed');
});

$("#altdream").click(function() {
    $("#dreamexpand").addClass('expander').removeClass('expanded');
    $("#dreamexpand").addClass('collapsed');
});
