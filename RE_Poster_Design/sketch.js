let elementosPorFila = 4;
let margen = 60;
let x, y;
let aleatorio = 1;
let colors = ["#E8F3D6", "#FCF9BE", "#FFDCA9", "#FAAB78"];

function setup() {
  var myCanvas = createCanvas(600, 600);
  myCanvas.parent("idnameofdiv");
  posicionCirculo = (width-2*margen)/elementosPorFila;
  noStroke();
  noLoop();
}

function draw() {
  backgroundColor = random(colors);
  background(backgroundColor);
  ellipseMode(CORNER);

  stroke(0);
  strokeWeight(10);
  line(20,10, 580,10);
  line(20,580, 580,580);

  noStroke();
  for (let j = 0; j < elementosPorFila; j = j+1){
    for (let i = 0; i < elementosPorFila; i=i+1){
      aleatorio = round(random(1,5));
      console.log(aleatorio)
      x = margen + i * posicionCirculo;
      y = margen + j * posicionCirculo; 

      fill("black");
      circle(x, y, posicionCirculo*0.8);
              
      
      fill(backgroundColor);
      if (aleatorio == 1){
          rect(x,
               y,
               (posicionCirculo*0.8)/2,
               (posicionCirculo*0.8)/2)
      }
      
        else if (aleatorio == 2){
          rect(x+(posicionCirculo*0.8)/2,
               y,
               (posicionCirculo*0.8)/2,
               (posicionCirculo*0.8)/2)}
      
        else if (aleatorio == 3){
          rect(x +(posicionCirculo*0.8)/2,
               y+(posicionCirculo*0.8)/2,
               (posicionCirculo*0.8)/2,
               (posicionCirculo*0.8)/2
              )}
      
        else{
          rect(x,
               y+(posicionCirculo*0.8)/2,
               (posicionCirculo*0.8)/2,
               (posicionCirculo*0.8)/2);
      }
    }
  }
}