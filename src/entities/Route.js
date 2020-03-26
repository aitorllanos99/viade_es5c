import Point from './Point.js'

class Route{
  constructor(name,points,description="",comments=""){
    this.name=name;
    this.points=points;
    this.description=description;
    this.comments=comments;
    this.media='';
  }
  

  parseRoute() {
    console.log('parseando..');
    this.name= "Nombre Ruta"
    this.points.push(new Point(43.354856,-5.851450));
    this.points.push(new Point(43.364880,-5.851450));
    this.points.push(new Point(43.384900,-5.851450));
    console.log(this.points)
  }

  getPoints(){
    return this.points;
  }
  
}

export default Route;
