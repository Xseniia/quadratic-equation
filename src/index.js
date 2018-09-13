module.exports = function solveEquation(equation) {
  let equationArray = [];
  equationArray = equation.split(' ');

  let a = equationArray[0];

  if (equationArray[3] == '-') {
  	var b = -equationArray[4];
  } else {
  	var b = equationArray[4];
  }

  if (equationArray[7] == '-') {
  	var c = -equationArray[8];
  } else {
  	var c = equationArray[8];
  }

  let D = Math.pow(b, 2) - 4 * a * c;

  	let x1 = Math.round((-b - Math.sqrt(D)) / (2 * a));
  	let x2 = Math.round((-b + Math.sqrt(D)) / (2 * a));
  if(x1 < x2) {
  	var array = [x1, x2];
  } else {
  	var array = [x2, x1];
  }
  return array;
}
