var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
//Crear imagenes como objetos
var space = new Image();
space.src = "space2.png";
var spark = new Image();
spark.src = "spark.png";
var ufo = new Image();
ufo.src = "ufo.png";
//Crear el valor de los codigos de las flechas
var keys = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
}
//Event listeners
space.addEventListener("load", draw);
ufo.addEventListener("load", draw);
spark.addEventListener("load", draw);
document.addEventListener("keydown", move)

//Posicion inical de la nave espacial
var ufoX = canvas.width / 2;
var ufoY = canvas.height / 2;



//crear un arreglo de dimensiones 2 * (Un numero random entre 5 y 15)
var sparklesNumber = random(5, 15);
var sparklesArray = [2];
sparklesArray [0] = [sparklesNumber];
sparklesArray [1] = [sparklesNumber];
console.log(sparklesArray);
//Crear numeros aleatoreos y fuardarlos donde 0 y es X y 1 es Y 
for (var i = 0; i < sparklesNumber; i++) {
    sparklesArray[0][i] = random(0, 750);
    sparklesArray[1][i] = random(0, 450);
    console.log("X: "+sparklesArray[0][i]+" Y: "+sparklesArray[1][i]);
}



//Cuando se presiona una tecla del teclado se llama esta funcion
function move(event) {
    switch (event.keyCode) {
        case keys.IZQUIERDA:
            ufoX = ufoX - 10;
            draw();
            break;
        case keys.ARRIBA:
            ufoY = ufoY - 10;
            draw();
            break;
        case keys.DERECHA:
            ufoX = ufoX + 10;
            draw();
            break;
        case keys.ABAJO:
            ufoY = ufoY + 10;
            draw();
            break;
    }
}

function draw() {
    //dibujar fondo
    context.drawImage(space, 0, 0);
    //Dibujar estrellas
    for (var i = 0; i < sparklesNumber; i++) {
        context.drawImage(spark, sparklesArray[0][i],sparklesArray[1][i]);
    }
    //Dibujar la nave espacial
    context.drawImage(ufo, ufoX, ufoY);
}

function random(min, max) {
    return (Math.ceil(Math.random() * (max - min + 1)) + min - 1);
}
