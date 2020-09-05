let font
let graphic
let graphic2

function preload () {
  font = loadFont("css/syne-extra.otf")
}

function setup () {
  createCanvas(1000, 600)
  
  graphic = createGraphics(1000, 600)
  
  graphic.fill("#000")
  graphic.textFont(font)
  graphic.textSize(170)
  graphic.textAlign(CENTER, CENTER)
  graphic.text("ASIAN", width / 2, height / 2)
  
  graphic2 = createGraphics(1000, 600)
  
  graphic2.fill("#000")
  graphic2.textFont(font)
  graphic2.textSize(170)
  graphic2.textAlign(CENTER, CENTER)
  graphic2.text("SQUAT", width / 2, height / 2)
}

function draw () {
  background("#FD620B")
  
  let val = sin(frameCount * 0.02) * 250
  
  copy(graphic, 0, 0, 1000, 1000, 0, 0, 500 + val, 1000)
  copy(graphic2, 0, 0, 1000, 1000, 500 + val, 0, 500 - val, 1000)
}






