

function scrollTo(element, target) {
    $(element).click(() => {
        var targetOffset = $(target).offset().top - 124.6;
        $('html,body').animate({scrollTop: targetOffset}, 1000);
    });
}



scrollTo('a[href="#features"]', '#features');
scrollTo('a[href="#works"]', '#works');
scrollTo('a[href="#prices"]', '#prices');