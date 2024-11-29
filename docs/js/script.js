$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('.nav-link a').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the target section ID from the href attribute
        var target = $(this).attr('href');

        // Animate scrolling to the target section
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // 1000ms = 1-second animation
    });
});
