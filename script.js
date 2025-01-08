// $(document).ready(function(){
//     $('.navbar-toggler').click(function(){
//         $('.navbar-collapse').slideToggle(300);
//     });
    
//     smallScreenMenu();
//     let temp;
//     function resizeEnd(){
//         smallScreenMenu();
//     }

//     $(window).resize(function(){
//         clearTimeout(temp);
//         temp = setTimeout(resizeEnd, 100);
//         resetMenu();
//     });
// });



// const subMenus = $('.sub-menu');
// const menuLinks = $('.menu-link');

// function smallScreenMenu(){
//     if($(window).innerWidth() <= 992){
//         menuLinks.each(function(item){
//             $(this).click(function(){
//                 $(this).next().slideToggle();
//             });
//         });
//     } else {
//         menuLinks.each(function(item){
//             $(this).off('click');
//         });
//     }
// }

// function resetMenu(){
//     if($(window).innerWidth() > 992){
//         subMenus.each(function(item){
//             $(this).css('display', 'none');
//         });
//     }
// }


$(document).ready(function () {
    // Navbar toggler click event for sliding from the left
    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').addClass('open'); // Add 'open' class to slide in
    });

    // Close button click event
    $('.close-btn').click(function () {
        $('.navbar-collapse').removeClass('open'); // Remove 'open' class to slide out
    });

    // Responsive behavior: Reset navbar on large screens
    $(window).resize(function () {
        clearTimeout(temp); // Clear debounce timer for submenu behavior
        temp = setTimeout(resizeEnd, 100);
        resetMenu();

        if ($(window).width() > 992) {
            $('.navbar-collapse').removeClass('open'); // Hide sliding navbar
        }
    });

    // Submenu logic for smaller screens
    smallScreenMenu();
    let temp;
    function resizeEnd() {
        smallScreenMenu();
    }
});

// Submenu toggle logic
const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu() {
    if ($(window).innerWidth() <= 992) {
        menuLinks.each(function (item) {
            $(this).click(function () {
                $(this).next().slideToggle();
            });
        });
    } else {
        menuLinks.each(function (item) {
            $(this).off('click');
        });
    }
}

// Reset submenu visibility on larger screens
function resetMenu() {
    if ($(window).innerWidth() > 992) {
        subMenus.each(function (item) {
            $(this).css('display', 'none');
        });
    }
}
