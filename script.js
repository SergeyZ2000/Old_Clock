var canvas = getElementById("canvas"),
    context = canvas.getContext("2d"),
    sqare, circle;

sqare = new Path2D();
sqare.moveTo(50, 50);
sqare.lineTo(250, 50);
sqare.lineTo(250, 250);
sqare.lineTo(50, 250);
sqare.lineTo(50, 50);

context.stroke(sqare);

circle = new Path2D();
circle.arc(150, 150, 100, 0, 2 * math.PI);
context.fill(circle);

var canvas = getElementById("canvas"),
    context = canvas.getContext("2d"),
    line = new Path2D();
line.moveTo(0, 0);
line.lineTo(300, 300);

context.lineWidth = 5;

context.fillStyle = "red";
context.fillRect(0, 0, 200, 200);

context.fillStyle = "rgba(0, 255. 0, 0.5)";
context.fillRect(100, 100, 300, 300);

var R = 300 / 2, d, angle, pX, pY, qX, qY
var d, angle, pX, pY, qX, qY;
for(d = 0; d < 60; ++d) {
  angle = (d / 60) * (2 * Math.PI);
  pX = Math.cos(angle) * R;
  pY = Math.sin(angle) * R;
  qX = 0.9 * pX;
  qY = 0.9 * pY;
  pX += R; pY += R;
  qX += R; qY += R;
}
var date  = new Date(),
    hours, minutes, seconds;
hours = date.getMinutes();
minutes = date.getMinutes();
seconds = date.getSeconds();
console.log(hours, minutes, seconds);

secondsAngle = Math.PI / 2 - secondsAngle;
minutesAngle = Math.PI / 2 - minutesAngle;
hoursAngle = Math.PI / 2 - hoursAngle;

function drawWatch() {
 context.clearRect(0, 0, 300, 300);
  setTimeout(drawWatch, 1000);
}

drawWatch();