class Particle{
    constructor(x,y){
        this.body= Matter.Bodies.circle(x,y,10, {isStatic:false, restitution:0, friction:1, density:1.2});
        
        this.color= color(random(0,255), random(0,255), random(0,255));

        

        World.add(world, this.body)
    }

    display(){

        

     var   pos=this.body.position
     var   angle=this.body.angle

        push();

        translate(pos.x, pos.y)
       
        rotate(angle);

    

        noStroke();

        fill(this.color)


        ellipseMode(RADIUS);

        ellipse(0,0, 10, 10);

        pop();
    }

}