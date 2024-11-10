type ColorDefCollect = Obj<Root> & {
	Global: ColorDefGroupGlobal;
	SheetColor: ColorDefGroup;
	Playback: ColorDefGroup;
	PoolDefault: ColorDefGroup;
};

type ColorDefGroup = Obj & {
	[name: string]: ColorDef;
};

type ColorDef = Obj & {
	RGBA: string;
};

type ColorDefGroupGlobal = ColorDefGroup & {
	Text: ColorDef;
	TextDefault: ColorDef;
	TextDark: ColorDef;
	Background: ColorDef;
	BackgroundDark: ColorDef;
	Header: ColorDef;
	AltHeader: ColorDef;
	DefaultCellBackground: ColorDef;
	DefaultCellAltBackground: ColorDef;
	Selected: ColorDef;
	SelectedInverted: ColorDef;
	SelectedEdge: ColorDef;
	InvalidGridPosition: ColorDef;
	MainMultiPatchSelected: ColorDef;
	PartlySelected: ColorDef;
	SelectedPreset: ColorDef;
	PartlySelectedPreset: ColorDef;
	BackgroundSelected: ColorDef;
	BackgroundInvalidGridPosition: ColorDef;
	BackgroundMainMultiPatchSelected: ColorDef;
	BackgroundSelectedInverted: ColorDef;
	Connected: ColorDef;
	Lasso: ColorDef;
	FocusFrame: ColorDef;
	WindowFocus: ColorDef;
	Hover: ColorDef;
	SelectedFrameBackground: ColorDef;
	SelectedRowBorder: ColorDef;
	Pressed: ColorDef;
	ButtonBackground: ColorDef;
	ActiveIcon: ColorDef;
	Inactive: ColorDef;
	Bright: ColorDef;
	TitleGray: ColorDef;
	LabelText: ColorDef;
	IndicatorBar: ColorDef;
	ButtonBackgroundDarker: ColorDef;
	PropertyBackground: ColorDef;
	PropertyBackgroundActive: ColorDef;
	Fixed: ColorDef;
	Icon: ColorDef;
	ButtonIndicatorIcon: ColorDef;
	IconHover: ColorDef;
	RedIndicator: ColorDef;
	DarkRedIndicator: ColorDef;
	GreenIndicator: ColorDef;
	DarkGreenIndicator: ColorDef;
	YellowIndicator: ColorDef;
	OrangeIndicator: ColorDef;
	CyanIndicator: ColorDef;
	UpdateIndicator: ColorDef;
	UpdateAddIndicator: ColorDef;
	UpdateIntegrated: ColorDef;
	UpdateAddIntegrated: ColorDef;
	Warning: ColorDef;
	Error: ColorDef;
	Alert: ColorDef;
	Success: ColorDef;
	RedBackground: ColorDef;
	OverlayBackground: ColorDef;
	GreenBackground: ColorDef;
	Shadow: ColorDef;
	ShadowDark: ColorDef;
	DeskLock: ColorDef;
	Disabled: ColorDef;
	Referenced: ColorDef;
	AfterGlow: ColorDef;
	GlobalPreset: ColorDef;
	SelectivePreset: ColorDef;
	UniversalPreset: ColorDef;
	ForSome: ColorDef;
	ForAll: ColorDef;
	ForNone: ColorDef;
	Lightened: ColorDef;
	Darkened: ColorDef;
	Transparent: ColorDef;
	Transparent25: ColorDef;
	Transparent50: ColorDef;
	Transparent75: ColorDef;
	Parked: ColorDef;
	RemoteInputLock: ColorDef;
	TextViewSelectedRow: ColorDef;
	TextViewBackground: ColorDef;
	TextViewFixedBackground: ColorDef;
	Collected: ColorDef;
	UserChanged: ColorDef;
};
