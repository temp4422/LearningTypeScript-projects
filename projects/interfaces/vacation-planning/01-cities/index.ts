// // Write your describeCity function here! ✨
// // You'll need to export it so the tests can run it.
export interface City {
	name: string;
	coordinates: {
		north: [number, number, number];
		west: [number, number, number];
	};
	catchphrase?: string;
}

export function describeCity(city: City) {
	const name = `${city.name}, New York\n`;
	const catchphrase = city.catchphrase ? `* "${city.catchphrase}"\n` : "";
	const coordinates = [
		`* Located at `,
		`${city.coordinates.north[0].toString().padStart(2, "0")}°`,
		`${city.coordinates.north[1].toString().padStart(2, "0")}'`,
		`${city.coordinates.north[2].toString().padStart(2, "0")}"N `,
		`${city.coordinates.west[0].toString().padStart(2, "0")}°`,
		`${city.coordinates.west[1].toString().padStart(2, "0")}'`,
		`${city.coordinates.west[2].toString().padStart(2, "0")}"W`,
	].join("");

	const result = `${name}` + `${catchphrase}` + `${coordinates}`;
	return result;
}

const cityTroy: City = {
	name: "Troy",
	coordinates: {
		north: [42, 43, 4],
		west: [73, 41, 33],
	},
	catchphrase: "Uncle Sam was here.",
};

console.log(describeCity(cityTroy));
