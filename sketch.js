let imgNavbar;
let imgAdBanner;
let imgProduct;
let imgGnb;
let imgAiIcon;
let imgGreen;
let imgTextBox;

let state = 0;

function preload() {
  imgNavbar = loadImage('w04_imageFiles/imgs/01_NavBar.png');
  imgAdBanner = loadImage('w04_imageFiles/imgs/02_AdBanner.png');
  imgProduct = loadImage('w04_imageFiles/imgs/03_Product.png');
  imgGnb = loadImage('w04_imageFiles/imgs/04_GNB.png');
  imgAiIcon = loadImage('w04_imageFiles/imgs/05_ai_icon.png');
  imgGreen = loadImage('w04_imageFiles/imgs/06_green.png');
  imgTextBox = loadImage('w04_imageFiles/imgs/07_textbox.png');
}

function setup() {
  createCanvas(392, 852);
}

function draw() {
  background(255);

  image(imgNavbar, 0, 0, 393, 128);
  image(imgAdBanner, 0, 128, 393, 284);
  image(imgProduct, 0, 412, 393, 440);
  image(imgGnb, 0, 764, 393, 88);
  image(imgAiIcon, 320, 688, 60, 60);

  if (!state) {
    // image(imgNavbar, 0, 0, 393, 128);
    // image(imgAdBanner, 0, 128, 393, 284);
    // image(imgProduct, 0, 412, 393, 440);
    // image(imgGnb, 0, 764, 393, 88);
    // image(imgAiIcon, 320, 688, 60, 60);
  }
  else if (state) {
    // image(imgNavbar, 0, 0, 393, 128);
    // image(imgAdBanner, 0, 128, 393, 284);
    // image(imgProduct, 0, 412, 393, 440);
    // image(imgGnb, 0, 764, 393, 88);
    // image(imgAiIcon, 320, 688, 60, 60);

    image(imgGreen, 0, 700, 393, 152);
  }

  // image(imgTextBox, 0, 0, 320, 688);
}

function mouseClicked() {
  if (mouseX >= 320 && mouseX < 380) {
    if (mouseY >= 688 && mouseY <= 748) {
      if (!state) state = 1;
      else if (state) state = 0;
    }
  }
}