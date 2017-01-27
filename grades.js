
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

//setting variables for different letter grades

var a = 0
var b = 0
var c = 0
var d = 0
var f = 0

//setting the loop to find number of scores in each range

for (var n = 0; n<scores.length; n++){
	if (scores[n] > 90) {
 		a = a+1;	
 	} else if (scores[n] > 80){
 		b = b+1;
 	} else if (scores[n] > 70){
 		c = c+1;
 	} else if (scores[n] > 60){
 		d = d+1;
 	} else
 		f = f+1;	
 }

//outputting letter grade totals to console

console.log("Total of As: ", a);
console.log("Total of Bs: ", b);
console.log("Total of Cs: ", c);
console.log("Total of Ds: ", d);
console.log("Total of Fs: ", f);

//what is the lowest grade?

scores.sort();
console.log("The lowest grade is: ", scores[0]);

//what is the highest grade?

console.log("The highest grade is: ", scores.slice(-1)[0]);





 

