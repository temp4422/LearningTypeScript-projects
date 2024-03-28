// Write your describeLandmark function here! ✨
// You'll need to export it so the tests can run it.
export interface Landmark {
	name: string;
	type: string;
	[key: string]: any; // Any property
}

export function describeLandmark(landmark: Landmark) {
	const output = `${landmark.name} is a ${landmark.type} in Upstate New York.`;

	let type;
	switch (landmark.type) {
		case "fort":
			// nothing: don't include a second line
			break;
		case "lake":
			type = `\nIt covers ${landmark.miles} square miles of water.`;
			break;
		case "lighthouse":
			type = `\nIt was first lit in ${landmark.lit} and is ${landmark.height} feet high.`;
			break;
		case "mountain":
			type = `\nIts peak is ${landmark.height} feet high.`;
			break;
		case "park":
			type = `\nIt covers ${landmark.acres} square acres.`;
			break;
		case "river":
			type = `\nIt flows for ${landmark.length} miles and is ${landmark.depth} feet deep at its deepest.`;
			break;
		case "waterfall":
			type = `\nIt is ${landmark.height} feet high.`;
			break;
		default:
			throw new Error("No type available!");
			break;
	}

	if (!type) return output;
	return output + type;
}

const testLandmark = {
	name: "Lake George",
	type: "lake",
	miles: 44,
	height: 22,
};
// const testLandmark = {
// 	name: "Fort Brewerton",
// 	type: "fort",
// };

console.log(describeLandmark(testLandmark));
