// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.
export type MergeArray = (string | undefined)[];

export function shallowDifferences(
	a: string[],
	b: string[]
): MergeArray | undefined {
	if (a.length != b.length) return undefined;

	const newArr: MergeArray = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] != b[i]) newArr.push(undefined);
		else newArr.push(a[i]);
	}

	return newArr;
}
