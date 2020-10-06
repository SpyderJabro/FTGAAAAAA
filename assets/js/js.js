$('.comeon').click(function () {
    $(this).parent('li').children('.cometext').toggle();
});





$('.up-down').click(function () {

    if ($('.top').hasClass('up')){
        $('.top').removeClass('up').addClass('down')
        $('#ico-top-down').removeClass('fa-chevron-down').addClass('fa-chevron-up')
    }
    else if ($('.top').hasClass('down')) {
        $('.top').removeClass('down').addClass('up')
        $('#ico-top-down').removeClass('fa-chevron-up').addClass('fa-chevron-down')
    }
    else{
        $('.top').addClass('down')
        $('#ico-top-down').removeClass('fa-chevron-up').addClass('fa-chevron-up')
    }
});