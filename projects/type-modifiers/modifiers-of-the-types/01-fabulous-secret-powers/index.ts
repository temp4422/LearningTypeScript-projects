import { characters } from "./characters";

// Write your announceCharacter function here! ✨
// You'll need to export it so the tests can run it.

export type Character = {
	name: string;
	powers: string[];
	side: "good" | "evil";
};

export function announceCharacter(rawCharacter: string) {
	const parsedCharacter = JSON.parse(rawCharacter) as Character;

	console.log(`I am ${parsedCharacter.name}.`);
	console.log(`My powers are: ${parsedCharacter.powers.join(", ")}.`);
	console.log(`I am ${parsedCharacter.side}.`);

	return parsedCharacter;
}

// const char1 = characters[2];
// const result = announceCharacter(char1);
