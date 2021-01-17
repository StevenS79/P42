var man = createSprite(200, 200);
var cloud = createSprite(200,300)
function preload(){
    man=loadImage("P42IMAGE.png");
man.scale(0.5);
cloud=loadImage("THUNDERCLOUD.png");
cloud.scale(0.4);
}

function setup(){

    
}

function draw(){
    createCanvas(400,400);
    background("blue");
}   

