// Write your groupRestaurants function here! ✨
// You'll need to export it so the tests can run it.
export interface SingleRestaurant {
	city: string;
	name: string;
}

export type Restaurants = SingleRestaurant[];

export interface GroupedRestaurants {
	[i: string]: string[];
}

export function groupRestaurants(restaurants: Restaurants) {
	const result: GroupedRestaurants = {};

	for (const { city, name } of restaurants) {
		if (result[city]) {
			result[city].push(name);
		} else {
			result[city] = [name];
		}
	}

	return result;
}

const rests = [
	{ city: "Troy", name: "Muddaddy Flats" },
	{ city: "Albany", name: "Bombers" },
	{ city: "Troy", name: "Nighthalks" },
];

groupRestaurants(rests);
