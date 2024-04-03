// Write your unique function here! ✨
// You'll need to export it so the tests can run it.
export function unique<T>(...items: T[][]) {
	const set = new Set();

	for (const array of items) {
		for (let i = 0; i < array.length; i++) {
			set.add(array[i]);
		}
	}

	return Array.from(set);
}

// unique(["a", "b"], ["b", "c", "a"]); // ['a', 'b', 'c']
