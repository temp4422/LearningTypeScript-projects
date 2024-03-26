// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.
export function deepDifferences(a: string[][], b: string[][]) {
	if (a.length != b.length) return undefined;

	const newArray: ((string | undefined)[] | undefined)[] = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			newArray.push(undefined);
		} else {
			newArray.push([]);
			for (let j = 0; j < a[i].length; j++) {
				if (a[i][j] != b[i][j]) {
					newArray[i]?.push(undefined);
				} else {
					newArray[i]?.push(a[i][j]);
				}
			}
		}
	}

	return newArray;
}
