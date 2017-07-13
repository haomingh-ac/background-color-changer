const co = require('co');

const colToHex = color => {
  let hex = color.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

const rgbToHex = (r, g, b) => '#' + colToHex(r) + colToHex(g) + colToHex(b);

const randomColor = () => rgbToHex(
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255));

const randomColors = (colorCount) => {
  const colors = [];
  let color = randomColor();

  while (colors.length < colorCount) {
    color = randomColor();

    while (colors.includes(color)) {
      color = randomColor();
    }
    colors.push(color);
  }
  return colors;
};

const changeColor = (element, color, interval) =>
  new Promise(resolve => {
    element.style.background = color;
    setTimeout(resolve, interval);
  });

const BackgroundColorChanger = function (element, colorCount = 10, interval = 1000) {
  co(function* () {
    for (let color of randomColors(colorCount)) {
      yield changeColor(element, color, interval);
    }
  });
}

module.exports = BackgroundColorChanger;
