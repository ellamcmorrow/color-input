//when b or w are pressed the backrgoud changes to black or white
'use strict';

var sketch = function( p ) {

  var agents = [];
  var agentCount = 2000;
  var noiseScale = 100; //defines how close thogether the noise will be drawn, smaller value more squished together
  var noiseStrength = 15; // how random the angles will be , the more biger the number the more random
  var noiseZRange = 0.2;
  var noiseZVelocity = 0.001; //more fluid the lower the number
  var overlayAlpha = 60; //overlay strength of colour
  var agentAlpha = 90; // agents strength of colour
  var strokeWidth = 0.2;
  var drawMode = 1;
  var mouseX;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);


    for(var i = 0; i < agentCount; i++) {
      agents[i] = new Agent(noiseZRange);
    }
  }

  p.draw = function() {

    p.noStroke(); //overlay stroke
    p.rect(0, 0, p.width, p.height); //the overlay is a rectangle
    // Draw agents
    for (var i = 0; i < agentCount; i++) {
      if (drawMode == 1) {
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
        p.stroke(1,214,234, agentAlpha); //light blue
        p.fill(0, 0,0, 10 ); //overlay color

      /* colour palette */
      // p.stroke(1,214,234, agentAlpha); //light blue
      //  p.stroke(71,227,88, agentAlpha); //full green
      //  p.stroke(221,226,1, agentAlpha); //yellowy
      //  p.stroke(241,89,67, agentAlpha); //red
      //  p.stroke(222,0,218, agentAlpha); //magenta
      //  p.stroke(126,68,119, agentAlpha); //dark purple
      //  p.stroke(80,75,233, agentAlpha); //dark blue

      } else if(drawMode==2) {
        agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
					p.stroke(71,227,88,100); //green
          p.fill(0,0,0,0.1 ); //overlay color
    }
    else if(drawMode==3){
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      p.stroke(221,226,1,100);//yellow
      p.fill(0,0,0,0.01 ); //overlay color
    }
    else if(drawMode==4){
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      p.stroke(241,89,67, 100); //red
      p.fill(249, 10,177, 0.02 ); //overlay color
    }
    else if(drawMode==5){
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      p.stroke(222,0,218, 100); //magenta
      p.fill(249, 10,177, 0.01 ); //overlay color
    }
    else if(drawMode==6){
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      p.stroke(126,68,119, 100);// dark purple
      p.fill(249, 10,177, 0.01 ); //overlay color
    }
    else if(drawMode==7){
      agents[i].update1(strokeWidth, noiseScale, noiseStrength, noiseZVelocity);
      p.stroke(80,75,233, 100);
      p.fill(249, 10,177, 0.01 ); //overlay color


        }
      }
    }


  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');

    if (p.key == 'b' || p.key == 'B') p.background(0,0,0);
    if (p.key == 'w' || p.key == 'W') p.background(255,255,255);

    if (p.key == '1') drawMode = 1;
    if (p.key == '2') drawMode = 2;
    if (p.key == '3') drawMode = 3;
    if (p.key == '4') drawMode = 4;
    if (p.key == '5') drawMode = 5;
    if (p.key == '6') drawMode = 6;
    if (p.key == '7') drawMode = 7;


    if (p.key == ' ') {
      var newNoiseSeed = p.floor(p.random(10000));
      console.log('newNoiseSeed', newNoiseSeed);
      p.noiseSeed(newNoiseSeed);
    }
  //  if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(0);
//  if (p.key == 'b') p.background(0);

  }

};

var myp5 = new p5(sketch);
