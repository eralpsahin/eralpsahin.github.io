// TODO: Add comments

document.addEventListener('DOMContentLoaded', function () {
    new Zooming({
        enableGrab: false
    }).listen('.zoomable')
})

$(function () {
    $(window).scroll(function () {
        $(':header[id]').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 100) {
                let a = $(this).attr('id');
                $('a').removeClass('active');
                $(':header').removeClass('active');
                $('a[href="#' + a + '"]').addClass('active');
                $(this).addClass('active');
            }
        })
    })
});

$('a.footnote-backref').click(function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    // Escape ':' character on duplicate references
    let footnoteID = $(this).attr('href').substr(1);
    let citation = $(document.getElementById(footnoteID));
    $('html, body').animate({
        scrollTop: citation.offset().top - 98,
    }, 100);

    setTimeout(function () {
        citation.addClass('active');
    }, 150);
});

$('sup.footnote-ref a').click(function (e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    let footnoteID = $(this).attr('href');
    let id = $(this).attr("id");

    // Animate to the footnote Reference
    $('html, body').animate({
        scrollTop: $(footnoteID).children('p').children('a').first().offset().top,
    }, 100);

    // Color the active Reference after scrolling ends
    setTimeout(function () {
        $(footnoteID).children('p').children('a').first().addClass('active');
        $('a[href="#' + id + '"]').addClass('active');
    }, 150);
});

$('a').click(function (e) {
    let ref = $(this).attr('href');
    if (ref.charAt(0) === '#') { // Current Page reference
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(ref).offset().top - 98
        }, 100);
    } else if (!(location.hostname === this.hostname
        || !this.hostname.length)) { // External pages
        e.preventDefault();
        window.open(ref, '_blank');
    }
});