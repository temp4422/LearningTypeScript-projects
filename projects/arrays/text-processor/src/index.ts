// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.
export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function alignTexts(texts: string[], options: AlignmentOptions) {
	// 1. Split lines
	function splitTexts(textToSplit: string[], optionsToSet: AlignmentOptions) {
		const splitTextsResult: string[][] = [];

		for (const line of textToSplit) {
			const splitLine = line.split(" ");
			const newLine = [];

			for (let i = 0; i < splitLine.length; i++) {
				let cut = splitLine[i];
				let nextCut = splitLine[i + 1];

				// Check if expected width not greater then options.width
				if (nextCut && cut.length + nextCut.length < optionsToSet.width) {
					cut = cut + " " + nextCut;
					i++;
				}

				newLine.push(cut);
			}

			splitTextsResult.push(newLine); // push line of cuts
		}

		return splitTextsResult;
	}
	const splitTextsResult = splitTexts(texts, options);

	// 2. Align lines
	function alignLines(splitedText: string[][], optionsToSet: AlignmentOptions) {
		const alignLinesResult: string[][] = [];

		for (const line of splitedText) {
			const newLine = []; // Also this reinitialize (clear) array  for next iteration
			for (let i = 0; i < line.length; i++) {
				let cut = line[i];

				// Align
				if (!optionsToSet.align) cut = cut.padEnd(optionsToSet.width);
				if (optionsToSet.align === "left") cut = cut.padEnd(optionsToSet.width);
				if (optionsToSet.align === "right")
					cut = cut.padStart(optionsToSet.width);
				if (optionsToSet.align === "middle") {
					if (!cut.length) cut = cut.padEnd(optionsToSet.width); // If empty string
					for (let i = 0; i < cut.length; i++) {
						// Add 1 pad on each iteration
						//prettier-ignore
						if (cut.length < optionsToSet.width) cut = cut.padEnd(cut.length + 1);
						//prettier-ignore
						if (cut.length < optionsToSet.width) cut = cut.padStart(cut.length + 1);
					}
				}
				// Return cut
				newLine.push(cut);
			}
			// Return line
			alignLinesResult.push(newLine); // push line of cuts
		}

		return alignLinesResult;
	}
	const alignLinesResult = alignLines(splitTextsResult, options);
	console.log(alignLinesResult);

	// 3. Return result
	return alignLinesResult;
}

// alignTexts(["ab c d"], { width: 3 }); // Output: [["ab ", "c d"]]
// alignTexts(["ab cd", "abc def", "a bc def"], { align: "right", width: 4 })
// alignTexts(["a", "ab", "abc", "abcd"], { align: "middle", width: 4 }); // [[" a  "], [" ab "], ["abc "], ["abcd"]]
// alignTexts(["abc def", "abc def ghi"], { align: "middle", width: 5 });
// alignTexts(["ab de", "abc def"], { width: 5 }); // [["ab de"], ["abc  ", "def  "]]
// alignTexts([""], { align: "middle", width: 2 });
