class Ball{
    constructor(x,y){
      var prop = {
        isStatic:true
      }
      this.r = 30
      this.body = Bodies.circle(x,y,this.r,prop)
      World.add(world,this.body)
      this.img = loadImage("assets/cannonball.png")
      this.path = []
    }
    shoot(){
        var speed = p5.Vector.fromAngle(canon.a)
        speed.mult(15)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:speed.x,y:speed.y})
    }
    display(){
      push()
      imageMode(CENTER)
      image(this.img,this.body.position.x,this.body.position.y,this.r,this.r)
      pop()
      //this.path = [[x1,y1],[x2,y2],[x3,y3],....]
      if(this.body.velocity.x>0){
        var place = [this.body.position.x,this.body.position.y]
        this.path.push(place)
      }
      for(var i=0;i<this.path.length;i++){
        image(this.img,this.path[i][0],this.path[i][1],5,5)
      }
    }
    remove(index){
      World.remove(world,balls[index].body)
      delete balls[index]
  }
  }