const randomPerson = async () => {
	const res = await fetch("https://randomuser.me/api/").then((res) =>
		res.json().then((data) => {
			return data;
		})
	);
	console.log(res.results);
};

randomPerson();
