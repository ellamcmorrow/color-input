
var Agent = function(noiseZRange) {
  this.vector = myp5.createVector(myp5.random(myp5.width), myp5.random(myp5.height));
  this.vectorOld = this.vector.copy(); //Gets a copy of the vector, returns a p5.Vector object.
  this.stepSize = myp5.random(2, 6);
  this.angle;
  this.noiseZ = myp5.random(noiseZRange);
}

Agent.prototype.update = function(strokeWidth, noiseZVelocity) {
  this.vector.x += myp5.cos(this.angle) * this.stepSize; //rotate the prototype by the angle and the step size
  this.vector.y += myp5.sin(this.angle) * this.stepSize;
//if the vector x is less than -10
// then its an old vector, increase the width of the new one by 10
  if (this.vector.x < -10)this.vector.x = this.vectorOld.x = myp5.width + 10;
  //if the vector x width has been increased by ten !
  // then its an old vector then decrease the old vectors width by 10
  if (this.vector.x > myp5.width + 10)this.vector.x = this.vectorOld.x = -10;
  //if the vector y is less than -10
  // then its an old vector, increase the height of the new one by 10
  if (this.vector.y < - 10) this.vector.y = this.vectorOld.y = myp5.height + 10;
  if (this.vector.y > myp5.height + 10) this.vector.y = this.vectorOld.y = -10;

  myp5.strokeWeight(strokeWidth * this.stepSize); //stroke width increases with the size of step
  myp5.line(this.vectorOld.x, this.vectorOld.y, this.vector.x, this.vector.y); //draw  a line from the old vector xy to the new vector xy

  this.vectorOld = this.vector.copy(); //Gets a copy of the vector, returns a p5.Vector object.


  this.noiseZ += noiseZVelocity; //increase the noise
}
//perlin noise creates a smooth organic effect rather than too random
Agent.prototype.update1 = function(strokeWidth, noiseScale, noiseStrength, noiseZVelocity) {
  this.angle = myp5.noise(this.vector.x / noiseScale, this.vector.y / noiseScale, this.noiseZ) * noiseStrength;
//creating smooth gradients using the noise function, the angles points are inputted in the noise function
  this.update(strokeWidth, noiseZVelocity); //update the width and velocity

}
//velocity is magnitude in a given direction
Agent.prototype.update2 = function(strokeWidth, noiseScale, noiseStrength, noiseZVelocity) {
  this.angle = myp5.noise(this.vector.x / noiseScale, this.vector.y / noiseScale, this.noiseZ) * (noiseStrength * 4);
  this.angle = (this.angle - myp5.floor(this.angle)) * noiseStrength;

  this.update(strokeWidth, noiseZVelocity);
}
