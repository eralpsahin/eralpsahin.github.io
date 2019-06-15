// TODO: Add comments

$(function () {
    $(window).scroll(function () {
        $(":header[id]").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - 100) {
                let a = $(this).attr("id");
                $("a").removeClass("active");
                $(":header").removeClass("active");
                $('a[href="#' + a + '"]').addClass("active");
                $(this).addClass("active");
            }
        })
    })
});

$("img").each(function () {
    $(this).click(function () {
        window.open(this.src);
    });
});

$("div.stackedit__toc a").click(function (e) {
    e.preventDefault();
    let scrollTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top - 98
    }, 100);
});

$("sup.footnote-ref a").click(function (e) {
    e.preventDefault();
    let footnoteID = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(footnoteID).children("p").children("a").first().offset().top,
    }, {
            duration: 100,
            always: function () {
                $(footnoteID).children("p").children("a").first().addClass("active");
            }
        });
});

$("a.footnote-backref").click(function (e) {
    e.preventDefault();
    
    // Escape ':' character on duplicate references
    let footnoteID = $(this).attr('href').substr(1);
    let citation = $(document.getElementById(footnoteID));

    $('html, body').animate({
        scrollTop: citation.offset().top - 98,

    }, 100);
});

$("a").click(function (e) {
    let href = $(this).attr('href');

    // Handle outgoing links in new tab
    if (href.includes("https://") || href.includes("http://")) {
        e.preventDefault();
        window.open(href, '_blank'); 
    }
});