var drawing=[];
var beginShape;
var Canvas;

var isDrawing=false;
function setup() {
  createCanvas(400, 400);
  Canvas.mousePressed(startPath);
  Canvas.mouseReleased(endPath);

  var saveButton = select ('#saveButton');
  saveButton.mousePressed(saveDrawing);
}

function startPath(){
  isDrawing=true;
  currentPath=[];
  drawing.push(currentPath);
}

function endPath(){
  isDrawing=false;
}


function draw() {
  background(0);
  
  if(isDrawing){
      var point ={
        x: mouseX,
        y: mouseY
  }
      drawing.push(point);
}
      beginShape();
      stroke(255);
      strokeWeight(4);
      noFill();
      for (var i = 0; i<drawing.length;i++){
        vertex(drawing[i].x,drawing[i].y)
      }
      endShape();

}


function saveDrawing(){
  var ref = database.ref('drawings');
  var data={
    name:"yusuf",
    drawing:drawing
  }
  ref.push(data);
}
