var scroll;
var Lpos = 0;
var menu = $('nav');
var Hmenu = menu.outerHeight();

function moveMenu() {
    scroll = $(this).scrollTop();
    if(scroll > Lpos) {
        //scrollDown
        console.log('we gaan naar benden');
        Lpos = scroll;
        menu.css('top', - Hmenu + 'px')

    } else {
        //scrollUp
        console.log('haal menu');
        Lpos = scroll;
        menu.css('top', 0)
    }
}

$(window).on('scroll', moveMenu);