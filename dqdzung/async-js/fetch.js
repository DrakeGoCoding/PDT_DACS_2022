const randomPerson = async () => {
	const res = await fetch("https://randomuser.me/api/").then((res) =>
		res.json().then((data) => {
			return data;
		})
	);
	console.log("fetched random person", res.results[0]);
};

const btn = document.getElementById("btn");

btn.addEventListener("click", () => randomPerson());
