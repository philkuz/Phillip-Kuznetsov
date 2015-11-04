
// $(document).ready(function(){
//     $('.post-preview').click(function(){console.log('lbitch')});
//     $('.post-preview').on(
//     {
//         mouseenter: function()
//         {
//             $(this).find('.project-summary').slideUp();
//             console.log('hover open');
//         },
//         mouseleave: function()
//         {
//             $(this).find('.project-summary').slideDown();
//             console.log('hover open');
//         },
//         click: function(){
//             console.log('clicked');
//         }
//     });
// });
// handler for the project display
$(document).on({
    mouseenter: function()
    {
        $(this).find('.project-summary').slideDown();
    },
    mouseleave: function()
    {
        $(this).find('.project-summary').slideUp();
    },
},
'.post-preview');
//smooth scrolling 
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
