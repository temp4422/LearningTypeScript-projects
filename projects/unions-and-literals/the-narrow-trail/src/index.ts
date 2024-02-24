export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let availableResource: "food" | "water" | undefined;
	let day: number = 0;
	let food: number = 5;
	let water: number = 5;

	// Continuously generate a random number between 1 and 6 to simulate a dice roll for a new day.
	for (let i = 0; i <= 7; i++) {
		// Generate random number in range of 1-6
		let randomNumber: number = Math.floor(Math.random() * 6) + 1;
		// Each day, one of the following commands will happen based on that rolled number:
		let command: "food" | "water" | number;

		if (randomNumber === 1) {
			command = "food";
		} else if (randomNumber === 2) {
			command = "water";
		} else {
			command = randomNumber;
		}

		// If an Available Resource value is set: increase the corresponding resource by the rolled number, then unset the Available Resource value.

		if (typeof command === "number") {
			switch (availableResource) {
				case "food":
					food = food + randomNumber;
					availableResource = undefined;
					break;
				case "water":
					water = water + randomNumber;
					availableResource = undefined;
					break;

				// If no Available Resource value is set: set Available Resource to Food if the rolled number is even or Water if the rolled number is odd
				default:
					availableResource = randomNumber % 2 === 0 ? "food" : "water";
					break;
			}
		}

		// Experiment with ternary
		availableResource =
			command === "food"
				? "food"
				: command === "water"
				? "water"
				: availableResource;

		// if (command === "food") {
		// 	availableResource = "food";
		// } else if (command === "water") {
		// 	availableResource = "water";
		// }

		// After the dice roll actions are completed, decrease both food and water by 1. If either is 0 then return false.
		food--;
		water--;
		if (food === 0 || water === 0) return false;

		// Once the Day state passes 7 (the player has lasted 7 days with sufficient supplies), return true.
		day++;
		if (day === 7) return true;
	}
}
console.log(runCommands());
