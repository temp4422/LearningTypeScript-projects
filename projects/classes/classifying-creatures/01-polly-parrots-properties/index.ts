// Write your Parrot class here! ✨
// You'll need to export it so the tests can run it.
export class Parrot {
	#name: string;
	#phrase: string[];

	constructor(name: string) {
		this.#name = name;
		this.#phrase = [`${this.#name} wants a cracker!`];
	}

	announce() {
		return `Squawk! I'm ${this.#name}!`;
	}
	learn(newPhrase: string) {
		this.#phrase.push(newPhrase);
	}
	speak() {
		let randomIndex = Math.floor(Math.random() * this.#phrase.length);
		return this.#phrase.at(randomIndex);
	}
}

// const Polly = new Parrot("Polly");
// console.log(Polly);
// console.log(Polly.announce());
// console.log(Polly.speak());
