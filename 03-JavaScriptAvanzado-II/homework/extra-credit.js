//Repeatify
/*Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. 
Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. 
La función retorna el string repetido el número de veces que indicamos. Controlar que el número 
no sea menor que cero, y si es cero que devuelva `''` (String vacío).*/

String.prototype.repeatify = function(num){
    if (num < 0)
        return "Cantidad Incorrecta"
    else if (num == 0)
        return ""
    else{
        let repetido = ''
        for (let i = 0; i < num; i++)
            repetido += this
        return repetido
    }
}


// Shapes
/* Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` 
deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
Agregá un nuevo método al prototipo llamado `getPerimeter`.*/

class Shape{
    constructor(type){
        this.type =  type;
    }

    getType(){
        return this.type;
    }
}

class Triangle extends Shape{
    constructor(a, b, c, type){
        super(type);
        this.a = a;
        this.b = b;
        this.c = c;
        this.type = "Triangle"
    }

    getPerimeter (){
        return this.a + this.b + this.c;
    }
}


/* Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. 
Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.*/

class Circle extends Shape{
    constructor(r, type){
        super(type);
        this.r = r;
        this.type = "Circle"
    }

    getPerimeter (){
        return Math.PI * this.r * 2;
    }
}


/* Creá una última `shape` llamada `Square`.
Agregá el método `getArea` de todas las `shape`s.*/
class Square extends Shape{
    constructor(l, type){
        super(type);
        this.l = l;
        this.type = "Circle"
    }

    getPerimeter (){
        return this.l * 4;
    }

    getArea (){
        return this.l * 2;
    }
}