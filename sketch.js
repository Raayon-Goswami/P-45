var bg;
var tb;
var loadData
var elementsData
var yPos = 20


function preload(){
 bg = loadImage("IMGS/bgImg.jpg")
 loadData=loadJSON("js/periodicTableJSON.json")
 
}

function setup() {
  createCanvas(1280,720);
 elementsData = loadData.elements
 //console.log(elementsData.length)
 //console.log(loadData.elements[0].name)
 for(var i=0;i<elementsData.length;i++){
  yPos=yPos+ 15      
  // text(elementsData[i].name,30,yPos)
  text("k",30,50)
  //console.log(elementsData[i].name)
  console.log(yPos)
 }

}

function draw() {
 

  background(bg);  
  fill("purple")
  textSize(30)
  text("Periodic Table App",width/2-50,50)
  
 

  text("x:"+mouseX+"y:"+mouseY,30,30)
  //H = new buttonElements1(40,100,"H")

  tb = createSprite(640,630,1280,180)
  tb.shapeColor = "cyan"
  
  drawSprites()

  
}