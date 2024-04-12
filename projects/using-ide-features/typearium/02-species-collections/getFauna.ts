import { MammalsSettings, getMammals } from "./fauna/getMammals";
import { ReptilesSettings, getReptiles } from "./fauna/getReptiles";

export interface FaunaSettings {
	mammals?: MammalsSettings;
	reptiles?: ReptilesSettings;
}

export function getFauna(settings?: FaunaSettings) {
	return [getMammals(settings?.mammals), getReptiles(settings?.reptiles)];
}
