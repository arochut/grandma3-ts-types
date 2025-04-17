type PresetFamilyType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 21 | 22 | 23 | 24 | 25;

type PresetPools = Obj<DataPoolClass, Presets> & {
	[1]: Presets;
	[2]: Presets;
	[3]: Presets;
	[4]: Presets;
	[5]: Presets;
	[6]: Presets;
	[7]: Presets;
	[8]: Presets;
	[9]: Presets;
	[21]: Presets;
	[22]: Presets;
	[23]: Presets;
	[24]: Presets;
	[25]: Presets;
} & {
	Dimmer : Presets;
	Position : Presets;
	Gobo : Presets;
	Color : Presets;
	Beam: Presets;
	Focus: Presets;
	Control: Presets;
	Shapers: Presets;
	Video: Presets;
};
type Presets = Obj<PresetPools, Preset>;
type PresetMode = 'Universal' | 'Global' | 'Selective';
type PresetProps = ObjProps & {
	appearance: Appearance;
	scribble: Scribble;
	storedData: PresetMode;
} & MAtrickOnlyProps;
type Preset = Obj<PresetPools, Recipe, PresetProps> & {};
