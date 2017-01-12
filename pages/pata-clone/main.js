var keyData = {
  q: {sound: new Howl({src: ['./sounds/bubbles.mp3']}), colour: '#1abc9c'},
  w: {sound: new Howl({src: ['./sounds/clay.mp3']}), colour: '#2ecc71'},
  e: {sound: new Howl({src: ['./sounds/confetti.mp3']}), colour: '#3498db'},
  r: {sound: new Howl({src: ['./sounds/corona.mp3']}), colour: '#9b59b6'},
  t: {sound: new Howl({src: ['./sounds/dotted-spiral.mp3']}),colour: '#34495e'},
  y: {sound: new Howl({src: ['./sounds/flash-1.mp3']}),	colour: '#16a085'},
  u: {sound: new Howl({src: ['./sounds/flash-2.mp3']}),	colour: '#27ae60'},
  i: {sound: new Howl({src: ['./sounds/flash-3.mp3']}),	colour: '#2980b9'},
  o: {sound: new Howl({src: ['./sounds/glimmer.mp3']}),	colour: '#8e44ad'},
  p: {sound: new Howl({src: ['./sounds/moon.mp3']}), colour: '#2c3e50'},
  a: {sound: new Howl({src: ['./sounds/pinwheel.mp3']}), colour: '#f1c40f'},
  s: {sound: new Howl({src: ['./sounds/piston-1.mp3']}), colour: '#e67e22'},
  d: {sound: new Howl({src: ['./sounds/piston-2.mp3']}), colour: '#e74c3c'},
  f: {sound: new Howl({src: ['./sounds/prism-1.mp3']}),	colour: '#95a5a6'},
  g: {sound: new Howl({src: ['./sounds/prism-2.mp3']}),	colour: '#f39c12'},
  h: {sound: new Howl({src: ['./sounds/prism-3.mp3']}),	colour: '#d35400'},
  j: {sound: new Howl({src: ['./sounds/splits.mp3']}), colour: '#1abc9c'},
  k: {sound: new Howl({src: ['./sounds/squiggle.mp3']}), colour: '#2ecc71'},
  l: {sound: new Howl({src: ['./sounds/strike.mp3']}), colour: '#3498db'},
  z: {sound: new Howl({src: ['./sounds/suspension.mp3']}) ,colour: '#9b59b6'},
  x: {sound: new Howl({src: ['./sounds/timer.mp3']}),	colour: '#34495e'},
  c: {sound: new Howl({src: ['./sounds/ufo.mp3']}),	colour: '#16a085'},
  v: {sound: new Howl({src: ['./sounds/veil.mp3']}), colour: '#27ae60'},
  b: {sound: new Howl({src: ['./sounds/wipe.mp3']}), colour: '#2980b9'},
  n: {sound: new Howl({src: ['./sounds/zig-zag.mp3']}),	colour: '#8e44ad'},
  m: {sound: new Howl({src: ['./sounds/moon.mp3']}), colour: '#2c3e50'}
};

var colours = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e',
 '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#f1c40f',
 '#e67e22', '#e74c3c', '#95a5a6', '#f39c12', '#d35400', '#1abc9c',
 '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60',
 '#2980b9', '#8e44ad', '#2c3e50'];
var circles = [];
var rectangles = [];
var paths = [];

function randomColours() {
  return Math.ceil(Math.random() * colours.length);
}

function randomRandom(value) {
  return Math.ceil(Math.random() * value);
};

function makeCircle(point) {
  var newCircle = new Path.Circle(point, 5);
  newCircle.fillColor = keyData[event.key].colour;
  circles.push(newCircle);
}

function makeRectangle(point) {
  var newRectangle = new Path.Rectangle((point - randomRandom(1000)), 2000);
  newRectangle.fillColor = colours[randomColours()];
  newRectangle.strokeWidth = 20;
  rectangles.push(newRectangle);
}

function makeShape() {
  var newShape = new Path();
  newShape.fillColor = colours[randomColours()];
  newShape.add(new Point(0, 0));
  newShape.add(new Point(50, 90));
  newShape.add(new Point(70, 60));
  newShape.add(new Point(170, 90));
  newShape.closed = true;
  newShape.smooth();
  paths.push(newShape);
}

function onKeyDown(event) {
  if (keyData[event.key]) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    keyData[event.key].sound.play();

    switch (randomRandom(4)) {
      case 4:
        makeCircle(point);
        break;
      case 3:
        makeRectangle(point);
        break;
      case 2:
        makeShape();
        break;
      case 1:
        makeRectangle(point);
        makeRectangle(200);
        makeShape();
      default:
        makeRectangle(point);
        makeRectangle(point);
        makeShape();
    }
  }
}

function onFrame(event) {
  circles.forEach(function(circle) {
    circle.fillColor.hue += 1;
    circle.scale(1.05);
  });
  rectangles.forEach(function(rectangle) {
    rectangle.scale(0.8, 1.2);
  });
  paths.forEach(function(path) {
    path.translate(20, 2);
  });
}
