function compareNumeric(a, b) {
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
}
let arr = [0, 1, -2, 2, 4, 8, `test`, 7, 17, 16, 15,];
arr.sort(compareNumeric);
alert(arr);
let = () => { };