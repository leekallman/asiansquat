// moving cursor
const cursor = document.querySelector(".eyes")
let mouseX = 0
let mouseY = 0

let cursorX = 0
let cursorY = 0

let speed = 0.05

function animate (){
	let distX = mouseX - cursorX
	let distY = mouseY - cursorY
	
	cursorX =  cursorX + (distX * speed)
	cursorY = cursorY + (distY * speed)
	
	cursor.style.left = cursorX + "px"
	cursor.style.top = cursorY + "px"
	
	requestAnimationFrame(animate)
}
animate()

document.addEventListener("mousemove", function(event){
	mouseX = event.pageX
	mouseY = event.pageY
})

$('body').mousemove(function(event) {
  var eye = $(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 180;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});


