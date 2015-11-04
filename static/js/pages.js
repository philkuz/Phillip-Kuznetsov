
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
