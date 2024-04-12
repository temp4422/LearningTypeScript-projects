// Refactor here! ✨

const animals = [
	"parakeet",
	"macaw",
	"cat",
	"monkey",
	"elephant",
	"alpaca",
	"fox",
];

export function checkIsAnyAnimalFavorite(...animals: string[]) {
	const favoriteAnimalsUnique = new Set(animals);

	return animals.some((animal) => favoriteAnimalsUnique.has(animal));
}

export function getFavoriteAnimals(max = Infinity) {
	return animals.slice(0, max);
}

export function logFavoriteAnimals() {
	animals.forEach((animal, i) => {
		console.log(`I like ${animal} number ${i}!`);
	});
}
