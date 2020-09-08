// moving cursor
const cursor = document.querySelector(".eyes")
let mouseX = 0
let mouseY = 0

let cursorX = 0
let cursorY = 0

let speed = 0.02

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

// rolling eyes

// document.querySelector('body').addEventListener("mousemove", eyeball);

// function eyeball(){
// 	var eye = document.querySelectorAll('.eye');
// 	eye.forEach(function (eye) {
// 		let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
// 		let y = (eye.getBoundingClientRect().top) + (eye.clientheight / 2);
// 		let radian = Math.atan2(event.pageX - x, event.pageY - y);
// 		let rot = (radian * (180 / Math.PI) * -1) + 270;
// 		eye.style.transform = "rotate("+ rot + "deg)";
		
// 	})
