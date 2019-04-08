/* 
split the image in multiple images of the same size.
height/width should be between 0.5 and 1

*/

let img;

function preload() {
  img = loadImage("mountain.jpg");
}

function setup() {
  //createCanvas(400, 400);
  createImage(img);
  //let b_load = createFileInput(loadRating);

  splitImage(img);
}

function draw() {
  // put drawing code here
}

function loadRating(picture) {
  console.log("Done");
}

function splitImage(image) {
  let subimage = get(0, 0, image.width, image.width);
  createImage(subimage);
}
