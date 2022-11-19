const getUrl = (name) => `https://pokeapi.co/api/v2/pokemon/${name}`;

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const nameEl = document.getElementById("name");
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const typeEl = document.getElementById("type");
const frontEl = document.getElementById("front");
const backEl = document.getElementById("back");

input.value = "";

const fetchPkm = async (name) => {
	try {
		const res = await fetch(getUrl(name));
		if (!res.ok) return null;
		const data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

const clear = () => {
	input.value = "";
};

input.addEventListener("change", async (e) => {
	if (!e.target.value) return;
	input.value = e.target.value;
});

btn.addEventListener("click", async () => {
	const pkm = await fetchPkm(input.value);

	if (!pkm) {
		alert("Not Found!");
		return;
	}

	const { name, height, weight, types, sprites } = pkm;

	nameEl.innerHTML = name;
	heightEl.innerHTML = height;
	weightEl.innerHTML = weight;
	heightEl.innerHTML = height;
	typeEl.innerHTML = types.map((el) => el.type.name).join(", ");
	frontEl.src = sprites.front_default;
	backEl.src = sprites.back_default;

	clear();
});
