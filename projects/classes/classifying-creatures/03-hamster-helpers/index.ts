// Write your type and classes here! ✨
// You'll need to export the classes so the tests can run them.

//prettier-ignore
export type SmallPetFood = 'bugs'| 'fruits'| 'insects'| 'plants'| 'seeds'| 'vegetables'

// 'abstract' create a base class that doesn’t itself declare the implementation of some methods, but instead expects a subclass to provide them.
export abstract class SmallFurryPet {
	readonly species: string;
	protected happiness: number;

	constructor(species: string) {
		this.species = species;
		this.happiness = 0;
	}

	abstract eats(food: SmallPetFood): boolean; // Not real just for comments

	isHappy(): boolean {
		return this.happiness > 0 ? true : false;
	}
}

export class Gerbil extends SmallFurryPet {
	constructor() {
		super("Gerbil");
	}

	dig() {
		this.happiness++;
	}

	eats(food: SmallPetFood) {
		return ["insects", "plants", "seeds", "vegetables"].includes(food);
	}
}

export class Hamster extends SmallFurryPet {
	constructor() {
		super("Hamster");
	}

	run() {
		this.happiness++;
	}

	eats() {
		return true;
	}
}
