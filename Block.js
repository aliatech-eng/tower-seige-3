class Block{
    constructor(x, y, width, height) {
      this.visiblity=255
     var options={
restitutuion=0.4,
friction=0.0,
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World(world,this.body)
    }
    display(){
      if(this.body.speed<3){
      super.display()
      
      
      }
      else {
      World . remove(world,this.body)
      push();
      this.visiblity=this.visiblity-5
      tint(255,this.visiblity)
      
      pop();
      }
    }
    score (){     
      if(this.visiblity<0 && this.visiblity>-105){
      score++;
      }
block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();;
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block6.score();

//level two
blocks1.score();
blocks2.score();
blocks3.score();
blocks4.score();
blocks5.score();
blocks6.score();
blocks7.score();
blocks8.score();
blocks9.score();
      } 
    }