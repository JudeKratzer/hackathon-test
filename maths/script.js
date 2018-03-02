console.log('hi');
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255,0,255);
  w=windowWidth;
  h=windowHeight;
}
var i=0;
var j=600;
var w;
var h;
var m=5;
var n=-5;
function draw(){
  background(255,0,255);
  i+=m;
  j+=n;
  (i<300)?fill(200,0,200):fill(255,255,0);
  ellipse(w/2,h/2,(i<300)?j:i,(i<300)?j:i);
  (i<300)?fill(0,0,255):fill(255,0,0);
  ellipse(w/2,h/2,(i<300)?i:j,(i<300)?i:j);
  if(i==0||i==600){
    m*=-1
  }
  if(j==0||j==600){
    n*=-1
  }
}