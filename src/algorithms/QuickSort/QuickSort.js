const BLUE = 0,
	YELLOW = 1,
	PURPLE = 2,
	RED = 3,
	GREEN = 4,
	PINK = 5,
	ORANGE = 6,
	TEAL = 7;


let globalArray = [],
	globalArraySteps = [],
	globalColorSteps = [],
	globalColorKey = [];

const QuickSort = (array, arraySteps, colorSteps) => {
	globalArray = array;
	globalArraySteps = arraySteps;
	globalColorSteps = colorSteps;
	globalColorKey = [...globalColorSteps[0]];
	quickSortHelper(0, array.length - 1);
	console.log(`sorted array: ${globalArray}`);
};


const getPivotIndex = (startIndex, endIndex) => {
	return Math.floor(Math.random() * (endIndex - startIndex + 1) + startIndex);
};

const quickSortHelper = (startIndex, endIndex) => {
	if (endIndex - startIndex <= 0) {
		globalColorKey[endIndex] = GREEN;
		globalColorSteps.push(globalColorKey.slice());
		globalArraySteps.push(globalArray.slice());
		return;
	}
	let pivotIndex = getPivotIndex(startIndex, endIndex),
		pivotElement = globalArray[pivotIndex],
		leftPointer = startIndex,
		rightPointer = endIndex - 1;

	
	let colorKey = [...globalColorKey];
	colorKey[pivotIndex] = TEAL;
	globalColorSteps.push(colorKey.slice());
	globalArraySteps.push(globalArray.slice());

	
	colorKey[pivotIndex] = YELLOW;
	colorKey[endIndex] = YELLOW;
	globalColorSteps.push(colorKey.slice());
	globalArraySteps.push(globalArray.slice());

	
	swap(globalArray, pivotIndex, endIndex);

	
	colorKey = [...globalColorKey];
	colorKey[endIndex] = TEAL;
	globalColorSteps.push(colorKey.slice());
	globalArraySteps.push(globalArray.slice());

	let tempColorKey = colorKey.slice();

	while (leftPointer <= rightPointer) {
		
		tempColorKey = colorKey.slice();
		colorKey[leftPointer] = PURPLE;
		colorKey[rightPointer] = PINK;
		globalColorSteps.push(colorKey.slice());
		globalArraySteps.push(globalArray.slice());

		if (globalArray[leftPointer] >= pivotElement) {
			
			colorKey[leftPointer] = YELLOW;
			colorKey[rightPointer] = YELLOW;
			globalColorSteps.push(colorKey.slice());
			globalArraySteps.push(globalArray.slice());

			swap(globalArray, leftPointer, rightPointer);
			rightPointer--;
		} else {
			leftPointer++;
		}
		colorKey = tempColorKey;
	}

	
	colorKey[leftPointer] = YELLOW;
	colorKey[endIndex] = YELLOW;
	globalColorSteps.push(colorKey.slice());
	globalArraySteps.push(globalArray.slice());
	colorKey = tempColorKey;

	
	swap(globalArray, leftPointer, endIndex);

	
	colorKey = [...globalColorKey];
	colorKey[leftPointer] = GREEN;
	globalColorKey[leftPointer] = GREEN;
	
	colorKey.fill(PURPLE, startIndex, leftPointer);
	
	colorKey.fill(PINK, leftPointer + 1, endIndex + 1);

	globalColorSteps.push(colorKey.slice());
	globalArraySteps.push(globalArray.slice());

	quickSortHelper(startIndex, leftPointer - 1);
	quickSortHelper(leftPointer + 1, endIndex);
};

const swap = (array, i, j) => {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

export default QuickSort;
