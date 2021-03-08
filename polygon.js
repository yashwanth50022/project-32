class Polygon{

constructor(x,y,radius){

    var options={
        isStatic : false,
        restitution : 0.1,
        friction : 1, 
        density : 0.5

      }

      this.body = Bodies.circle(x,y,radius, options);
      this.radius = radius;
      this.image = loadImage("img/polygon.png");
      World.add(world,this.body);

}

display(){

var pos = this.body.position;

imageMode(CENTER);
image(this.image,pos.x - 10,pos.y - 17,40,40);

fill("yellow");
//ellipse(pos.x,pos.y,this.radius);
}
}

































