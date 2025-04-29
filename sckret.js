let gotas = []
function setup(){
  createCanvas(400,400);
  for (let i = 0; i<100;i++){
    gotas [i] = {
      x: random(width),
      y: random(400,10),
      speed:random(2,5)
    }
  }
}

function draw() {
  background (30,60,90);
  for (let i=0; i<gotas.length;i++){
    let gota = gotas[i]
    stroke (150,90,20); //cor branca
    line (gota.x,gota.y,gota.x,gota.y+10); //formato da gota
    gota.y += gota.speed;
    if(gota.y > height){
      gota.y = random(100,0)
    }
  }
}