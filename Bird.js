class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,70);
    this.image = loadImage("sprites/udant.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
