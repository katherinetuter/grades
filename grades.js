// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript
// Use console.log to output the following criteria:
// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var a = 0
var b = 0
var c = 0
var d = 0
var f = 0

for (var n = 0; n<scores.length; n++) {
	if (scores[n] > 90) {
 		a = a+1	
 	} else if (scores[n] > 80) {
 		
 	}
 }

console.log("Total of As: ", a);
 

