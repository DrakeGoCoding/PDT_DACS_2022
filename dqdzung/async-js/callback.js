const displayNumber = (num) => {
	console.log(num);
};

const sum = (num1, num2, displayNumber) => {
	const res = num1 + num2;
	displayNumber(res);
};

sum(1, 2, displayNumber);
