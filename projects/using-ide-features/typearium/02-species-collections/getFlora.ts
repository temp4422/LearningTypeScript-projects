import { FlowersSettings, getFlowers } from "./flora/getFlowers";
import { TreesSettings, getTrees } from "./flora/getTrees";

export interface FloraSettings {
	flowers?: FlowersSettings;
	trees?: TreesSettings;
}

export function getFlora(settings?: FloraSettings) {
	return [getFlowers(settings?.flowers), getTrees(settings?.trees)];
}
