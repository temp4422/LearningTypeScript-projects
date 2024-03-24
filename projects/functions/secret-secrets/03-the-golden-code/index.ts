// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

export type Settings = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker({
	attempts,
	makeGuess,
	validateGuess,
}: Settings) {
	return function (text: string) {
		for (let i = 0; i < attempts; i++) {
			const guess = makeGuess(text, i);
			if (validateGuess(guess)) return guess;
		}
		return undefined;
	};
}
