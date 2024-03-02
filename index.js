$(document).ready(function(){
    $(".accordion").on("click", ".heading", function() {

    $(this).toggleClass("active").next().slideToggle();

    $(".contents").not($(this).next()).slideUp(300);
                 
    $(this).siblings().removeClass("active");
    });
});


// var lastScrollTop = 0;
// var navbar = document.getElementById("navbar");

// $(window).scroll(function() {
//     var currentScroll = $(this).scrollTop();
    
//     if (currentScroll > lastScrollTop) {
//         // User is scrolling down
//         console.log(window.scrollY)
//         console.log('Scrolling down');
//         navbar.classList.remove("sticky-top")
//     } else {
//         // User is scrolling up
//         console.log('Scrolling up');
//         console.log(window.scrollY)
//         navbar.classList.add("sticky-top");
//         navbar.classList.remove("position-absolute")
//     }

//     if (currentScroll == 0 ) {
//         navbar.classList.add("position-absolute")
//     }
    
//     lastScrollTop = currentScroll;
// });

        