function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
}
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
	if (arr[i] < min) {
		min = arr[i];
	}
	if (arr[i] > max) {
		max = arr[i];
	}

	let avg = sum / arr.length;

	return {
		min,
		max,
		avg
	};
}