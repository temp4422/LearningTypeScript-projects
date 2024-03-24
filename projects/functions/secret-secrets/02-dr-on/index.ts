// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.
export type Cipher = (character: string) => string;

export function createAdvancedCipher(
	onVowel: Cipher,
	onConsonant: Cipher,
	onPunctuation: Cipher
) {
	return function (text: string) {
		let returnString = "";

		for (const character of text) {
			if (character.match(/[aeiou]/i)) {
				returnString += onVowel(character);
			} else if (character.match(/[bcdfghjklmnpqrstvwxyz]/i)) {
				returnString += onConsonant(character);
			} else {
				returnString += onPunctuation(character);
			}
		}

		return returnString;
	};
}
