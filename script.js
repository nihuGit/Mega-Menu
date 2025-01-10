$(document).ready(function () {
    let temp;

    // Navbar toggler for sliding from the left
    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').addClass('open'); // Add 'open' class to slide in
    });

    // Close button click event
    $('.close-btn').click(function () {
        $('.navbar-collapse').removeClass('open'); // Remove 'open' class to slide out
    });

    // Submenu logic for smaller screens
    smallScreenMenu();

    // Responsive behavior: Reset navbar and menus on resize
    $(window).resize(function () {
        clearTimeout(temp); // Clear debounce timer
        temp = setTimeout(resizeEnd, 100);

        if ($(window).width() > 1024) {
            $('.navbar-collapse').removeClass('open'); // Reset navbar
        }
    });

    function resizeEnd() {
        smallScreenMenu();
        resetMenu();
    }
});

const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu() {
    if ($(window).innerWidth() <= 1024) {
        // Unbind previous event handlers to prevent duplicates
        menuLinks.off('click');

        // Attach click handler for toggling submenu
        menuLinks.each(function () {
            $(this).on('click', function (e) {
                e.preventDefault(); // Prevent default navigation
                e.stopPropagation(); // Stop event bubbling
                const subMenu = $(this).next('.sub-menu');
                
                // Slide toggle submenu and close others
                $('.sub-menu').not(subMenu).slideUp(); // Close other open submenus
                subMenu.stop(true, true).slideToggle(); // Toggle clicked submenu
            });
        });
    } else {
        // Remove click handlers for larger screens
        menuLinks.off('click');
    }
}

function resetMenu() {
    if ($(window).innerWidth() > 1024) {
        // Ensure all submenus are hidden
        subMenus.css('display', 'none');
    }
}

// Search functionality for overlay
const searchIcon = document.getElementById('search-icon');
const searchOverlay = document.getElementById('search-overlay');
const closeSearch = document.getElementById('close-search');

// Open the search overlay
searchIcon.addEventListener('click', () => {
    searchOverlay.classList.add('active');
});

// Close the search overlay
closeSearch.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});
