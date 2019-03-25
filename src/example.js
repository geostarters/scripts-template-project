// @flow
"use strict";


//How to use @geostarters/common library (node version)
const { Utils } = require("@geostarters/common/dist/node");

//How to use flowtyped definition
const myPoint: Point2d = {
	x: 1,
	y: 2
};

console.log(myPoint.x, myPoint.y);
console.log(Utils.invertColor("#FFFFFF"));