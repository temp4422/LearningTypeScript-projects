// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.
export interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: "song";
}

export interface Album {
	songs: Song[];
	type: "album";
}

export interface Playlist {
	resolve(): Song[];
	type: "playlist";
}

export type PlaylistItem = (Album | Song | Playlist)[];

export interface UnrolledPlaylist {
	artists: {
		[i: string]: string[];
	};
	songs: string[];
	time: number;
}

export function unrollPlaylist(items: PlaylistItem): UnrolledPlaylist {
	const artists: { [i: string]: string[] } = {};
	const songs: string[] = [];
	let time: number = 0;

	function addSong(song: Song) {
		const songArtists =
			typeof song.artist === "string" ? [song.artist] : song.artist;

		for (const artist of songArtists) {
			// if (!artists[artist]) artists[artist] = [];
			// Nullish coalescing assignment
			artists[artist] ??= [];
			artists[artist].push(song.name);
		}

		time += song.length;
		songs.push(song.name);
	}

	for (const item of items) {
		switch (item.type) {
			case "song":
				addSong(item);
				break;

			case "album":
				item.songs.forEach(addSong);
				break;

			case "playlist":
				item.resolve().forEach(addSong);
				break;
		}
	}

	const resultPlaylist: UnrolledPlaylist = { artists, songs, time };
	return resultPlaylist;
}

// TEST DATA START
const inputSong = [
	{
		artist: ["Queen"],
		length: 355,
		name: "Bohemian Rhapsody",
		type: "song",
	},
];
const outputSong = {
	artists: { Queen: ["Bohemian Rhapsody"] },
	songs: ["Bohemian Rhapsody"],
	time: 355,
};
const inputAlbum = [
	{
		songs: [
			{
				artist: ["Queen"],
				length: 223,
				name: "Death On Two Legs (Dedicated to...)",
				type: "song",
			},
			{
				artist: "Queen",
				length: 68,
				name: "Lazing on a Sunday Afternoon",
				type: "song",
			},
			{
				artist: ["David Bowie", "Queen"],
				length: 248,
				name: "Under Pressure",
				type: "song",
			},
		],
		type: "album",
	},
];
const outputAlbum = {
	artists: {
		"David Bowie": ["Under Pressure"],
		Queen: [
			"Death On Two Legs (Dedicated to...)",
			"Lazing on a Sunday Afternoon",
			"Under Pressure",
		],
	},
	songs: [
		"Death On Two Legs (Dedicated to...)",
		"Lazing on a Sunday Afternoon",
		"Under Pressure",
	],
	time: 539,
};
const inputPlaylist = [
	{
		resolve: () => [
			{
				artist: ["Queen"],
				length: 223,
				name: "Death On Two Legs (Dedicated to...)",
				type: "song",
			},
			{
				artist: "Queen",
				length: 68,
				name: "Lazing on a Sunday Afternoon",
				type: "song",
			},
			{
				artist: ["David Bowie", "Queen"],
				length: 248,
				name: "Under Pressure",
				type: "song",
			},
		],
		type: "playlist",
	},
];
const outputPlaylist = {
	artists: {
		"David Bowie": ["Under Pressure"],
		Queen: [
			"Death On Two Legs (Dedicated to...)",
			"Lazing on a Sunday Afternoon",
			"Under Pressure",
		],
	},
	songs: [
		"Death On Two Legs (Dedicated to...)",
		"Lazing on a Sunday Afternoon",
		"Under Pressure",
	],
	time: 539,
};
// TEST DATA END

// MY TEST CASES NOT WORKING! ❌
// console.log(unrollPlaylist(inputSong));
// console.log(unrollPlaylist(inputAlbum));
// console.log(unrollPlaylist(inputPlaylist));
