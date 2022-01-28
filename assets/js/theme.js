// Hamburgers
$('.menu-toggle').click(function (e) {
    e.preventDefault();
    $('ul.menu').toggleClass('show');
});
if ( $(window).width() < 720) {
$('ul.menu li a').click(function(e) {
    e.preventDefault();
    $('ul.menu').toggleClass('show');
});
};
