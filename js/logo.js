let font
let graphic
let graphic2

function preload () {
  font = loadFont("css/AnchoGX.ttf")
}

function setup () {
  createCanvas(300, 300)
  
  graphic = createGraphics(300, 300)
  
  graphic.fill("#000")
  graphic.textFont(font)
  graphic.textSize(80)
  graphic.textAlign(CENTER, CENTER)
  graphic.text("ASIAN", width / 2, height / 2)
  
  graphic2 = createGraphics(300, 300)
  
  graphic2.fill("#000")
  graphic2.textFont(font)
  graphic2.textSize(80)
  graphic2.textAlign(CENTER, CENTER)
  graphic2.text("SQUAT", width / 2, height / 2)
}

function draw () {
  background("#FD700B")
  
  let val = sin(frameCount * 0.02) * 250
  
  copy(graphic, 0, 0, 500, 500, 0, 0, 250 + val, 500)
  copy(graphic2, 0, 0, 500, 500, 250 + val, 0, 250 - val, 500)
}








