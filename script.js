$( function() {
  var handle1 = $( "#custom-handle1" );
  $( "#slider1" ).slider({
      value: 5,
      max: 10,
      min: 1,
      create: function() {
          handle1.text( $( this ).slider( "value" ) );
      },

      slide: function( event, ui ) {
          handle1.text( ui.value );
          m = ui.value;
      }
  });
  var handle2 = $( "#custom-handle2" );
  $( "#slider2" ).slider({
      value: 5,
      max: 10,
      min: 1,
      create: function() {
          handle2.text( $( this ).slider( "value" ) );
      },

      slide: function( event, ui ) {
          handle2.text( ui.value );
          n = ui.value;
      }
  });
  $( "#color1" ).selectmenu({
    change: function() {
      color1 = $( this ).val();
      if (color1 == 'surprise') {
       color1 = color(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
      }
    }
  });
  $( "#color2" ).selectmenu({
    change: function() {
      color2 = $( this ).val();
      if (color2 == 'surprise') {
          color2 = color(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
      }
    }
  });

  $( "#buttonstart" ).button();
  $("#buttonstart").click( function() {
      loop()
  });
  $('#buttonstop').button();
  $('#buttonstop').click( function() {
      noLoop();
  });
  $("#repo-button").button();
  $("#repo-button").click( function() {
      var repo = $("#repo-input").val();
      $.get("https://api.github.com/repos/" + repo, function(data) {
        var size = data.size;
        var id = data.id;
        var idrgb = id % 255;
        var rgbsize = size % 255;
        color1 = color(rgbsize, idrgb, rgbsize);
        console.log(rgbsize);
      })

  });
  $("#zip-button").button();
  $("#zip-button").click( function() {
      var zip = $("#zip-input").val();
      $.get("https://api.openweathermap.org/data/2.5/weather?q=" + zip + "&appid=1a72577e4d8839d7db17f72c983053b2", function(data) {
        var temp = data.main.temp;
        var pressure = data.main.pressure;
        var humidity = data.main.humidity;
        var temprgb = (temp * 5) % 255
        var pressurergb = (pressure * 97) % 255
        var humidityrgb = (humidity * 3) % 255
        color2 = color(temprgb, humidityrgb, pressurergb);
      })

  });
} );
console.log('hi');
function setup(){
createCanvas(windowWidth,windowHeight);
//background(255,0,255);
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
var loadImage
function draw(){
background('rgba(255,255,255,0.1)');
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