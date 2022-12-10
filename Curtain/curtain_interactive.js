let a = 0.0;
let firstAngle = 10;
let waveAmplitude = 4;
let frequency = 200;
let inc = -3.14 / 25.0;
let sliderFirstAngle, sliderWaveAmplitude, sliderFrequency;
let color = 0;
let colorCount = 0;
let colors = ["#191528","#c162f","#5c162e","#7c162e","#110e1b"]

function setup() {
  createCanvas(500, 500);

  // Create sliders for Angle, Amplitud and Frequency
  sliderFirstAngle = createSlider(1, 100, firstAngle, 1);
  sliderWaveAmplitude = createSlider(1, 100, waveAmplitude, 1);
  sliderFrequency = createSlider(200, 3000, frequency, 100);
}

function draw() {

  // Connect sliders with design
  firstAngle = sliderFirstAngle.value();
  waveAmplitude = sliderWaveAmplitude.value();
  frequency = sliderFrequency.value();

  // Set background and stroke colors
  background(255);
  stroke(color);
  strokeWeight(2);
  

  // Loop through start and end for lines. 'firstAngle' and 'waveAmplitud' arguments help change line start
  // and end for each iteration in the loop
  for (let i = 0; i < frequency; i++) {
    line(i * firstAngle, // x start
         500, // y start
         i * waveAmplitude, // x end
         -50 + cos(a) * 40.0); // y end
    a = a + inc;
  }
  
  
}

function keyTyped() {
  console.log(colorCount, colors.length);
  
  // Change HEX color from 'colors' array
  colorCount = colorCount + 1;
  if (colorCount <= colors.length-1 && key === 'ñ') {
    color = colors[colorCount];
  } else {
    colorCount = 0;
    color = "black"
  }
  
  // Save static canvas
  if (key === 'z'){
    moment = new Date().getTime()
    nameDesign = 'design'+moment;
    saveCanvas(nameDesign, 'jpg');
    }
  
    // Print values for 'firstAngle', 'waveAmplitude' and 'frequency'
  if (key === 'x'){
    console.log(firstAngle, waveAmplitude, frequency)
  }
}

