// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.
// function cipher(string: string): string {
// 	return "string";
// }

export type Cipher = (string: string) => string;

export function createCipher(cipher: Cipher) {
	return (string: string) => {
		let returnString = "";

		for (let i = 0; i < string.length; i++) {
			returnString += cipher(string[i]);
		}

		return returnString;
	};
}
