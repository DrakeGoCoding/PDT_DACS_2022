const wait = (ms) => {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve("ahihi");
		}, ms)
	);
};

const display = (string) => console.log(string);

const myAsync = () => {
	wait(500).then((res) => {
		display(res);
		display("ohoho");
	});
};

// const myAsync = async () => {
// 	const res = await wait(500);
// 	display(res);
// 	display("ohoho");
// };

myAsync();
