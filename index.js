$(document).ready(function(){
    $(".accordion").on("click", ".heading", function() {

    $(this).toggleClass("active").next().slideToggle();

    $(".contents").not($(this).next()).slideUp(300);
                 
    $(this).siblings().removeClass("active");
    });
});

// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     console.log(window.scrollY);
//   if (window.scrollY >= 0) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
        