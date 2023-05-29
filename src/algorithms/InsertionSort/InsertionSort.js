const BLUE = 0,
	YELLOW = 1,
	PURPLE = 2,
	RED = 3,
	PINK = 5,
	GREEN = 4;

const InsertionSort = (array, arraySteps, colorSteps) => {
	let colorKey = [...colorSteps[0]];
	for (let i = 0; i < array.length; i++) {
		let min_idx = i;
		arraySteps.push(array.slice()); 
		colorKey[i] = YELLOW;
		colorSteps.push(colorKey.slice());
		for (let j = i + 1; j < array.length; j++) {
			min_idx = array[j] < array[min_idx] ? j : min_idx;
			arraySteps.push(array.slice()); 
			colorKey[j] = PURPLE;
			colorSteps.push(colorKey.slice());
			colorKey[j] = BLUE; 
		}
		
		arraySteps.push(array.slice()); 
		colorKey[i] = PINK;
		colorKey[min_idx] = PINK;
		colorSteps.push(colorKey.slice());

		const temp = array[min_idx];
		array[min_idx] = array[i];
		array[i] = temp;
		arraySteps.push(array.slice()); 
		colorKey[i] = GREEN;
		colorKey[min_idx] = min_idx != i ? BLUE : GREEN; 
		colorSteps.push(colorKey.slice());
	}
	arraySteps.push(array.slice());
	colorSteps.push(colorKey.slice().fill(4));
};

export default InsertionSort;
