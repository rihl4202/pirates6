class Tower{
  constructor(x,y,w,h){
    var prop = {
      isStatic:true
    }
    this.body = Bodies.rectangle(x,y,w,h,prop)
    this.w = w
    this.h = h
    World.add(world,this.body)
    this.img = loadImage("assets/tower.png")
  }
  display(){
    push()
    imageMode(CENTER)
    image(this.img,this.body.position.x,this.body.position.y,this.w,this.h)
    pop()
  }
}