interface FormaGeometrica{
  
}

class Triangolo implements FormaGeometrica{
  base: number = 0;
  altezza: number = 0;
  constructor(base: number, altezza: number){
    
  }
}

class Cerchio implements FormaGeometrica{
  
} 

class Rettangolo implements FormaGeometrica{
  
} 

class Quadrato extends Rettangolo{

}