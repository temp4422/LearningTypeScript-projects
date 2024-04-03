// Write your zip function here! ✨
// You'll need to export it so the tests can run it.
export function zip<A, B>(a: A[], b: B[]) {
	const result: (A | B)[] = []; // alternating elements from the two arrays
	let max = Math.max(a.length, b.length);
	let i = 0;

	while (i < max) {
		if (a[i]) result.push(a[i]);
		if (b[i]) result.push(b[i]);
		i++;
	}

	return result;
}

// zip(["a", "b", "c", "d"], [1, 2]); // ['a', 1, 'b', 2, 'c', 'd']
