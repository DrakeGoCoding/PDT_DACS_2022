const myPromise = new Promise((resolve, reject) => {
	const x = 1;

	// Some complex calculations

	if (x == 0) {
		resolve(x); // when successful
		return;
	}
	reject(x); // when error
});

myPromise.then(
	(value) => {
		console.log("success", value);
		// when resolved
	},
	(error) => {
		console.log("error", error);
		// when rejected
	}
);
