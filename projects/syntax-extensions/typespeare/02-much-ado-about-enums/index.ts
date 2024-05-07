import { Colors } from "./colors";
import { rhymes } from "./rhymes";

export function makeRhyme(color: Colors) {
	const [third, fourth] = rhymes[color];

	console.log(`Roses are red,`);
	console.log(`\tviolets are ${color}.`);
	console.log(`${third},`);
	console.log(`\t${fourth}.`);
	console.log("");
}

makeRhyme(Colors.Blue);
makeRhyme(Colors.Red);
makeRhyme(Colors.Yellow);
