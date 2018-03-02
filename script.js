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
var color1="red";
var color2="blue";
function draw(){
  background(255,0,255);
  i+=m;
  j+=n;
  (i<300)?fill(color1):fill(color2);
  ellipse(w/2,h/2,(i<300)?j:i,(i<300)?j:i);
  (i<300)?fill(color2):fill(color1);
  ellipse(w/2,h/2,(i<300)?i:j,(i<300)?i:j);
  if(i<=0||i>=600){
    m*=-1
  }
  if(j<=0||j>=600){
    n*=-1
  }
}