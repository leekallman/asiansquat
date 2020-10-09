// 1. when we scroll, we wnt to run the function
// 2. We wnt to figure out how far the page we have scrolled
// 3.We want to do display the piexels we've scrolled inside of our progress div.

// document is a javascript keyword that  refererar till "hela sidans innehåll" dvs skriver ut/hämtar hela sidans innehåll på html-kod

$(document).on('scroll', function() {
  //the srocllTop method gives us beck a pixel value for how far
  // it is to the top of the page (from our scroll position)
  var pixelsFromTop = $(document).scrollTop()
  $('.progress').text(pixelsFromTop + ' pixels from top')

  if (pixelsFromTop > 50) {
    $('header').addClass('hidden')
  } else {
    $('header').removeClass('hidden')
  }

  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#fff')
  } else if (pixelsFromTop < 1400) {
    $('body').css('background-color', '#FFF2AB')
  } else if (pixelsFromTop < 2200) {
    $('body').css('background-color', '#FFD8C2')
  } else if (pixelsFromTop < 3000) {
    $('body').css('background-color', '#FFC8FD')
  } else if (pixelsFromTop < 3800) {
    $('body').css('background-color', '#BFDDFF')
  } else if (pixelsFromTop < 4600) {
    $('body').css('background-color', '#C5FFF4')
  } else {
    $('body').css('background-color', '#E6FFB1')
  }
  //1. make some variabels for our document height and window height
  // 2. make a variable to work out the difference between the two (as we are comparing this to our
  //scrollTop position which goes from the top of the window), So it t´will be documentheight - windowheight
  //3. using thed difference and tje scrollPosition, divide them into each other to make a percentage
  //4. Multiply by 100 to get back a % value
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var difference = documentHeight - windowHeight
  var percentage = (100 * pixelsFromTop) / difference
  $('.bar').css('width', percentage + '%')
})
// here we join the number of % scrolled with the % symbol.
// otherwise it assume we talk about pixels.

document.querySelector('html').classList.remove('no-js');
if (!window.Cypress) {
  const scrollCounter = document.querySelector('.js-scroll-counter');

  aos.init({
    mirror: true
  });

  document.addEventListener('aos:in', function(e) {
    console.log('in!', e.detail);
  });

  window.addEventListener('scroll', function() {
    scrollCounter.innerHTML = window.pageYOffset;
  });
}