function setup() {
    createCanvas(400, 400);
    background("purple");
  }
  
  function draw() {
    
  
    stroke("blue");
    fill("pink");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 30);
    }
  }