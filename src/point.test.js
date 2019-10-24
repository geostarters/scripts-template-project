// @flow
"use strict";

const Point = require("./point");

describe("InstamapsService library: ", () => {

	const myPoint: Point2d = {
		x: 1,
		y: 2
	};

	it("create point {lat: 2, lon: 1}", () => {
		const result = {"lat": 2, "lon": 1};
		expect(Point.createPoint(myPoint)).toEqual(result);
	});

});