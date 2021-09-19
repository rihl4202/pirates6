class Boat{
    constructor(x,y,w,h,animation){
      var prop = {
       restitution:0.1
      }
      this.body = Bodies.rectangle(x,y,w,h,prop)
      this.w = w
      this.h = h
      
      this.animation = animation
      this.speed = 0.05
      World.add(world,this.body)
      this.img = loadImage("assets/boat.png")
    }
    animate(){
      this.speed = this.speed + 0.05
    }
    display(){
      var index = Math.floor(this.speed%this.animation.length)
      push()
      imageMode(CENTER)
      image(this.animation[index],this.body.position.x,this.body.position.y,this.w,this.h)
      pop()
    }
    remove(index){
      this.animation = brokenboatAnimation
      this.w = 300
      this.h = 300
      setTimeout(function(){
        World.remove(world,boats[index].body)
        delete boats[index]
      },2000)
        
    }
  }