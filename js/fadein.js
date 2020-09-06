//add event on scroll the whole document
$(document).ready(function() {
  $(window).scroll(function() {

    $('.image').each (function(i) {
      var objectBottom = $(this).position().top + $(this).outherHeight();
      var objectWindow = $(window).scrollTop() + $(window).height();

        if( objectWindow > objectBottom) {
          $(this).removeClass('hidden');
          $(this).addClass('fadeIn');
        } else {
          $(this).addClass('hidden');
        }
      };
    };
  };

//   //how far down we scrolled
//   var pageTop = $(document).scrollTop()

//   //how far down the bottom of the window is when scrolling
//   var pageBottom = pageTop + $(window).height()

//   //save the tags I want to animate
//   var tags = $("div")

// //loop over each of the tags to check
// for (var i = 0; i < tags.length; i++){
//   //Three parts to a loop; where it starts, where it will end and how it steps.
//   var tag = tags[i]
//   //Get the individual tag in our list of section tags.

//   if ($(tag).position().top < pageBottom) {
//     $(tag).addClass("visible")
//   //If the tag’s top position is above the bottom of the visible part of the page.
// } else {
//   $(tag).removeClass("visible")
//   //Hide it again if we scroll back up.
// }
// }

// })


// (function($) {  

//   $.fn.visible = function(partial) {

//     var $t            = $(this),
//     $w            = $(window),
//     viewTop       = $w.scrollTop(),
//     viewBottom    = viewTop + $w.height(),
//     _top          = $t.offset().top,
//     _bottom       = _top + $t.height(),
//     compareTop    = partial === true ? _bottom : _top,
//     compareBottom = partial === true ? _top : _bottom;

//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

//   };


// })(jQuery);

// var win = $(window);

// var allMods = $(".image");

// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible"); 
//   } 
// });

// win.scroll(function(event) {

//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in"); 
//     } 
//   });

// });