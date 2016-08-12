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
    if ($("#collapseThree").hasClass('in')) {
        $("#markovexpand").toggleClass('expander');
        $("#markovexpand").toggleClass('collapsed');
        $("#markovexpand").toggleClass('expanded');
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
    if ($("#collapseThree").hasClass('in')) {
        $("#markovexpand").toggleClass('expander');
        $("#markovexpand").toggleClass('collapsed');
        $("#markovexpand").toggleClass('expanded');
    }
});


$("#markovexpand").click(function() {
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
    if ($("#collapseTwo").hasClass('in')) {
        $("#loveexpand").toggleClass('expander');
        $("#loveexpand").toggleClass('collapsed');
        $("#loveexpand").toggleClass('expanded');
    }
});


$("#altlove").click(function() {
    $("#loveexpand").addClass('expander').removeClass('expanded');
    $("#loveexpand").addClass('collapsed');

    var panel = $("#lovethumb");
    $('html, body').animate({
        scrollTop: panel.offset().top - 100
    }, 500);
});


$("#altdream").click(function() {
    $("#dreamexpand").addClass('expander').removeClass('expanded');
    $("#dreamexpand").addClass('collapsed');

    var panel = $("#dreamthumb");
    $('html, body').animate({
        scrollTop: panel.offset().top - 100
    }, 500);
});


$("#altmarkov").click(function() {
    $("#markovexpand").addClass('expander').removeClass('expanded');
    $("#markovexpand").addClass('collapsed');

    var panel = $("#markovthumb");
    $('html, body').animate({
        scrollTop: panel.offset().top - 100
    }, 500);
});


$('#accordion').on('shown.bs.collapse', function() {
    var panel = $(this).find('.in');
    $('html, body').animate({
        scrollTop: panel.offset().top
    }, 500);

});
