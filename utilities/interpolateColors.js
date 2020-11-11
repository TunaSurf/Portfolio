// Takes in a start and end color (in hex string) and the number of steps 
// between the two colors
//
// Returns an array of color code codes as hexadecimal strings
export default function interpolateColors(colorStart, colorEnd, numSteps) {
  if (numSteps <= 2) {
    return [colorStart, colorEnd];
  }

  const color1 = hexToRGB(colorStart);
  const color2 = hexToRGB(colorEnd);
  const colorFactor = 1 / (numSteps - 1);
  const steps = [];
  
  for (let i = 0; i < numSteps; i++) {
    const RGBArray = [];

    for (let j = 0; j < 3; j++) {
      RGBArray.push(Math.round((color2[j] - color1[j]) * (colorFactor * i) + color1[j]))
    }

    steps.push(RGBArrayToHex(RGBArray))
  }

  return steps;
}

// expects hex format '#000000'
function hexToRGB(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return [r,g,b];
}

function RGBArrayToHex(rgb) {
  return "#" + rgb.map(c => c.toString(16)).join('');
}