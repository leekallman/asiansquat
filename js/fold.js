const holders = document.querySelectorAll(".holder")

window.addEventListener("scroll", function () {
  const pixels = window.pageYOffset
  
  holders.forEach((holder, index) => {
    
    const step = 800 // height of folder
    const start = -130 * index // start at different angles, 0, -130, -260, etc
    const diff = 130 // how much to turn
    
    const angle = Math.min(0, start + diff * (pixels / step))
    
    const fold = holder.querySelector("div")
    
    fold.style.transform = `rotateX(${angle}deg)`    
  })
  
})
