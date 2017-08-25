console.log(process.argv)

var argOne = process.argv[2];
var argTwo = process.argv[3];

if (argOne === argTwo) {
	console.log(true)
}
else {
	console.log(false)
}