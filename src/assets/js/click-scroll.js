// jquery-click-scroll.js

$(window).on('load', function () {
    var sectionArray = [1, 2, 3, 4, 5, 6];

    $(document).scroll(function () {
        var docScroll = $(document).scrollTop() + 1;

        $.each(sectionArray, function (index, value) {
            var $section = $('#section_' + value);
            if ($section.length > 0) {
                var offsetSection = $section.offset().top - 83;

                if (docScroll >= offsetSection) {
                    $('.navbar-nav .nav-item .nav-link').removeClass('active').addClass('inactive');
                    $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active').removeClass('inactive');
                }
            }
        });
    });

    $.each(sectionArray, function (index, value) {
        $('.click-scroll').eq(index).click(function (e) {
            e.preventDefault();
            var $section = $('#section_' + value);
            if ($section.length > 0) {
                var offsetClick = $section.offset().top - 83;
                $('html, body').animate({
                    scrollTop: offsetClick
                }, 300);
            }
        });
    });

    $('.navbar-nav .nav-item .nav-link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active').removeClass('inactive');
});
