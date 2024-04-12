// Refactor here! ✨

import { FaunaSettings } from "./getFauna";
import { getFauna } from "./getFauna";
import { FloraSettings } from "./getFlora";
import { getFlora } from "./getFlora";
import { onlyTruthy } from "./utils/onlyTruthy";

export interface EverythingSettings {
	fauna?: FaunaSettings;
	flora?: FloraSettings;
}

export function getEverything(settings?: EverythingSettings) {
	return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora));
}
