const images = ["images/chinese.jpg", "images/square2.jpg", "images/newspaper.jpeg", "images/obama.jpg"]
let i = 0

function placeImage(x, y) {
	const nextImage = images[i]

	const img = document.createElement("img")
	img.setAttribute("src", nextImage)
	img.style.left = x + "px"
	img.style.top = y + "px"
	img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

	document.body.appendChild(img)

	i = i +1
	if (i >= images.length){
		i = 0
	}
}

document.addEventListener ("click", function (event) {
	event.preventDefault()
	pageImage(event.pageX, event.pageY)

})

document.addEventListener("touch", function (event){
	event.preventDefault()
	placeImage(event.pageX, event.pageY)
})