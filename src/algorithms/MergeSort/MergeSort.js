const BLUE = 0,
	YELLOW = 1,
	PURPLE = 2,
	RED = 3,
	GREEN = 4,
	PINK = 5,
	ORANGE = 6;


let globalArray = [],
	globalArraySteps = [],
	globalColorSteps = [];

const MergeSort = (array, arraySteps, colorSteps) => {
	globalArray = array;
	globalArraySteps = arraySteps;
	globalColorSteps = colorSteps;
	mergeSortHelper(0, array.length - 1);
};

const mergeSortHelper = (startIndex, endIndex) => {
	if (endIndex - startIndex <= 0) return;
	const midIndex = Math.floor((endIndex - startIndex) / 2);
	const leftArrayStartIndex = startIndex,
		leftArrayEndIndex = startIndex + midIndex,
		rightArrayStartIndex = leftArrayEndIndex + 1,
		rightArrayEndIndex = endIndex;

	mergeSortHelper(leftArrayStartIndex, leftArrayEndIndex);
	mergeSortHelper(rightArrayStartIndex, rightArrayEndIndex);
	merge(leftArrayStartIndex, rightArrayStartIndex, rightArrayEndIndex);
};

const merge = (
	leftArrayStartIndex,
	rightArrayStartIndex,
	rightArrayEndIndex
) => {
	
	let colorKey = [...globalColorSteps[0]];
	colorKey.fill(PURPLE, leftArrayStartIndex, rightArrayStartIndex);
	colorKey.fill(PINK, rightArrayStartIndex, rightArrayEndIndex + 1);
	globalColorSteps.push(colorKey.slice());
	globalArraySteps.push(globalArray.slice());

	let writePointer = leftArrayStartIndex,
		rightArrayPointer = rightArrayStartIndex;
	while (
		writePointer <= rightArrayPointer &&
		rightArrayPointer <= rightArrayEndIndex
	) {
		
		
		
		const colorKeyCopy = colorKey.slice();
		colorKey[writePointer] = YELLOW;
		colorKey[rightArrayPointer] = YELLOW;
		globalColorSteps.push(colorKey.slice());
		globalArraySteps.push(globalArray.slice());
		
		colorKey = colorKeyCopy;

		if (globalArray[writePointer] <= globalArray[rightArrayPointer]) {
			
			colorKey[writePointer] = GREEN;
			writePointer++;
		} else {
			const temp = globalArray[rightArrayPointer];
			shiftArrayRightByOne(globalArray, writePointer, rightArrayPointer - 1);
			globalArray[writePointer] = temp;
			
			colorKey[writePointer] = GREEN;
			writePointer++;
			rightArrayPointer++;
			colorKey.fill(PURPLE, writePointer, rightArrayPointer);
		}
		
		globalColorSteps.push(colorKey.slice());
		globalArraySteps.push(globalArray.slice());
	}
	
	colorKey.fill(GREEN, leftArrayStartIndex, rightArrayEndIndex + 1);
	globalColorSteps.push(colorKey.slice());
	globalArraySteps.push(globalArray.slice());
};

const shiftArrayRightByOne = (array, startIndex, endIndex) => {
	for (let i = endIndex; i >= startIndex; i--) {
		array[i + 1] = array[i];
	}
};
export default MergeSort;
