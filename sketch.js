var playRoomImage,luandryRoomImage,houseImage, kitchenImage,livingRoomImage,bedroomImage, bathRoomImage;

function preload(){
playRoomImage =  loadImage("PlayRoom.jpg");
luandryRoomImage =  loadImage("LuandryRoom.jpg");
kitchenImage=  loadImage("Kitchen.jpg");
livingRoomImage=  loadImage(" ");
bedroomImage=  loadImage("");
bathRoomImage=  loadImage("");
houseImage= =  loadImage(" ");
}

function setup() {
  createCanvas(windowwidth,windowheight);

}

function draw() {
  background(0); 
  
  
  drawSprites();
}