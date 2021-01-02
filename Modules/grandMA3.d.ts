// Based on https://github.com/hossimo/GMA3Plugins/wiki/Echo

/// <reference lib="es2015.iterable" />

/** @noSelfInFile */

declare function AddIPAddress(...args: any): any;
declare function AddonVars(...args: any): any;
declare function BuildDetails(...args: any): any;
declare function CheckDMXCollision(...args: any): any;
declare function CheckFIDCollision(...args: any): any;
declare function CloseAllOverlays(...args: any): any;
declare function CloseUndo(...args: any): any;
declare function Cmd(...args: any): any;
declare function CmdIndirect(...args: any): any;
declare function CmdIndirectWait(...args: any): any;
declare function CmdObj(...args: any): any;
declare function Confirm(...args: any): any;
declare function CreateUndo(...args: any): any;
declare function CurrentExecPage(...args: any): any;
declare function CurrentProfile(...args: any): any;
declare function CurrentUser(...args: any): any;
declare function DataPool(...args: any): any;
declare function DefaultDisplayPositions(...args: any): any;
declare function DeleteIPAddress(...args: any): any;
declare function DelVar(...args: any): any;
declare function DeskLocked(...args: any): any;
declare function DirList(...args: any): any;
declare function Echo(...args: any): any;
declare namespace Enums {
	enum AutoSaveMode {
		'120 Minutes' = 5,
		'15 Minutes' = 2,
		'30 Minutes' = 3,
		'5 Minutes' = 1,
		'Off' = 0,
		'60 Minutes' = 4,
		'360 Minutes' = 6,
	}
	enum CueCopySrc {
		'Status' = 1,
		'Look' = 2,
		'Content' = 0,
	}
	enum PlaybackMaster {
		'Playback20' = 19,
		'Playback41' = 40,
		'Playback32' = 31,
		'Playback34' = 33,
		'Playback11' = 10,
		'Playback15' = 14,
		'Playback7' = 6,
		'Playback30' = 29,
		'Playback48' = 47,
		'Playback26' = 25,
		'Playback38' = 37,
		'Playback21' = 20,
		'Playback9' = 8,
		'Playback14' = 13,
		'Playback19' = 18,
		'Playback8' = 7,
		'Playback37' = 36,
		'Playback6' = 5,
		'Playback50' = 49,
		'Playback46' = 45,
		'Playback49' = 48,
		'Playback47' = 46,
		'Playback28' = 27,
		'Playback45' = 44,
		'Playback5' = 4,
		'Playback43' = 42,
		'Playback44' = 43,
		'None' = 255,
		'Playback4' = 3,
		'Playback12' = 11,
		'Playback1' = 0,
		'Playback40' = 39,
		'Playback35' = 34,
		'Playback42' = 41,
		'Playback10' = 9,
		'Playback18' = 17,
		'Playback25' = 24,
		'Playback24' = 23,
		'Playback36' = 35,
		'Playback22' = 21,
		'Playback23' = 22,
		'Playback31' = 30,
		'Playback13' = 12,
		'Playback33' = 32,
		'Playback3' = 2,
		'Playback39' = 38,
		'Playback16' = 15,
		'Playback2' = 1,
		'Playback29' = 28,
		'Playback17' = 16,
		'Playback27' = 26,
	}
	enum EncoderRing {
		'Inner' = 0,
		'Outer' = 1,
		'Both' = 2,
	}
	enum LayoutGridStyle {
		'Off' = 0,
		'Lines' = 1,
		'Dots' = 2,
	}
	enum BeamType {
		'None' = 2,
		'Spot' = 1,
		'Rectangle' = 3,
		'Wash' = 0,
	}
	enum AssignmentProgExecBlindButtonFunctions {
		'Off' = 8,
		'Empty' = 0,
		'Toggle' = 14,
		'Flash' = 1,
		'' = 0,
		'On' = 7,
	}
	enum FrameFormatDefault {
		'30 fps' = 30,
		'25 fps' = 25,
		'24 fps' = 24,
		'Seconds' = 100,
		'60 fps' = 60,
		'<Default>' = 0,
	}
	enum AlignmentV {
		'Center' = 0,
		'Top' = 1,
		'Bottom' = 2,
	}
	enum ScrollType {
		'Vertical' = 0,
		'Horizontal' = 1,
	}
	enum AxisSystem {
		'Stage' = 0,
		'Object' = 1,
	}
	enum SpecialCycle {
		'None' = 0,
		'Time' = 1,
		'If' = 3,
		'Channel' = 2,
	}
	enum ArrangementMarcType {
		'Dynamic' = 1,
		'Small' = 0,
	}
	enum SpeedReadoutMode {
		'Hertz' = 0,
		'Seconds' = 2,
		'BPM' = 1,
	}
	enum GelGridType {
		'List' = 0,
		'Small Icons' = 1,
		'Big Icons' = 2,
	}
	enum BlackListPacketNames {
		'pu' = 560,
		'system_x64' = 560,
		'onpc_mac' = 560,
		'fixtures' = 560,
		'bootloader_x64' = 560,
		'console' = 560,
		'npu_compat' = 560,
		'gma2_compat' = 560,
		'utils' = 560,
		'gma2_manuals' = 560,
		'gma2_ffmpeg' = 560,
		'luatest' = 560,
		'gma2_resource' = 560,
		'web_daemon' = 560,
		'demoshows' = 560,
		'manuals' = 560,
		'gdtf_mvr_addon' = 560,
		'onpc_windows' = 560,
	}
	enum ProgLayer {
		'DMX' = 18,
		'Decel' = 12,
		'MAgic' = 5,
		'Transition' = 13,
		'Phase' = 4,
		'Absolute' = 9,
		'Speed' = 3,
		'Output' = 19,
		'Relative' = 10,
		'Width' = 14,
		'CueIDEffect' = 17,
		'CueID' = 16,
		'Accel' = 11,
		'Delay' = 2,
		'Fade' = 1,
	}
	enum DmxSheetSettingsSelected {
		'Selected' = 4294967295,
	}
	enum ColorSpaceMode {
		'sRGB' = 0,
		'ANSI' = 2,
		'Custom' = 3,
		'ProPhoto' = 1,
	}
	enum MibPreferenceLevel {
		'Normal(50)' = 50,
		'Bad(25)' = 25,
		'Best(100)' = 100,
		'Worst(1)' = 1,
		'Worst' = 1,
		'Normal' = 50,
		'Best' = 100,
		'Bad' = 25,
		'Good(75)' = 75,
		'Good' = 75,
		'Never(0)' = 0,
		'Never' = 0,
	}
	enum PatchType {
		'Coarse' = 1,
		'Ultra' = 3,
		'' = 0,
		'Fine' = 2,
	}
	enum TimecodeTool {
		'Operate' = 0,
		'Add' = 2,
		'Select' = 1,
		'Move' = 4,
		'Resize' = 5,
		'Delete' = 3,
	}
	enum EncoderType {
		'WheelMaster' = 0,
		'Inside4' = 11,
		'Outside1' = 6,
		'Outside5' = 14,
		'Inside5' = 13,
		'TiltTrackpad' = 4,
		'Inside2' = 7,
		'Outside2' = 8,
		'Executor' = 16,
		'PanTrackpad' = 3,
		'Outside4' = 12,
		'PanTiltFollow' = 2,
		'ColorPicker' = 1,
		'Inside3' = 9,
		'Inside1' = 5,
		'Outside3' = 10,
	}
	enum ChangeLevel {
		'Create' = 5,
		'Little' = 9,
		'Full' = 6,
		'Property' = 8,
		'None' = 10,
		'Remove' = 1,
		'Structural' = 7,
		'File' = 0,
		'Exchange' = 3,
		'Insert' = 2,
		'Delete' = 4,
	}
	enum CalculatorMode {
		'fps24' = 17,
		'Percent' = 15,
		'SpeedBPM' = 7,
		'Hex24' = 14,
		'Dec24' = 11,
		'SpeedHz' = 6,
		'Dec8' = 9,
		'Hex8' = 12,
		'Double' = 0,
		'Dec16' = 10,
		'Decimal' = 1,
		'fps60' = 20,
		'fps30' = 19,
		'Hex16' = 13,
		'Seconds' = 5,
		'Hex' = 2,
		'SpeedSec' = 8,
		'fps25' = 18,
		'JointTime' = 16,
	}
	enum PhaserEncoderFunction {
		'Move & Size' = 0,
	}
	enum MessageCategory {
		'Undefined' = 0,
		'Cmdline' = 2,
		'Chat' = 6,
		'Manet' = 4,
		'Power' = 3,
		'USB' = 5,
		'System' = 1,
	}
	enum TimeNone {
		'None' = 9223372036854775807,
	}
	enum SoundValues {
		'InvBand6' = 20,
		'Band1' = 4,
		'Band6' = 9,
		'Band7' = 10,
		'InvBand5' = 19,
		'Band3' = 6,
		'InvMid' = 13,
		'InvHigh' = 14,
		'Band2' = 5,
		'InvBand7' = 21,
		'Mid' = 2,
		'InvBass' = 12,
		'All' = 0,
		'Bass' = 1,
		'InvBand3' = 17,
		'High' = 3,
		'InvBand1' = 15,
		'Band5' = 8,
		'InvBand4' = 18,
		'InvBand2' = 16,
		'InvAll' = 11,
		'Band4' = 7,
	}
	enum TimecodeSelectionTarget {
		'TimeRanges' = 1,
		'Events' = 0,
	}
	enum CameraType {
		'Front/Left' = 2,
		'Front' = 1,
		'Right' = 7,
		'Back/Right' = 6,
		'Auto' = 0,
		'Left' = 3,
		'Top' = 9,
		'Back/Left' = 4,
		'Front/Right' = 8,
		'Back' = 5,
	}
	enum DynamicPresetPool {
		'Dynamic' = 4294967295,
	}
	enum SMPTEMode {
		'Out' = 1,
		'In' = 0,
	}
	enum Master {
		'Playback20' = 60,
		'Playback41' = 81,
		'Playback23' = 63,
		'Playback34' = 74,
		'Playback11' = 51,
		'Playback15' = 55,
		'GrandSoundIn' = 23,
		'BPM' = 40,
		'Playback30' = 70,
		'Playback26' = 66,
		'GrandSoundOut' = 22,
		'DefaultTime' = 10,
		'DefaultXFade' = 1,
		'GrandSoundFade' = 24,
		'DefaultSolo' = 9,
		'DefaultXFadeB' = 3,
		'Playback45' = 85,
		'Playback5' = 45,
		'Playback44' = 84,
		'Playback43' = 83,
		'Playback12' = 52,
		'Playback1' = 41,
		'Playback35' = 75,
		'GrandHighlight' = 13,
		'DefaultMaster' = 0,
		'Playback25' = 65,
		'Speed13' = 37,
		'DefaultHighlight' = 7,
		'Playback22' = 62,
		'DefaultRate' = 5,
		'Playback13' = 53,
		'Playback3' = 43,
		'Playback39' = 79,
		'Playback16' = 56,
		'GrandSpeed' = 17,
		'Playback31' = 71,
		'Playback27' = 67,
		'DefaultTemp' = 4,
		'Speed9' = 33,
		'Playback36' = 76,
		'Speed7' = 31,
		'Playback50' = 90,
		'Speed14' = 38,
		'Speed5' = 29,
		'Playback49' = 89,
		'Playback48' = 88,
		'Speed3' = 27,
		'Playback2' = 42,
		'DefaultXFadeA' = 2,
		'Playback21' = 61,
		'Speed4' = 28,
		'Speed12' = 36,
		'Playback24' = 64,
		'Playback14' = 54,
		'Playback19' = 59,
		'Playback46' = 86,
		'DefaultLowlight' = 8,
		'Speed1' = 25,
		'Playback9' = 49,
		'Playback40' = 80,
		'Playback7' = 47,
		'Playback6' = 46,
		'Playback28' = 68,
		'Speed6' = 30,
		'Speed15' = 39,
		'Playback47' = 87,
		'Speed10' = 34,
		'None' = 255,
		'Playback37' = 77,
		'Playback8' = 48,
		'Playback4' = 44,
		'GrandSolo' = 15,
		'Playback38' = 78,
		'Playback42' = 82,
		'Playback10' = 50,
		'Playback18' = 58,
		'Speed8' = 32,
		'GrandRate' = 16,
		'Playback33' = 73,
		'Playback32' = 72,
		'GrandProgramTime' = 18,
		'GrandProgramSpeed' = 20,
		'Playback29' = 69,
		'GrandMaster' = 11,
		'GrandWorld' = 12,
		'GrandExecTime' = 19,
		'Speed11' = 35,
		'GrandLowlight' = 14,
		'Speed2' = 26,
		'Playback17' = 57,
		'DefaultSpeed' = 6,
	}
	enum PultType {
		'Any' = 0,
		'Conventional' = 1,
		'Web' = 2,
	}
	enum ColorMixMode {
		'Rec.709' = 1,
		'Plasa' = 3,
		'Fixture Type' = 0,
		'Rec.2020' = 2,
	}
	enum MatricksGroupNone {
		'None' = 0,
	}
	enum StoreMode {
		'Merge' = 2,
		'Remove' = 3,
		'Release' = 4,
		'Ask' = -1,
		'Abort' = 0,
		'CreateSecondCue' = 5,
		'Overwrite' = 1,
	}
	enum RealtimeCmdType {
		'SoundToLight' = 5,
		'Midi' = 7,
		'Key' = 0,
		'Encoder' = 2,
		'OwO' = 3,
		'DCRemote' = 6,
		'TimeCode' = 4,
		'Fader' = 1,
	}
	enum Month {
		'November' = 10,
		'March' = 2,
		'September' = 8,
		'February' = 1,
		'October' = 9,
		'May' = 4,
		'April' = 3,
		'June' = 5,
		'December' = 11,
		'July' = 6,
		'January' = 0,
		'August' = 7,
	}
	enum DMXMergeMode {
		'LowTP' = 3,
		'Prio' = 1,
		'Off' = 0,
		'HTP' = 2,
	}
	enum TrackLayerAuto {
		'Decel' = 12,
		'Phase' = 4,
		'Absolute' = 9,
		'Speed' = 3,
		'Auto' = -1,
		'Transition' = 13,
		'Width' = 14,
		'Relative' = 10,
		'MAgic' = 5,
		'Accel' = 11,
		'Delay' = 2,
		'Fade' = 1,
	}
	enum TrackEditApplyFor {
		'All Parts in sel. Cue(s)' = 1,
		'Selected Part(s)' = 0,
		'All Cues/Parts' = 2,
	}
	enum DmxSheetCellType {
		'Patched1' = 1,
		'NotPatched' = 0,
		'PartlySelected' = 5,
		'SelectedInverted' = 4,
		'Selected' = 3,
		'Patched2' = 2,
		'Parked' = 7,
		'NotRequested' = 6,
	}
	enum MatricksIndexNone {
		'None' = -1,
	}
	enum DispView {
		'CPU' = 2,
		'Memory' = 3,
		'Realtime' = 0,
		'Timing' = 1,
		'Details' = 8,
		'Fan' = 7,
		'Sys Temp' = 6,
		'GPU Temp' = 5,
		'CPU Temp' = 4,
	}
	enum MatricksTabs {
		'Z' = 2,
		'Y' = 1,
		'X' = 0,
		'Shuffle' = 3,
	}
	enum AssignmentMasterFaderOnlyFunctions {
		'Empty' = 0,
		'' = 0,
		'Master' = 27,
	}
	enum TestBlockType {
		'root' = 1,
		'ui' = 0,
		'rt' = 2,
		'lua' = 3,
	}
	enum TimecodeEncoderFunction {
		'Edit' = 0,
	}
	enum DmxSheetHeaderType {
		'' = 0,
	}
	enum RDMCommandClass {
		'DISCOVER_RESP' = 17,
		'SET' = 48,
		'SET_RESP' = 49,
		'GET' = 32,
		'DISCOVER' = 16,
		'GET_RESP' = 33,
	}
	enum MIDIMode {
		'Out' = 1,
		'In' = 0,
		'Through' = 2,
	}
	enum RDMPidValueOnOff {
		'Off' = 0,
		'On' = 1,
	}
	enum DmxSheetSettingsViewMode {
		'Sheet' = 0,
	}
	enum ChildrenFillPolicy {
		'RowFirst' = 1,
		'Default' = 0,
		'ColumnFirst' = 2,
	}
	enum ArtNetDataMode {
		'Auto' = 2,
		'Unicast' = 1,
		'Input' = 3,
		'Broadcast' = 0,
	}
	enum PresetMode {
		'Selective' = 0,
		'Global' = 1,
		'Universal' = 2,
	}
	enum TimeCodeSource {
		'Smpte' = 1,
		'Midi' = 0,
	}
	enum DmxSheetSettingsLevelbar {
		'Background' = 1,
		'Bar' = 2,
		'Off' = 0,
	}
	enum TransitionMode {
		'Slow' = 2,
		'Fast' = 3,
		'Sinus' = 1,
		'Linear' = 0,
	}
	enum RDMParameterCommand {
		'None' = 0,
		'CC_GET' = 1,
		'CC_GET_SET' = 3,
		'CC_SET' = 2,
	}
	enum ConnectorType {
		'CEE_32A' = 57,
		'DB25' = 19,
		'CENT36' = 34,
		'DIN5' = 25,
		'SCDUP' = 42,
		'PowerconTRUE1' = 70,
		'CEE_32A_2P' = 58,
		'LCDUP' = 41,
		'PS2' = 39,
		'EDAC20' = 26,
		'DB9' = 17,
		'L6_20' = 77,
		'Edison' = 53,
		'EDAC90' = 28,
		'Eieland' = 54,
		'CENT24' = 35,
		'Powerlock' = 62,
		'NAC3FCA' = 68,
		'CEE_16A_2P_110' = 56,
		'CEE_16A_2P' = 55,
		'NL4' = 45,
		'HDMI' = 38,
		'Powerlock_120A' = 63,
		'Powerlock_800A' = 66,
		'MDIN4' = 9,
		'TL_ST' = 40,
		'CEE_7_7' = 51,
		'DB37' = 20,
		'DisplayPort' = 36,
		'DL96' = 30,
		'IEE488' = 32,
		'HD25' = 23,
		'IEC_60320_C13_14' = 52,
		'MDIN5' = 10,
		'IEC_60320_C7_C8' = 50,
		'CEE_32A_2P_110' = 59,
		'TBLK' = 1,
		'DIN56905' = 81,
		'RCA' = 6,
		'CACOM' = 46,
		'SC' = 43,
		'MDIN6' = 11,
		'USB' = 47,
		'XLR4' = 13,
		'CENT50' = 33,
		'KRN' = 3,
		'XLR3' = 12,
		'DB50' = 21,
		'XLR5' = 14,
		'TAG' = 2,
		'NAC3FCB' = 69,
		'HUBBEL_6_4' = 80,
		'Powerlock_660A' = 65,
		'Socapex_9' = 74,
		'Socapex_7' = 73,
		'EDAC120' = 29,
		'Socapex_16' = 72,
		'SVIDEO' = 8,
		'STJ' = 4,
		'F_CON' = 49,
		'EDAC56' = 27,
		'ST' = 44,
		'SCART' = 7,
		'HAN_4' = 76,
		'RJ45' = 15,
		'Camlock' = 67,
		'SCSI68' = 31,
		'N_CON' = 48,
		'BNC' = 0,
		'DVI' = 37,
		'MSTJ' = 5,
		'HD15' = 22,
		'RJ11' = 16,
		'CEE_63A' = 60,
		'DB15' = 18,
		'Stagepin' = 79,
		'HAN_16' = 75,
		'Powerlock_400A' = 64,
		'CEE_125A' = 61,
		'PowerCONTRUE1TOP' = 71,
		'L15_30' = 78,
		'DIN3' = 24,
	}
	enum CueCopyDst {
		'Overwrite: Default Existing' = 2,
		'Overwrite: Release Existing' = 1,
		'Merge' = 0,
	}
	enum MatricksShuffleNone {
		'None' = 0,
	}
	enum DimmerWheelResolution {
		'Fine' = 2,
		'Coarse' = 1,
		'Normal' = 0,
	}
	enum UsbProductID {
		'grandMA3 MA-Key (Viz-Key)' = 46353,
		'grandMA3 DIN-Rail node' = 46538,
		'grandMA3 xPort node' = 46537,
		'MA NPU 3 DMX Module' = 46529,
		'grandMA3 MA-Key (Blank)' = 46352,
		'grandMA3 Master Module (MM)' = 46531,
		'grandMA3 Control Module' = 46530,
		'grandMA3 CommandWing' = 46536,
		'grandMA3 Compact' = 46534,
		'grandMA3 DMX Module' = 46528,
		'grandMA3 Compact XT' = 46535,
		'grandMA3 IO Node DIN Rail' = 46540,
		'grandMA3 Fader Wing' = 46541,
		'grandMA3 Fader Module Crossfader (MFX)' = 46532,
		'grandMA3 Fader Module Encoder (MFE)' = 46533,
		'grandMA3 IO Node' = 46539,
	}
	enum RDMSensorUnitPrefix {
		'PREFIX_HECTO' = 18,
		'PREFIX_ATTO' = 8,
		'PREFIX_EXA' = 24,
		'PREFIX_DECI' = 1,
		'PREFIX_PETA' = 23,
		'PREFIX_CENTI' = 2,
		'PREFIX_PICO' = 6,
		'PREFIX_YOTTA' = 26,
		'PREFIX_NONE' = 0,
		'PREFIX_ZEPTO' = 9,
		'PREFIX_MICRO' = 4,
		'PREFIX_ZETTA' = 25,
		'PREFIX_YOCTO' = 10,
		'PREFIX_FEMPTO' = 7,
		'PREFIX_KILO' = 19,
		'PREFIX_MILLI' = 3,
		'PREFIX_TERRA' = 22,
		'PREFIX_MEGA' = 20,
		'PREFIX_DECA' = 17,
		'PREFIX_GIGA' = 21,
		'PREFIX_NANO' = 5,
	}
	enum FixtureTypeSourceImport {
		'GDTF' = 2,
		'User' = 3,
		'grandMA3' = 0,
		'grandMA2' = 1,
	}
	enum TrackpadMode {
		'Mouse' = 0,
		'Pan/Tilt' = 1,
	}
	enum OSCMode {
		'UDP' = 0,
		'TCP' = 1,
	}
	enum ImageBackGroundMode {
		'Center' = 4,
		'Crop' = 2,
		'Tile' = 3,
		'Stretch' = 0,
		'Bar' = 1,
	}
	enum ColorSample {
		'CES49' = 48,
		'CES53' = 52,
		'CES81' = 80,
		'CES87' = 86,
		'CES03' = 2,
		'CES32' = 31,
		'CES74' = 73,
		'CES78' = 77,
		'CES68' = 67,
		'CES66' = 65,
		'CES43' = 42,
		'CES15' = 14,
		'CES72' = 71,
		'CES20' = 19,
		'CES92' = 91,
		'CES96' = 95,
		'CES02' = 1,
		'CES18' = 17,
		'CES16' = 15,
		'CES35' = 34,
		'CES38' = 37,
		'CES09' = 8,
		'CES83' = 82,
		'CES41' = 40,
		'CES44' = 43,
		'CES26' = 25,
		'CES28' = 27,
		'CES08' = 7,
		'CES89' = 88,
		'CES17' = 16,
		'CES85' = 84,
		'CES57' = 56,
		'CES59' = 58,
		'CES67' = 66,
		'CES73' = 72,
		'CES33' = 32,
		'CES07' = 6,
		'CES23' = 22,
		'CES30' = 29,
		'CES56' = 55,
		'CES99' = 98,
		'CES39' = 38,
		'CES97' = 96,
		'CES27' = 26,
		'CES06' = 5,
		'CES77' = 76,
		'CES95' = 94,
		'CES11' = 10,
		'CES29' = 28,
		'CES91' = 90,
		'CES46' = 45,
		'CES93' = 92,
		'CES58' = 57,
		'CES05' = 4,
		'CES94' = 93,
		'CES90' = 89,
		'CES45' = 44,
		'CES51' = 50,
		'CES88' = 87,
		'CES69' = 68,
		'CES71' = 70,
		'CES12' = 11,
		'CES84' = 83,
		'CES82' = 81,
		'CES80' = 79,
		'CES79' = 78,
		'CES52' = 51,
		'CES76' = 75,
		'CES61' = 60,
		'CES42' = 41,
		'CES47' = 46,
		'CES70' = 69,
		'CES86' = 85,
		'CES19' = 18,
		'CES65' = 64,
		'CES64' = 63,
		'CES63' = 62,
		'CES21' = 20,
		'CES37' = 36,
		'CES13' = 12,
		'CES60' = 59,
		'CES01' = 0,
		'CES31' = 30,
		'CES54' = 53,
		'CES75' = 74,
		'CES50' = 49,
		'CES14' = 13,
		'CES62' = 61,
		'CES22' = 21,
		'CES24' = 23,
		'CES40' = 39,
		'CES04' = 3,
		'CES36' = 35,
		'CES34' = 33,
		'CES25' = 24,
		'CES98' = 97,
		'CES48' = 47,
		'CES55' = 54,
		'CES10' = 9,
	}
	enum NoName {}
	enum ChannelFrequency {
		//@ts-ignore
		'30' = 1,
		'Slow3' = 5,
		'Slow2' = 4,
		'Slow1' = 3,
		//@ts-ignore
		'15' = 2,
		//@ts-ignore
		'60' = 0,
	}
	enum WheelMode {
		'Incremental' = 1,
		'Prop.-' = 3,
		'Prop.+' = 2,
		'Additive' = 0,
	}
	enum EncoderLinkValues {
		'Single' = 0,
		'Feature' = 1,
	}
	enum LayoutFitType {
		'Canvas' = 1,
		'Elements' = 0,
		'Both' = 2,
	}
	enum MatricksBlockNone {
		'None' = 0,
	}
	enum ProgLayerAuto {
		'DMX' = 18,
		'MAgic' = 5,
		'Decel' = 12,
		'Transition' = 13,
		'Speed' = 3,
		'Phase' = 4,
		'Absolute' = 9,
		'Relative' = 10,
		'Auto' = -1,
		'Output' = 19,
		'Width' = 14,
		'CueIDEffect' = 17,
		'CueID' = 16,
		'Accel' = 11,
		'Delay' = 2,
		'Fade' = 1,
	}
	enum RowOrder {
		'Down Up' = 1,
		'Up Down' = 0,
	}
	enum SequenceCountdown {
		'Off' = 0,
		'All' = 2,
		'Duration' = 1,
	}
	enum BodyQuality3d {
		'None' = 2,
		'Standard' = 0,
		'Simple' = 1,
	}
	enum PhaserEditTool {
		'MovePoint' = 5,
		'AddAbsolute' = 2,
		'SelectForm' = 11,
		'ChangePhase' = 9,
		'ChangeWidth' = 10,
		'Select' = 1,
		'ChangeRotation' = 8,
		'ChangeSize' = 7,
		'AddRelative' = 3,
		'Delete' = 4,
		'MoveArea' = 0,
		'MoveSpline' = 6,
		'ChangeSpeed' = 12,
	}
	enum ConnectionLimitConsole {
		//@ts-ignore
		'2' = 2,
		//@ts-ignore
		'1' = 1,
	}
	enum RDMParameterType {
		'Rdm' = 0,
		'Fixture' = 2,
		'FixtureType' = 1,
	}
	enum SyntaxResult {
		'ExecuteAfter' = 2,
		'Execute' = 3,
		'SyntaxOk' = 0,
		'ExecuteBefore' = 1,
		'AbortBefore' = 4,
		'SyntaxError' = -1,
		'Ignore' = 5,
		'Erase' = 6,
	}
	enum ClockSources {
		'Timecode' = 1,
		'System Clock' = 0,
	}
	enum CmdEventStatus {
		'Off' = 0,
		'On' = 1,
	}
	enum RDMSensorUnit {
		'UNITS_AMPERE_AC_PEAK' = 6,
		'UNITS_METERS_SQUARED' = 13,
		'UNITS_BYTE' = 28,
		'UNITS_METERS_CUBED' = 14,
		'UNITS_NONE' = 0,
		'UNITS_AMPERE_DC' = 5,
		'UNITS_WATT' = 10,
		'UNITS_KILOGRAM' = 11,
		'UNITS_METERS_PER_SECOND' = 16,
		'UNITS_AMPERE_AC_RMS' = 7,
		'UNITS_VOLTS_DC' = 2,
		'UNITS_JOULE' = 19,
		'UNITS_DEGREE' = 22,
		'UNITS_HERTZ' = 8,
		'UNITS_VOLTS_AC_RMS' = 4,
		'UNITS_VOLTS_AC_PEAK' = 3,
		'UNITS_OHM' = 9,
		'UNITS_STERADIAN' = 23,
		'UNITS_SECOND' = 21,
		'UNITS_IRE' = 27,
		'UNITS_METERS' = 12,
		'UNITS_NEWTON' = 18,
		'UNITS_KILOGRAMMES_PER_METER_CUBED' = 15,
		'UNITS_MS' = 128,
		'UNITS_METERS_PER_SECOND_SQUARED' = 17,
		'UNITS_PASCAL' = 20,
		'UNITS_CENTIGRADE' = 1,
		'UNITS_LUX' = 26,
		'UNITS_CANDELA' = 24,
		'UNITS_LUMEN' = 25,
	}
	enum TimeDisplayClockFormat {
		'<Default>' = 0,
		'251:23:45' = 4,
		'10.11:23:45' = 3,
	}
	enum ModalResult {
		'None' = 0,
		'Ok' = 1,
		'Confirm' = 3,
		'Cancel' = 2,
	}
	enum NetworkFilter {
		'Wrong Version' = 3,
		'All' = 0,
		'My Session' = 1,
		'Not My Session' = 2,
	}
	enum FunctionMode {
		'WM_Phase' = 3,
		'WM_Unknown' = 0,
		'WM_2D' = 1,
		'WM_Width' = 4,
		'WM_1D' = 2,
	}
	enum CueCopyDstCmd {
		'Merge' = 0,
		'OverwriteDefault' = 2,
		'OverwriteRelease' = 1,
	}
	enum SequenceLinkType {
		'Selected' = 1,
		'Fixed' = 0,
		'LastGo' = 2,
	}
	enum WeekDayShort {
		'Thu' = 3,
		'Tue' = 1,
		'Wed' = 2,
		'Mon' = 0,
		'Sat' = 5,
		'Fri' = 4,
		'Sun' = 6,
	}
	enum SheetMode {
		'Fixture' = 0,
		'Channel' = 1,
	}
	enum ImageSource {
		'Gobos' = 0,
		'Fixtures' = 1,
		'Custom' = 2,
	}
	enum RDMLampOnMode {
		'LAMP_ON_MODE_ON' = 2,
		'LAMP_ON_MODE_AFTER_CAL' = 3,
		'Manufacturer-Specific Modes' = 128,
		'LAMP_ON_MODE_OFF' = 0,
		'LAMP_ON_MODE_DMX' = 1,
	}
	enum DriveType {
		'Invalid' = 0,
		'RemoteDrive' = 4,
		'Internal' = 1,
		'Removeable' = 2,
		'OldVersion' = 3,
	}
	enum XYZMapping {
		'Z' = 2,
		'Y' = 1,
		'X' = 0,
	}
	enum GestureStatus {
		'None' = 0,
		'Finished' = 3,
		'Updated' = 1,
		'Canceled' = 4,
		'Finishing' = 2,
	}
	enum RotationMode {
		'Single' = 0,
		'Group' = 1,
	}
	enum PlaybacksOff {
		'Keep Playbacks' = 0,
		'Playbacks Off' = 1,
	}
	enum GrandKnob {
		'None' = 4294967295,
		'GrandKnob' = 100,
	}
	enum TransitionType {
		'Fast' = 3,
		'Slow' = 1,
		'Fast+' = 4,
		'Slow+' = 2,
		'SCurve' = 5,
		'Swing+' = 8,
		'Swing' = 7,
		'Swing-' = 6,
		'Linear' = 0,
	}
	enum TimeDisplayFormat {
		'10d11h23m45' = 0,
		'251:23:45' = 3,
		'251h23m45' = 1,
		'10.11:23:45' = 2,
	}
	enum ScrollReason {
		'User' = 1,
		'Automatic' = 0,
	}
	enum LayoutSizePolicy {
		'Fixed' = 0,
		'Stretch' = 1,
		'Content' = 2,
	}
	enum FixedColumns {
		'Auto' = -1,
	}
	enum CueOnly {
		'Cue Only Release New' = 1,
		'Cue Only Default New' = 2,
		'Tracking' = 0,
	}
	enum VirtualKeyCode {
		'PAGE_UP' = 16,
		'X13' = 31,
		'ENCODER_INSIDE5' = 97,
		'PREVIEW' = 13,
		'NUM4' = 71,
		'X8' = 26,
		'GOBACK' = 41,
		'STOMP' = 52,
		'X4' = 22,
		'LEARN' = 43,
		'UNKNOWN' = 0,
		'XKEYS' = 15,
		'X12' = 30,
		'DELETE' = 50,
		'' = 0,
		'BLIND' = 14,
		'MA2' = 2,
		'MOVE' = 48,
		'SEQUENCE' = 59,
		'MA1' = 1,
		'NUM2' = 69,
		'NUM9' = 76,
		'GOTO' = 55,
		'ON' = 46,
		'CHANNEL' = 57,
		'ENCODER_INSIDE4' = 95,
		'NUM7' = 74,
		'ENCODER_INSIDE1' = 89,
		'FIXTURE' = 56,
		'X3' = 21,
		'ENCODER_OUTSIDE1' = 90,
		'DEF_GOBACK' = 39,
		'ESC' = 88,
		'SELFIX' = 7,
		'X11' = 29,
		'DOT' = 80,
		'ASSIGN' = 63,
		'GOBACKFAST' = 44,
		'DEF_GO' = 37,
		'NUM1' = 68,
		'X9' = 27,
		'ENCODER_OUTSIDE2' = 92,
		'THRU' = 78,
		'PAUSE' = 40,
		'OFF' = 47,
		'X7' = 25,
		'NUM3' = 70,
		'X5' = 23,
		'X2' = 20,
		'X16' = 34,
		'X6' = 24,
		'EDIT' = 62,
		'X14' = 32,
		'FULL' = 85,
		'HELP' = 53,
		'SELECT' = 54,
		'STORE' = 66,
		'PLEASE' = 84,
		'NUM6' = 73,
		'PREV' = 3,
		'USER1' = 99,
		'UPDATE' = 65,
		'USER2' = 100,
		'AT' = 82,
		'NUM0' = 67,
		'DEF_PAUSE' = 38,
		'ENCODER_OUTSIDE3' = 94,
		'MENU' = 9,
		'UNDO' = 86,
		'TIME' = 64,
		'SOLO' = 11,
		'X10' = 28,
		'X1' = 19,
		'RESET' = 5,
		'UP' = 6,
		'PRESET' = 61,
		'GROUP' = 58,
		'PLUS' = 77,
		'FADER' = 36,
		'PAGE_DOWN' = 17,
		'CLEAR' = 87,
		'SLASH' = 83,
		'NUM8' = 75,
		'EXEC' = 35,
		'CUE' = 60,
		'ENCODER_INSIDE3' = 93,
		'NUM5' = 72,
		'X15' = 33,
		'LIST' = 18,
		'IF' = 81,
		'HIGH' = 10,
		'NEXT' = 4,
		'FREEZE' = 12,
		'DOWN' = 8,
		'ENCODER_INSIDE2' = 91,
		'ENCODER_OUTSIDE5' = 98,
		'ALIGN' = 51,
		'COPY' = 49,
		'MINUS' = 79,
		'ENCODER_OUTSIDE4' = 96,
		'GOFAST' = 45,
		'GO' = 42,
	}
	enum BeamQuality3d {
		'High Shadow Fancy' = 7,
		'Simple' = 1,
		'None' = -1,
		'Gobo Shadow' = 5,
		'High Shadow' = 6,
		'Line' = 0,
		'Gobo' = 2,
	}
	enum RelationType {
		'Override' = 1,
		'Multiply' = 0,
	}
	enum Update {
		'Add New Content' = 1,
		'Original Content Only' = 0,
	}
	enum ScrollParamValueType {
		'Absolute' = 1,
		'Relative' = 0,
	}
	enum SpeedScale {
		'Mul32' = 5,
		'Div8' = -3,
		'Mul4' = 2,
		'Mul16' = 4,
		'Mul128' = 7,
		'Div64' = -6,
		'Div16' = -4,
		'Mul256' = 8,
		'Div2' = -1,
		'Mul64' = 6,
		'One' = 0,
		'Div32' = -5,
		'Div128' = -7,
		'Mul8' = 3,
		'Mul2' = 1,
		'Div256' = -8,
		'Div4' = -2,
	}
	enum SacnDataMode {
		'Output Multicast' = 0,
		'Input Unicast' = 3,
		'Input Multicast' = 2,
		'Output Unicast' = 1,
	}
	enum SeqMasterGoMode {
		'None' = 0,
		'Top' = 3,
		'On' = 2,
		'Go' = 1,
	}
	enum AssignmentLayoutFunctions {
		'Flash' = 1,
		'Empty' = 0,
		'Time' = 22,
		'LearnRate' = 9,
		'GoStep' = 23,
		'Highlight' = 19,
		'Select' = 24,
		'LearnSpeed' = 10,
		'Fix' = 95,
		'Lowlight' = 20,
		'On' = 7,
		'Top' = 15,
		'Toggle' = 14,
		'<<<' = 6,
		'Temp' = 13,
		'Pause' = 18,
		'Speed1' = 12,
		'' = 0,
		'SelFix' = 106,
		'Black' = 2,
		'Rate1' = 11,
		'Solo' = 21,
		'<default action>' = -1,
		'>>>' = 5,
		'Off' = 8,
		'Go+' = 3,
		'Go-' = 4,
	}
	enum FontSizes {
		//@ts-ignore
		'24' = 24,
		//@ts-ignore
		'14' = 14,
		//@ts-ignore
		'18' = 18,
		//@ts-ignore
		'16' = 16,
		//@ts-ignore
		'28' = 28,
		//@ts-ignore
		'32' = 32,
		//@ts-ignore
		'9' = 9,
		//@ts-ignore
		'20' = 20,
		//@ts-ignore
		'11' = 11,
	}
	enum LicenseRequest {
		'Off' = 2,
		'Auto' = 0,
		'On' = 1,
	}
	enum AlignMath {
		'Geometric' = 0,
		'Numerical' = 1,
	}
	enum PlaybackSourceSubTypes {
		'Release' = 5,
		'' = 0,
		'Tracked' = 1,
		'DownGoing' = 4,
		'MIBFade' = 7,
		'MIB' = 6,
		'Blocked' = 2,
		'UpGoing' = 3,
	}
	enum OnOffStatus {
		'Off' = 0,
		'Undefined' = 3,
		'Toggle' = 2,
		'On' = 1,
	}
	enum EncoderLink {
		'Single' = 0,
		'AtFilter' = 2,
		'Feature' = 1,
	}
	enum RemoteResolution {
		'24bit' = 3,
		'16bit' = 2,
		'8bit' = 1,
	}
	enum PhaserWindowLayout {
		'2D' = 1,
		'1D' = 2,
		'Step' = 3,
		'Auto' = 0,
	}
	enum TrackpadPTMode {
		'Tilt Only' = 1,
		'Pan Only' = 0,
		'Both' = 2,
	}
	enum HostSubType {
		'Visualizer' = 74,
		'Wing-onPC' = 93,
		'Wing-MFX' = 91,
		'Node2PortWM' = 66,
		'Wing-onPCXT' = 95,
		'IONodeDIN' = 76,
		'Light' = 22,
		'Node4Port' = 64,
		'Medium' = 40,
		'Vis+Dongle' = 73,
		'Undefined' = 0,
		'Compact' = 24,
		'onPC2PortDIN' = 70,
		'RPU' = 26,
		'Node2Port' = 63,
		'Node8PortDIN' = 69,
		'FullSizeCRV' = 21,
		'Wing-MFE' = 92,
		'Node8Port' = 65,
		'onPC4Port' = 61,
		'onPC8Port' = 62,
		'Node4PortDIN' = 68,
		'onPC8PortDIN' = 72,
		'XLarge' = 42,
		'Recovery' = 1,
		'onPC2Port' = 60,
		'Wing-Extension' = 94,
		'LightCRV' = 23,
		'Large' = 41,
		'onPC4PortDIN' = 71,
		'FullSize' = 20,
		'Wing-onPCFader' = 96,
		'CompactXT' = 25,
		'Node2PortDIN' = 67,
		'Wing-MM' = 90,
		'IONode' = 75,
	}
	enum PatchOffset {
		'None' = -1,
	}
	enum CueTrigger {
		'Sound' = 3,
		'BPM' = 4,
		'Time' = 1,
		'Follow' = 2,
		'Go' = 0,
	}
	enum AutoStomp {
		'Off' = 0,
		'Prio' = 1,
		'On' = 2,
	}
	enum HostType {
		'Undefined' = 0,
		'NetworkNode' = 4,
		'Extension' = 9,
		'onPC' = 2,
		'InternalWing' = 5,
		'Plugin' = 7,
		'Switch' = 6,
		'PU' = 3,
		'PluginSmall' = 8,
		'Console' = 1,
	}
	enum EncoderFunctionLayoutView {
		'Arrangement' = 1,
		'Position' = 0,
	}
	enum PlaybackWindowExecFrom {
		'56-60' = 12,
		'71-75' = 15,
		'81-85' = 15,
		'26-30' = 6,
		'None' = 0,
		'16-20' = 4,
		'76-80' = 16,
		'36-40' = 8,
		'51-55' = 11,
		'61-65' = 13,
		'01-05' = 1,
		'86-90' = 16,
		'46-50' = 10,
		'31-35' = 7,
		'66-70' = 14,
		'11-15' = 3,
		'21-25' = 5,
		'06-10' = 2,
		'41-45' = 9,
	}
	enum LayoutOutputSelection {
		'Output' = 2,
		'Value' = 0,
		'DMX' = 1,
	}
	enum UserRights {
		'Admin' = 0,
		'Presets' = 3,
		'Playback' = 4,
		'Setup' = 1,
		'Program' = 2,
		'None' = 5,
	}
	enum DisplayPreference {
		'LongOrSmall' = 6,
		'Big' = 1,
		'BigOrSmall' = 5,
		'Small' = 3,
		'BigLongSmall' = 7,
		'BigOrLong' = 4,
		'None' = 0,
		'Long' = 2,
	}
	enum KeyAction {
		'Release' = 0,
		'DoublePress' = 3,
		'Press' = 1,
		'Hold' = 2,
		'ReleaseAfterHold' = 4,
	}
	enum AssignmentRateButtonFunctions {
		'Empty' = 0,
		'Time' = 22,
		'LearnRate' = 9,
		'GoStep' = 23,
		'Toggle' = 14,
		'Off' = 8,
		'Highlight' = 19,
		'Solo' = 21,
		'Rate1' = 11,
		'Pause' = 18,
		'' = 0,
		'Lowlight' = 20,
		'On' = 7,
	}
	enum MouseButtonTypes {
		'Middle' = 2,
		'Right' = 1,
		'Left' = 0,
	}
	enum ShaderTypes {
		'Vertex' = 35633,
		'Geometry' = 36313,
		'TessEval' = 36487,
		'TessCtrl' = 36488,
		'Fragment' = 35632,
	}
	enum AutoInterface {
		'Auto' = 0,
	}
	enum DisplayNone {
		'None' = 4294967295,
	}
	enum ColorEncoderFunction {
		'Auto' = 0,
		'CMY' = 3,
		'RGB' = 2,
		'HSB' = 1,
		'CIE' = 4,
	}
	enum TCDuration {
		'To End' = 0,
	}
	enum TimeCursorScrollMode {
		'Center' = 1,
		'Page' = 0,
	}
	enum LoopMode {
		'Off' = 2,
		'Pause' = 1,
		'Loop' = 0,
	}
	enum InvalidFootprint {
		'?' = -1,
	}
	enum MibMode {
		'None' = 1,
		'Defined' = 2,
		'UponGo' = 4,
		'Late' = 5,
		'Default' = 0,
		'Early' = 3,
	}
	enum GestureResult {
		'FinishGesturePassEvent' = 6,
		'MayBeGesture' = 2,
		'TriggerGesture' = 3,
		'TriggerGesturePassEvent' = 4,
		'Ignore' = 0,
		'CancelGesture' = 7,
		'EventProcessed' = 1,
		'FinishGesture' = 5,
	}
	enum DMXValueReadoutMode {
		'Hex' = 2,
		'Percent' = 0,
		'Decimal' = 1,
	}
	enum FaderFunctions {
		'Temp' = 31,
		'Speed' = 33,
		'Time' = 37,
		'XFadeB' = 30,
		'Rate' = 32,
		'Solo' = 36,
		'Master' = 27,
		'XFade' = 28,
		'XFadeA' = 29,
		'Lowlight' = 35,
		'Highlight' = 34,
	}
	enum DisplayNumber {
		'TouchMapper' = 14,
		'Small7' = 6,
		'Executors6' = 13,
		'Extern5' = 4,
		'Intern2' = 1,
		'Executors4' = 11,
		'Executors3' = 10,
		'None' = 4294967295,
		'Executors2' = 9,
		'Encoders' = 7,
		'Intern3' = 2,
		'Executors1' = 8,
		'Small6' = 5,
		'Intern1' = 0,
		'Extern4' = 3,
		'Executors5' = 12,
	}
	enum MatricksShiftNone {
		'None' = 0,
	}
	enum RequestedSize {
		'Default' = 0,
	}
	enum BloomIntensity3d {
		'Off' = 0,
		'On' = 1,
	}
	enum GridMergeMode {
		'Off' = 0,
		'Append X' = 1,
	}
	enum RDMPidValueDisplayInvert {
		'Off' = 0,
		'Auto' = 2,
		'On' = 1,
	}
	enum HostStatus {
		'Undefined' = 0,
		'NormalShutdown' = 7,
		'IdleMaster' = 5,
		'UpdateMode' = 9,
		'Startup' = 1,
		'Standalone' = 2,
		'Connected' = 3,
		'ErrorShutdown' = 8,
		'LocalMaster' = 4,
		'GlobalMaster' = 6,
	}
	enum RemoteMidiType {
		'Note' = 0,
		'NoteAttack' = 1,
		'NoteAttackDecay' = 2,
		'Control' = 3,
	}
	enum ValueReadoutModeAuto {
		'Percent' = 0,
		'Hex16' = 7,
		'Hex24' = 8,
		'Auto' = -1,
		'Physical' = 2,
		'Decimal8' = 3,
		'Decimal24' = 5,
		'PercentFine' = 1,
		'Decimal16' = 4,
		'Hex8' = 6,
	}

	enum KeyboardCodes {
		//@ts-ignore
		'2' = 50,
		//@ts-ignore
		'1' = 49,
		//@ts-ignore
		'0' = 48,
		'Minus' = 45,
		//@ts-ignore
		'9' = 57,
		//@ts-ignore
		'8' = 56,
		//@ts-ignore
		'7' = 55,
		//@ts-ignore
		'6' = 54,
		//@ts-ignore
		'5' = 53,
		//@ts-ignore
		'4' = 52,
		//@ts-ignore
		'F10' = 299,
		'Delta' = 349,
		'Escape' = 256,
		'LeftAlt' = 342,
		'F9' = 298,
		'F5' = 294,
		'R' = 82,
		'Q' = 81,
		'P' = 80,
		'O' = 79,
		'F11' = 300,
		'M' = 77,
		'End' = 269,
		'K' = 75,
		'PageUp' = 266,
		'Y' = 89,
		'X' = 88,
		'Space' = 32,
		'V' = 86,
		'U' = 85,
		'T' = 84,
		'S' = 83,
		'B' = 66,
		'A' = 65,
		'CapsLock' = 280,
		'Slash' = 47,
		'ScrollLock' = 281,
		'J' = 74,
		'F8' = 297,
		'H' = 72,
		'G' = 71,
		'F' = 70,
		'E' = 69,
		'D' = 68,
		'C' = 67,
		'Right' = 262,
		'LeftShift' = 340,
		'Enter' = 257,
		'LeftBracket' = 91,
		'PrintScreen' = 283,
		'kpAdd' = 334,
		'PageDown' = 267,
		'Pause' = 284,
		'kpSubtract' = 333,
		'F7' = 296,
		'World2' = 162,
		'Home' = 268,
		'Left' = 263,
		'Equal' = 61,
		'F3' = 292,
		'kpDecimal' = 330,
		'Z' = 90,
		'kpMultiply' = 332,
		'World1' = 161,
		'W' = 87,
		'Up' = 265,
		'RightShift' = 344,
		'Semicolon' = 59,
		'Tab' = 258,
		'RightCtrl' = 345,
		'None' = -1,
		'RightBracket' = 93,
		'RightAlt' = 346,
		'Period' = 46,
		'Comma' = 44,
		'F2' = 291,
		'Insert' = 260,
		'kpDivide' = 331,
		'F1' = 290,
		'Apostrophe' = 39,
		'Backslash' = 92,
		'Backspace' = 259,
		//@ts-ignore
		'3' = 51,
		'Down' = 264,
		'I' = 73,
		'L' = 76,
		'N' = 78,
		'F4' = 293,
		'Delete' = 261,
		'NumLock' = 282,
		'GraveAccent' = 96,
		'LeftCtrl' = 341,
		'F6' = 295,
		'F12' = 301,
	}
	enum XFadeMode {
		'AB' = 0,
		'Split' = 1,
	}
	enum LayoutMode {
		'Setup' = 1,
		'Normal' = 0,
	}
	enum CookMode {
		'Merge' = 2,
		'Remove' = 3,
		'Ask' = -1,
		'Abort' = 0,
		'Overwrite' = 1,
	}
	enum TrueFalse {
		'False' = 0,
		'True' = 1,
	}
	enum SpecialExec {
		'ProgBtn1' = 17,
		'XFade1Btn' = 2,
		'RateBtn2' = 8,
		'RateBtn1' = 7,
		'ExecBtn3' = 15,
		'None' = -1,
		'ExecEncoder' = 16,
		'ProgEncoder' = 20,
		'ExecBtn2' = 14,
		'ProgBtn3' = 19,
		'Speed' = 12,
		'GrandKnob' = 6,
		'ExecBtn1' = 13,
		'XFade1Knob' = 3,
		'XFade2Btn' = 4,
		'Rate' = 9,
		'XFade2Knob' = 5,
		'XFade2' = 1,
		'XFade1' = 0,
		'SpeedBtn2' = 11,
		'SpeedBtn1' = 10,
		'ProgBtn2' = 18,
	}
	enum ValueNone {
		'None' = 2147483647,
	}
	enum MacroLineWait {
		'Follow' = 0,
		'Go' = -1,
	}
	enum GridColumnFilterCollect {
		'RecipeSheetFilter 1' = 0,
	}
	enum ResolutionLimit {
		'720p' = 2,
		'1080p' = 3,
		'480p' = 1,
		'Unlimited' = 0,
	}
	enum MasterPriority {
		'VeryLow' = 1,
		'High' = 4,
		'Low' = 2,
		'Never' = 0,
		'Normal' = 3,
	}
	enum DebugUsbDataSection {
		'All' = 0,
		'Encoder' = 9,
		'Text' = 17,
		'NotifierLayer' = 16,
		'Led' = 11,
		'RTC' = 18,
		'Sync' = 12,
		'HeartBeat' = 14,
		'Ups' = 5,
		'Protocol' = 13,
		'DmxOut' = 2,
		'DmxIn' = 1,
		'Smpte' = 4,
		'Midi' = 3,
		'Button' = 8,
		'Software' = 15,
		'Fader' = 10,
		'Digital' = 7,
		'Analog' = 6,
	}
	enum GroupMasterMode {
		'None' = 0,
		'Negative' = 2,
		'Additive' = 4,
		'Positive' = 1,
		'Scaling' = 3,
	}
	enum Patched {
		'' = -1,
	}
	enum RDMSlotType {
		'ST_SEC_CONTROL' = 4,
		'ST_SEC_TIMING' = 2,
		'ST_SEC_SPEED' = 3,
		'ST_SEC_INDEX' = 5,
		'ST_SEC_FINE' = 1,
		'ST_PRIMARY' = 0,
		'ST_SEC_ROTATION' = 6,
		'ST_SEC_UNDEFINED' = 255,
		'ST_SEC_INDEX_ROTATE' = 7,
	}
	enum HostOs {
		'Undefined' = 0,
		'Windows' = 2,
		'Rtos' = 4,
		'Linux' = 1,
		'Mac' = 3,
	}
	enum WingID {
		'Wing4' = 4,
		'Wing3' = 3,
		'Wing6' = 6,
		'Wing1' = 1,
		'Wing2' = 2,
		'Wing5' = 5,
	}
	enum ECPlay {
		'false' = 0,
		//@ts-ignore
		'1' = 1,
		//@ts-ignore
		'0' = 0,
		'true' = 1,
		'No' = 0,
		'off' = 0,
		'' = 1,
		'on' = 1,
	}
	enum PoolSizeFactor {
		'Double' = 2,
		'Half' = 0,
		'Normal' = 1,
	}
	enum GroupMemoryType {
		'Uncompressed' = 1,
		'Compressed' = 0,
	}
	enum RDMPowerStateDefines {
		'POWER_STATE_NORMAL' = 255,
		'POWER_STATE_SHUTDOWN' = 1,
		'POWER_STATE_FULL_OFF' = 0,
		'POWER_STATE_STANDBY' = 2,
	}
	enum RealtimeCmdSource {
		'Original' = 0,
		'Network' = 2,
		'Local' = 1,
	}
	enum ActionMode {
		'OffMode' = 1,
		'ViewOnly' = 0,
		'SelectMode' = 2,
	}
	enum CuePartTextures {
		'IconCooking' = 0,
	}
	enum None {
		'' = 4294967295,
		'None' = 4294967295,
	}
	enum BackupBrowserFilter {
		'Shows' = 0,
		'Demoshows' = 2,
		'Backups' = 1,
	}
	enum IsContentInstalled {
		'Usercontent' = 2,
		'Installed' = 1,
		'Automatic' = 0,
	}
	enum PropertyRadioButtonListSetType {
		'Set' = 0,
		'Direct' = 1,
		'Property' = 2,
	}
	enum RDMLampState {
		'LAMP_NOT_PRESENT' = 4,
		'LAMP_STRIKE' = 2,
		'LAMP_OFF' = 0,
		'LAMP_ERROR' = 127,
		'LAMP_STANDBY' = 3,
		'Manufacturer-Specific States' = 128,
		'LAMP_ON' = 1,
	}
	enum BackdropPatchType {
		'Nine' = 0,
		'ThreeVertical' = 2,
		'ThreeHorizontal' = 3,
		'Frame' = 1,
	}
	enum ProgUpdateCueMode {
		'Selected' = 1,
		'LastCalled' = 2,
		'All' = 0,
	}
	enum Yes {
		'' = 0,
		'<Blank>' = 0,
		'Yes' = 1,
	}
	enum FontSizeType {
		'Point' = 0,
		'Pixel' = 1,
	}
	enum MibModeSequence {
		'None' = 1,
		'UponGo' = 4,
		'Late' = 5,
		'Early' = 3,
	}
	enum Index {
		'Illegal' = -1,
	}
	enum SpeedMaster {
		'Speed6' = 5,
		'Speed15' = 14,
		'Speed10' = 9,
		'None' = 255,
		'Speed3' = 2,
		'BPM' = 15,
		'Speed14' = 13,
		'Speed12' = 11,
		'Speed8' = 7,
		'Speed13' = 12,
		'Speed5' = 4,
		'Speed4' = 3,
		'Speed1' = 0,
		'Speed11' = 10,
		'Speed2' = 1,
		'Speed9' = 8,
		'Speed7' = 6,
	}
	enum FixtureSheetHeaderType {
		'Selected' = 1,
		'' = 0,
		'PartlySelected' = 3,
		'SelectedInverted' = 2,
	}
	enum AutoLayoutScrollType {
		'Auto' = 2,
		'Vertical' = 0,
		'Horizontal' = 1,
	}
	enum CellGrouping {
		'SizeDriven' = 4294967295,
	}
	enum UndefinedAnchors {
		'Undefined' = -1,
	}
	enum DeskLightChannel {
		'LedOther' = 6,
		'ScreenLetter' = 8,
		'ScreenBig' = 7,
		'ScreenExternal' = 10,
		'ScreenSmall' = 9,
		'LedFader' = 3,
		'LedKeyboard' = 5,
		'DeskLights' = 1,
		'LedEncoder' = 2,
		'LedExec' = 4,
	}
	enum TrackpadPTInvertMode {
		'Off' = 0,
		'Tilt Invert' = 2,
		'Pan Invert' = 1,
		'Both' = 3,
	}
	enum ScrollParamEntity {
		'Area' = 1,
		'Item' = 0,
	}
	enum FocusSearchPolicy {
		'Suppress' = 2,
		'Force' = 1,
		'Default' = 0,
	}
	enum FocusReason {
		'None' = 0,
		'UserKeyTab' = 4,
		'UserClick' = 2,
		'Lua' = 5,
		'RestoreAfterModal' = 6,
		'ViewChanged' = 1,
		'UserClickTitle' = 3,
	}
	enum FocusPriority {
		'Never' = 0,
		'TabOnly' = 1,
		'WantsFocus' = 3,
		'InitialFocus' = 4,
		'CanHaveFocus' = 2,
	}
	enum TimecodeSlotOff {
		'Off' = 255,
	}
	enum MasterReaction {
		'Grand' = 2,
		'Group' = 1,
		'None' = 0,
	}
	enum SCVirtualKeyCode {
		'PAGE_UP' = 16,
		'X13' = 31,
		'PREVIEW' = 13,
		'NUM4' = 71,
		'X8' = 26,
		'GOBACK' = 41,
		'STOMP' = 52,
		'X4' = 22,
		'LEARN' = 43,
		'XKEYS' = 15,
		'X12' = 30,
		'DELETE' = 50,
		'' = 0,
		'BLIND' = 14,
		'PREV' = 3,
		'MOVE' = 48,
		'SEQUENCE' = 59,
		'TIME' = 64,
		'NUM2' = 69,
		'NUM9' = 76,
		'GOTO' = 55,
		'ON' = 46,
		'CHANNEL' = 57,
		'X7' = 25,
		'NUM7' = 74,
		'FIXTURE' = 56,
		'X3' = 21,
		'DEF_GOBACK' = 39,
		'GO' = 42,
		'SELFIX' = 7,
		'X11' = 29,
		'DOT' = 80,
		'ASSIGN' = 63,
		'GOBACKFAST' = 44,
		'DEF_GO' = 37,
		'NUM1' = 68,
		'SET' = 5,
		'X2' = 20,
		'THRU' = 78,
		'PAUSE' = 40,
		'OFF' = 47,
		'X6' = 24,
		'HELP' = 53,
		'FULL' = 85,
		'STORE' = 66,
		'PLEASE' = 84,
		'NUM6' = 73,
		'X9' = 27,
		'AT' = 82,
		'NUM0' = 67,
		'ALIGN' = 51,
		'X5' = 23,
		'MENU' = 9,
		'X16' = 34,
		'OOPS' = 86,
		'PLUS' = 77,
		'X10' = 28,
		'X1' = 19,
		'X14' = 32,
		'UP' = 6,
		'UPDATE' = 65,
		'GROUP' = 58,
		'SOLO' = 11,
		'FADER' = 36,
		'FREEZE' = 12,
		'CLEAR' = 87,
		'SLASH' = 83,
		'SELECT' = 54,
		'EXEC' = 35,
		'CUE' = 60,
		'EDIT' = 62,
		'DOWN' = 8,
		'X15' = 33,
		'LIST' = 18,
		'PAGE_DOWN' = 17,
		'HIGH' = 10,
		'NUM8' = 75,
		'PRESET' = 61,
		'DEF_PAUSE' = 38,
		'NEXT' = 4,
		'NUM3' = 70,
		'MINUS' = 79,
		'COPY' = 49,
		'IF' = 81,
		'NUM5' = 72,
		'GOFAST' = 45,
		'ESC' = 88,
	}
	enum KeyboardModifier {
		'None' = -1,
		'Shift' = 340,
		'Alt' = 342,
		'Ctrl' = 341,
	}
	enum TimecodeSelectLastEventMode {
		'Off' = 0,
		'Track' = 1,
		'All' = 2,
	}
	enum LayoutTool {
		'Operate' = 0,
		'Add' = 2,
		'Select' = 1,
		'Move' = 4,
		'Resize' = 5,
		'Delete' = 3,
	}
	enum SpeedReadoutModeAuto {
		'Auto' = -1,
		'Seconds' = 2,
		'Hertz' = 0,
		'BPM' = 1,
	}
	enum RecordGo {
		'as Go' = 0,
		'as Goto (Status)' = 1,
	}
	enum RDMProductCategory {
		'PRODUCT_CATEGORY_TEST_EQUIPMENT_OTHER' = 29183,
		'PRODUCT_CATEGORY_DIMMER_OTHER' = 1535,
		'PRODUCT_CATEGORY_DIMMER_AC_COLDCATHODE' = 1283,
		'PRODUCT_CATEGORY_MONITOR' = 2560,
		'PRODUCT_CATEGORY_DIMMER_DC_PWM' = 1288,
		'PRODUCT_CATEGORY_ATMOSPHERIC_PYRO' = 1026,
		'PRODUCT_CATEGORY_SCENIC_DRIVE' = 1793,
		'PRODUCT_CATEGORY_POWER_CONTROL' = 1537,
		'PRODUCT_CATEGORY_PROJECTOR' = 768,
		'PRODUCT_CATEGORY_DATA_OTHER' = 2303,
		'PRODUCT_CATEGORY_DIMMER_AC_NONDIM' = 1284,
		'PRODUCT_CATEGORY_TEST_EQUIPMENT' = 28929,
		'PRODUCT_CATEGORY_CONTROL_CONTROLLER' = 28673,
		'PRODUCT_CATEGORY_MONITOR_DCPOWER' = 2562,
		'PRODUCT_CATEGORY_TEST' = 28928,
		'PRODUCT_CATEGORY_SCENIC_OTHER' = 2047,
		'PRODUCT_CATEGORY_FIXTURE' = 256,
		'PRODUCT_CATEGORY_SCENIC' = 1792,
		'PRODUCT_CATEGORY_NOT_DECLARED' = 0,
		'PRODUCT_CATEGORY_DIMMER_AC_OTHER' = 1286,
		'PRODUCT_CATEGORY_DIMMER' = 1280,
		'PRODUCT_CATEGORY_DIMMER_AC_INCANDESCENT' = 1281,
		'PRODUCT_CATEGORY_MONITOR_ENVIRONMENTAL' = 2563,
		'PRODUCT_CATEGORY_PROJECTOR_OTHER' = 1023,
		'PRODUCT_CATEGORY_MONITOR_ACLINEPOWER' = 2561,
		'PRODUCT_CATEGORY_FIXTURE_ACCESSORY_EFFECT' = 516,
		'PRODUCT_CATEGORY_DATA_DISTRIBUTION' = 2049,
		'PRODUCT_CATEGORY_AV_AUDIO' = 2305,
		'PRODUCT_CATEGORY_AV_VIDEO' = 2306,
		'PRODUCT_CATEGORY_DIMMER_AC_FLUORESCENT' = 1282,
		'PRODUCT_CATEGORY_DIMMER_CS_LED' = 1289,
		'PRODUCT_CATEGORY_FIXTURE_ACCESSORY_OTHER' = 767,
		'PRODUCT_CATEGORY_PROJECTOR_FIXED' = 769,
		'PRODUCT_CATEGORY_CONTROL' = 28672,
		'PRODUCT_CATEGORY_FIXTURE_FIXED' = 257,
		'PRODUCT_CATEGORY_POWER_OTHER' = 1791,
		'PRODUCT_CATEGORY_DIMMER_DC_LEVEL' = 1287,
		'PRODUCT_CATEGORY_FIXTURE_MOVING_MIRROR' = 259,
		'PRODUCT_CATEGORY_DIMMER_AC_ELV' = 1285,
		'PRODUCT_CATEGORY_CONTROL_OTHER' = 28927,
		'PRODUCT_CATEGORY__MANUFACTORER_SPECIFIC' = 32768,
		'PRODUCT_CATEGORY_OTHER' = 32767,
		'PRODUCT_CATEGORY_POWER' = 1536,
		'PRODUCT_CATEGORY_MONITOR_OTHER' = 2815,
		'PRODUCT_CATEGORY_AV_OTHER' = 2559,
		'PRODUCT_CATEGORY_FIXTURE_OTHER' = 511,
		'PRODUCT_CATEGORY_FIXTURE_MOVING_YOKE' = 258,
		'PRODUCT_CATEGORY_FIXTURE_ACCESSORY_YOKE' = 514,
		'PRODUCT_CATEGORY_PROJECTOR_MOVING_MIRROR' = 771,
		'PRODUCT_CATEGORY_DATA_CONVERSION' = 2050,
		'PRODUCT_CATEGORY_FIXTURE_ACCESSORY_MIRROR' = 515,
		'PRODUCT_CATEGORY_POWER_SOURCE' = 1538,
		'PRODUCT_CATEGORY_FIXTURE_ACCESSORY_BEAM' = 517,
		'PRODUCT_CATEGORY_ATMOSPHERIC_EFFECT' = 1025,
		'PRODUCT_CATEGORY_CONTROL_BACKUPDEVICE' = 28674,
		'PRODUCT_CATEGORY_ATMOSPHERIC' = 1024,
		'PRODUCT_CATEGORY_FIXTURE_ACCESSORY' = 512,
		'PRODUCT_CATEGORY_AV' = 2304,
		'PRODUCT_CATEGORY_FIXTURE_ACCESSORY_COLOR' = 513,
		'PRODUCT_CATEGORY_DATA' = 2048,
		'PRODUCT_CATEGORY_ATMOSPHERIC_OTHER' = 1279,
		'PRODUCT_CATEGORY_PROJECTOR_MOVING_YOKE' = 770,
	}
	enum PluginPlacement {
		'Multi' = 1,
		'ForceMulti' = 2,
		'Single' = 0,
	}
	enum TCViewMode {
		'Text' = 0,
		'Timeline' = 1,
		'Both' = 2,
	}
	enum TimecodeMode {
		'Playback' = 0,
		'Setup' = 1,
	}
	enum DMXReadoutMode {
		'Dec24' = 5,
		'Percent' = 6,
		'Hex16' = 1,
		'Hex8' = 0,
		'Hex24' = 2,
		'Dec16' = 4,
		'Dec8' = 3,
	}
	enum AssignmentTimecodeFunctions {
		'Flash' = 1,
		'Empty' = 0,
		'Time' = 22,
		'LearnRate' = 9,
		'GoStep' = 23,
		'Highlight' = 19,
		'Select' = 24,
		'LearnSpeed' = 10,
		'Fix' = 95,
		'Lowlight' = 20,
		'On' = 7,
		'Top' = 15,
		'Toggle' = 14,
		'<<<' = 6,
		'Temp' = 13,
		'Pause' = 18,
		'Speed1' = 12,
		'' = 0,
		'Solo' = 21,
		'Black' = 2,
		'Rate1' = 11,
		'Goto' = 16,
		'SelFix' = 106,
		'>>>' = 5,
		'Off' = 8,
		'Go+' = 3,
		'Go-' = 4,
	}
	enum OnOff {
		'Off' = 0,
		'On' = 1,
	}
	enum YesNo {
		'No' = 0,
		'Yes' = 1,
	}
	enum ValueRole {
		'DisplayShort' = 2,
		'Default' = 0,
		'Display' = 1,
	}
	enum TimeKeyTarget {
		'Cue' = 0,
		'Fixture' = 1,
	}
	enum AlignmentH {
		'Center' = 0,
		'Right' = 2,
		'Left' = 1,
	}
	enum RDMPidValueFactoryDefaults {
		'False' = 0,
		'True' = 1,
	}
	enum SpecialAttribute {
		'Blade4B' = 45,
		'GoboPosRotate' = 19,
		'Blade2Rot' = 40,
		'XYZ_Z' = 8,
		'XYZ_X' = 6,
		'NoFeature' = 1,
		'CTB' = 33,
		'ShutterStrobeRandomPulseClose' = 58,
		'Blade3B' = 42,
		'Blade1A' = 35,
		'Tilt' = 5,
		'CIE_X' = 29,
		'Blade3Rot' = 43,
		'Blade4Rot' = 46,
		'GoboPos' = 18,
		'Zoom' = 24,
		'CIE_Brightness' = 31,
		'XYZ_Y' = 7,
		'Shutter' = 27,
		'CTC' = 34,
		'Blade1Rot' = 37,
		'IrisStrobeRandom' = 51,
		'CTO' = 32,
		'ShutterStrobeRandomPulseOpen' = 57,
		'ShutterStrobeRandomPulse' = 56,
		'ShutterStrobeRandom' = 55,
		'ShutterStrobePulseOpen' = 53,
		'Dimmer' = 3,
		'ColorRGB' = 9,
		'ShutterStrobe' = 28,
		'ShutterStrobePulse' = 52,
		'Dummy' = 2,
		'PrismPosRotate' = 22,
		'PrismPos' = 21,
		'Prism' = 20,
		'None' = 0,
		'ShutterStrobePulseClose' = 54,
		'IrisStrobe' = 48,
		'Blade4A' = 44,
		'Blade2B' = 39,
		'Pan' = 4,
		'Focus' = 23,
		'HSB_Hue' = 10,
		'Color' = 13,
		'ColorSpin' = 14,
		'HSB_Saturation' = 11,
		'Blade2A' = 38,
		'IrisPulseClose' = 49,
		'Frost' = 26,
		'GoboSpin' = 16,
		'HSB_Brightness' = 12,
		'IrisPulseOpen' = 50,
		'Iris' = 25,
		'Gobo' = 15,
		'GoboShake' = 17,
		'ShaperRot' = 47,
		'Blade3A' = 41,
		'CIE_Y' = 30,
		'Blade1B' = 36,
	}
	enum MatrixWidthAuto {
		'Auto' = 0,
	}
	enum BuildType {
		'Debug' = 1,
		'Asan' = 2,
		'Release' = 0,
	}
	enum FixtureIdEnum {
		'None' = 0,
	}
	enum TimecodeSlot {
		'TCSlot 3' = 2,
		'TCSlot 5' = 4,
		'TCSlot 4' = 3,
		'TCSlot 7' = 6,
		'TCSlot 8' = 7,
		'TCSlot 1' = 0,
		'<Selected>' = 255,
		'TCSlot 6' = 5,
		'TCSlot 2' = 1,
	}
	enum DmxState {
		'Off' = 0,
		'In' = 2,
		'RDM' = 5,
		'Out' = 1,
	}
	enum CuePartMode {
		'Default' = 4294967295,
	}
	enum AssignmentSoundButtonFunctions {
		'Off' = 8,
		'Empty' = 0,
		'Toggle' = 14,
		'' = 0,
		'On' = 7,
	}
	enum PresetModeDefault {
		'Selective' = 0,
		'Global' = 1,
		'Default' = 3,
		'Universal' = 2,
	}
	enum RDMManufacturerId {
		'Krislite Pte. Ltd.' = 2331,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY 8' = 32760,
		'KissBox' = 19266,
		'mathertel.de' = 2439,
		'Marumo Electric Co., Ltd.' = 2420,
		'Lightforce Lasertechnik' = 923,
		'Birket Engineering, Inc.' = 17058,
		'Fire & Magic' = 5454,
		'OOO SAMLIGHT' = 21334,
		'NXP Semiconductors B.V.' = 15120,
		'Fountain People' = 2466,
		'RoscoLab Ltd' = 21074,
		'Pr-Lighting Ltd.' = 28786,
		'Brother,Brother & Sons Aps' = 8481,
		'LAN Systems--Midibox project' = 19778,
		'Robe Show Lighting s.r.o.' = 21075,
		'PH Lightning AB' = 7089,
		'Aquatique Show Int.' = 2483,
		'LLC Moscow Experimental Lighting Plant (TeleMechanic)' = 673,
		'ChromaCove LLC' = 8629,
		'StageLine Electronic' = 21356,
		'Mode Lighting (UK) Ltd.' = 19788,
		'LanBolight Technology Co., LTD.' = 14440,
		'Barco' = 16979,
		'Engineering Solutions Inc.' = 8873,
		'MEGATECHNICS Ltd.' = 9890,
		'JSC MFG' = 19027,
		'Audio Scene' = 16723,
		'SK-Software' = 21323,
		'Quicklights' = 20844,
		'PRO-SOLUTIONS' = 1375,
		'Carallon Ltd.' = 812,
		'Galaxia Electronics' = 1842,
		'Hollywood Controls Inc.' = 18511,
		'RUIZ TECH' = 21069,
		'Philips Selecon' = 20563,
		'Lumenec Pty. Ltd.' = 9786,
		'Global Special Effects' = 18040,
		'Enfis Ltd' = 18518,
		'MagicFX B.V.' = 18008,
		'HxDx' = 18500,
		'Interesting Products, Inc.' = 18768,
		'Sean Sill' = 21331,
		'LEDValley Technologies Sdn Bhd' = 19542,
		'Krisledz Pte. Ltd.' = 1166,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY 5' = 32757,
		'Coemar Spa' = 17229,
		'Guangzhou Chai Yi Light Co., Ltd.' = 1519,
		'ARC Solid-State Lighting Corp.' = 2165,
		'Brighten Technology Development Co., Ltd.' = 1487,
		'Yuesheng International Limited' = 5968,
		'Red Lighting s.r.l.' = 6717,
		'KLH Electronics PLC' = 19276,
		'DIGITAL ART SYSTEM' = 17473,
		'Lehigh Electric Products' = 9778,
		'Strand Lighting Ltd.' = 29548,
		'Lux Lumen' = 826,
		'Industrias Sola Basic S.A. de C.V.' = 21314,
		'Aboutshow Color Light Co., LTD' = 5860,
		'Moda Light' = 7821,
		'AC Entertainment Products Ltd.' = 2434,
		'Claude Heintz Design' = 27768,
		'Anidea Engineering, Inc.' = 16713,
		'QMAXZ lighting' = 20813,
		'Urban Visuals & Effects Ltd.' = 10923,
		'Showtec (Highlite International B.V.)' = 10676,
		'Bytecraft Entertainment Pty Ltd' = 16965,
		'Bart van Stiphout Electronics & Software' = 8496,
		'Horizon Control Inc.' = 18499,
		'Freescale Semiconductor U.K. Ltd.' = 26227,
		'MEB Veranstaltungstechnik GmbH' = 1190,
		'Unilumin Group' = 2519,
		'Environmental Lighting Solutions' = 25971,
		'Shanghai Moons Automation Control Co., Ltd' = 771,
		'Helvar Ltd' = 9266,
		'Wireless Solution Sweden AB' = 22355,
		'Glow Motion Technologies, LLC.' = 2443,
		'Stardraw.com Ltd.' = 21316,
		'Coolon Pty Ltd' = 8627,
		'Ecosense Lighting Company Limited' = 2446,
		'ROAL Electronics SpA' = 10535,
		'Visual Productions' = 11048,
		'ImageCue LLC' = 776,
		'Les Generateurs de brouillard MDG Fog Generators Ltd.' = 19780,
		'Durand Interstellar, Inc.' = 17481,
		'Studio S Music City' = 7110,
		'EAS SYSTEMS' = 8864,
		'HBE Lighting Systems' = 18508,
		'Kolberg Percussion GmbH' = 4842,
		'Creative Lighting And Sound Systems Pty Ltd' = 161,
		'Duralamp S.p.A.' = 6585,
		'Zingerli Show Engineering' = 23123,
		'RNC Systems Inc.' = 21070,
		'ShowLED' = 2285,
		'ERAL srl' = 17747,
		'WET' = 30564,
		'ELETTROLAB S.r.l.' = 17474,
		'Lumisia Co., Ltd.' = 26454,
		'Griven S.r.l.' = 1996,
		'Ehrgeiz' = 2245,
		'IBEX UK Limited' = 18754,
		'High End Systems Inc.' = 19538,
		'LAM32 srl' = 19488,
		'PiXL Factory' = 2218,
		'TalentStorm Enterprises, Inc.' = 21587,
		'CPOINT' = 1844,
		'Culture Crew bvba' = 8609,
		'DES' = 18256,
		'Dezelectric Kft.' = 17477,
		'MAL Effekt-Technik GmbH' = 28001,
		'STG-Beikirch Industrieelektronik + Sicherheitstechnik GmbH & Co. KG' = 21364,
		'NOVALIGHT S.r.l.' = 20044,
		'Vari-Lite, Inc.' = 22092,
		'SGM A/S' = 1836,
		'LightWild LC' = 19543,
		'Adam Hall GmbH' = 2212,
		'TamaTech Labo Company Ltd,' = 21588,
		'ChamSys Ltd.' = 1290,
		'Grid Show Systems Inc.' = 5264,
		'JB-lighting GmbH' = 19010,
		'Wildfire, Inc.' = 22342,
		'ARNOLD LICHTTECHNIK' = 16754,
		'PR-Electronic' = 10281,
		'ALADIN Architekturlicht GmbH' = 8358,
		'Stagetronics Ltda' = 21332,
		'XENON ARCHITECTURAL LIGHTING' = 22629,
		'LEDEngin Inc.' = 1887,
		'Gantom Lighting & Controls' = 8209,
		'Plsao Optoelectronics Technology Co., Ltd.' = 22664,
		'CHROMLECH' = 8628,
		'Peternet Electronics BVBA' = 10279,
		'Antari Lighting And Effects Ltd.' = 7896,
		'Toni Maroni Gmb' = 10790,
		'Argetron Elektrik Elektronik Organizasyon Gida San. ve Dis Tic. Ltd. Sti.' = 2497,
		'AYRTON' = 16761,
		'CAST Software' = 17223,
		'Jinnax Opto Technology Co., Ltd.' = 682,
		'TERMINAL-COM' = 1335,
		'Prolites S.A.L.' = 2488,
		'LumenRadio AB' = 19541,
		'Sean Christopher FX' = 29539,
		'Shenzhen Longrich Energy Sources Technology Co., Ltd.' = 2444,
		'Event Lighting Pty, Ltd.' = 2055,
		'LED, Inc.' = 20578,
		'Element Labs Inc.' = 17772,
		'Open Lighting' = 31344,
		'Integrated Theatre, Inc.' = 18772,
		'Guangzhou Yajiang (Yagang - Silver Star) Photoelectric Equipment Ltd.' = 14474,
		'MY-Semi Inc.' = 1938,
		'Getlux Ltd.' = 10628,
		'SEIKO Epson Corporation' = 5216,
		'VT-Control' = 4941,
		'Lisys Fenyrendszer Zrt.' = 9764,
		'Radical Lighting Ltd.' = 21068,
		'DAS Integrator Pte Ltd' = 8740,
		'OTTEC Technology GmbH' = 2168,
		'SIRS-E' = 2181,
		'Electrone Americas Ltd. Co.' = 5806,
		'Thorn Lighting Limited' = 10789,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY e' = 32766,
		'BEGLEC NV' = 8482,
		'Highendled Electronics Company Limited' = 2186,
		'awaptec GmbH' = 5776,
		'E:cue Control GmbH' = 17722,
		'Aixz International (S)' = 2458,
		'Grand Canyon LED Lighting System (Suzhou) Co., Ltd.' = 1167,
		'Apollo Design Technology, Inc' = 24932,
		'Solid State Luminaires' = 6456,
		'Hale Microsystems LLC' = 9328,
		'Zero 88' = 2056,
		'eX Systems' = 981,
		'HDT impex s.r.o.' = 2362,
		'Dream Solutions Ltd.' = 8761,
		'Simon Tech' = 21416,
		'CDS advanced technology bv' = 25444,
		'OFilms' = 1630,
		'AVAB America, Inc.' = 16705,
		'Stroytsirk LLC' = 10728,
		'KB Design' = 2421,
		'IT Ihme' = 9386,
		'techKnow Design Ltd.' = 5658,
		'Hollywood Rentals LLC' = 4858,
		'Leviton Manufacturing Co., Inc.' = 19525,
		'Stage Services Ltd.' = 4852,
		'LED Team' = 19556,
		'Spotlight s.r.l.' = 10680,
		'I-Lum' = 18764,
		'Engineering Arts' = 17729,
		'Ingham Designs' = 18756,
		'ACS - Ackerman Computer Sciences' = 2297,
		'Winona Lighting' = 720,
		'Laservision Pty Ltd' = 9776,
		'Electronics Diversified LLC' = 17732,
		'ACME EFFECTS LTD.' = 14342,
		'OJSC Kadoshkinsky electrotechnical' = 674,
		'L&L Luce&Light' = 1735,
		'DDS Elettronica' = 20300,
		'SVI Public Company Limited' = 2259,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY 6' = 32758,
		'LUMINEX Lighting Control Equipment bvba' = 19532,
		'W.A. Benjamin Electric Co.' = 2264,
		'Dove Lighting Systems, Inc.' = 17484,
		'deskontrol electronics' = 2556,
		'Adelto Limited' = 16740,
		'Lumina Visual Productions' = 28650,
		'G-LEC Europe GmbH' = 18252,
		'Pulsar Light of Cambridge Ltd.' = 20597,
		'Ballantyne Strong Inc.' = 29541,
		'LightLife, Gesellschaft fuer audiovisuelle Erlebnisse mbH' = 19547,
		'Lampo Lighting Designers' = 19564,
		'Vision Quest Lighting Inc.' = 22097,
		'Leonh Hardware Enterprise Inc.' = 9763,
		'American-Pro International' = 1742,
		'ADE ELETTRONICA srl' = 16709,
		'DJPOWER ELECTRONIC STAGE LIGHTING FIXTURE FACTORY (GUANGZHOU)' = 20781,
		'GermTec GmbH & Co. KG' = 2305,
		'Fly Dragon Lighting Equipment Co.,ltd' = 14472,
		'CLAY PAKY S.p.A' = 17232,
		'ABLELITE INTERNATIONAL' = 578,
		'EverBrighten Co., Ltd.' = 1344,
		'GEE' = 1,
		'Fineline Solutions Ltd.' = 2400,
		'Production Resource Group' = 20562,
		'Acclaim Lighting' = 714,
		'Kino Flo, Inc.' = 19270,
		'Lighting Services Inc.' = 11488,
		'ENTTEC Pty Ltd' = 17742,
		'Flexvisual' = 18006,
		'MX design' = 19800,
		'JANUS srl' = 19009,
		'LightGeist Ltd.' = 19527,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY 3' = 32755,
		'PatternAgents, LLC' = 2263,
		'Licht-, Steuer- und Schaltanlagenbau GmbH (LSS GmbH)' = 19539,
		'Sensa-Lite Ltd.' = 2260,
		'IGuzzini illuminazione spa' = 18759,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY b' = 32763,
		'Peradise' = 20581,
		'LEDART LLC' = 1668,
		'St. Anne Engineering GmbH' = 257,
		'DigitaLicht AG' = 30600,
		'RE-Engineering' = 701,
		'ChamberPlus Co., Ltd' = 26646,
		'Innovation LED Limited' = 1408,
		'SV-wtu eU' = 21366,
		'Rena Electronica B.V.' = 18561,
		'HB-Laserkomponenten GmbH' = 9249,
		'GLP German Light Products GmbH' = 26476,
		'TecArt Lighting' = 21569,
		'Lighting Science Group (formerly LED Effects, Inc.)' = 1547,
		'Equipson S.A.' = 1766,
		'AquaTronic' = 2358,
		'Company NA' = 20033,
		'ACTOR-MATE CO., LTD.' = 2326,
		'Teamboyce Limited' = 2426,
		'Prolight Concepts Ltd.' = 2469,
		'Intense Lighting, LLC' = 5280,
		'CCI Power Supplies, LLC' = 2454,
		'LSC Lighting Systems (Aust) Pty. Ltd.' = 19571,
		'Callegenix LLC' = 10152,
		'Music & Lights S.r.l.' = 5584,
		'ROE Visual Co. Ltd.' = 2438,
		'Lichttechnik & Sonderbau' = 14295,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY 2' = 32754,
		'D-LED Illumination Technologies Ltd.' = 1491,
		'Digilin Australia' = 25697,
		'Selador' = 21317,
		'Loxone Electronics GmbH' = 9783,
		'DMX4ALL GmbH' = 11290,
		'Lamp & Pencil' = 1109,
		'RaumZeitLabor e.V.' = 2431,
		'Apogee Lighting' = 16720,
		'RHENAC Systems GmbH' = 1732,
		'Howard Eaton Lighting Ltd.' = 18501,
		'Ultratec Special Effects' = 19533,
		'RDC, Inc. d.b.a. LynTec' = 1616,
		'Invisible Rival Incorporated' = 18770,
		'BOTEX' = 16975,
		'RootPath Ltd.' = 21072,
		'LEDsistem Teknolojileri Tic. Ltd. Sti.' = 5670,
		'Blossom Communications Corp.' = 4894,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY 7' = 32759,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY 9' = 32761,
		'Shenzhen Lesan Lighting Co., Ltd.' = 1451,
		'CDCA Ltd.' = 17220,
		'GuangZhou MCSWE Technologies, INC' = 5536,
		'I-Pix Digital Light Ltd.' = 9788,
		'EC Elettronica Srl' = 17731,
		'LED Company s.r.o.' = 19685,
		'Astera LED Technology GmbH' = 16755,
		'Peter Meyer Project Management Adviser GmbH' = 20557,
		'EUTRAC - Intelligent Lighting GmbH' = 8874,
		'DF elettronica s.r.l.' = 17510,
		'Pathway Connectivity Inc.' = 20547,
		'Global Design Solutions, Ltd.' = 13364,
		'Jands Pty Ltd.' = 19041,
		'GVA Lighting, Inc.' = 715,
		'Smartpark Creative Solutions' = 5038,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY c' = 32764,
		'Philips Entertainment Lighting Asia' = 20545,
		'GRE Alpha' = 2316,
		'Philips Lighting BV' = 20584,
		'Laser Imagineering GmbH' = 1810,
		'Masiero s.r.l.' = 7887,
		'Laser Technology Ltd.' = 19545,
		'Bortis Elektronik' = 258,
		'Lumishore Ltd. UK' = 13853,
		'Pfannenberg GmbH' = 20582,
		'Innovation Solutions Ltd.' = 18803,
		'medien technik cords' = 19796,
		'D.E.F. Srl' = 8738,
		'Viso Systems Aps' = 22099,
		'Birdbrain Labs LLC' = 1102,
		'Acuity Brands Lighting Inc.' = 623,
		'LIGHTOLIER' = 19561,
		'AusChristmasLighting' = 8378,
		'ADB - TTV Technologies nv' = 16708,
		'zactrack Lighting Technologies Gmbh' = 15664,
		'Planungsbuero' = 10294,
		'Mediatec Group' = 23980,
		'Alektra AB' = 24908,
		'www.doityourselfchristmas.com hobbyists' = 22637,
		'Mittomakers' = 2518,
		'CKC Lighting Co., Ltd.' = 1579,
		'D.O.M. Datenverarbeitung GmbH' = 17476,
		'CODEM MUSIC S.r.l.' = 17263,
		'Digital Sputnik Lighting' = 2447,
		'CHAUVET Lighting' = 8612,
		'Mueller Elektronik' = 19831,
		'Ittermann electronic GmbH' = 26996,
		'AZ e-lite Pte Ltd' = 8365,
		'Bill Coghill Company : Bill Coghill Design' = 16963,
		'Insta Elektro GmbH' = 18757,
		'Crystal Fountains Inc.' = 2504,
		'Peperoni Lighting-Solutions' = 20556,
		'Goddard Design Co.' = 18244,
		'Interactive Technologies, Inc.' = 18766,
		'UP-LUX Eletronica Ltda.' = 21840,
		'Juno Lighting Group' = 2136,
		'Luxlight Skandinavien AB' = 4832,
		'OXO' = 23616,
		'de koster Special Effects' = 12853,
		'C.I.Tronics Lighting Designers Ltda' = 17225,
		'Diginet Control Systems Pty Ltd' = 1545,
		'Raven Systems Design, Inc.' = 4919,
		'Johnsson Lighting Technologies AB' = 19020,
		'Pharos Architectural Controls' = 28776,
		'i2Systems' = 915,
		'Schreder' = 21320,
		'Integrated System Technologies Ltd.' = 18771,
		'lumenetix' = 1910,
		'kuwatec, Inc.' = 19285,
		'kLabs Research UK' = 2394,
		'inoage GmbH' = 18753,
		'iLight Technologies Inc' = 26956,
		'AAdyn Technology' = 2223,
		'Sein & Schein GmbH' = 28003,
		'feno GmbH' = 774,
		'Junction Inc. Ltd' = 2129,
		'eventa Aktiengesellschaft' = 25974,
		'euroGenie' = 25927,
		'eldoLED BV' = 25711,
		'Lumonic Limited' = 9782,
		'eBrain GmbH' = 25922,
		'OSRAM' = 1321,
		'dilitronics GmbH' = 25708,
		'Martin Professional A/S' = 19792,
		'Outsight Pty Ltd.' = 20341,
		'Conceptinetics Technologies and Consultancy Ltd.' = 1799,
		'Motomuto Aps' = 2508,
		'OKEROAB AB' = 17969,
		'Drinelec' = 1794,
		'LaserAnimation Sollinger GmbH' = 19521,
		'ADDiCTiON BoX GbR' = 1968,
		'Heliospectra AB' = 25626,
		'TMB' = 6906,
		'Zaklad Elektroniczny AGAT s.c.' = 5292,
		'Yifeng Lighting Co., Ltd.' = 14341,
		'Xtraordinary Musical Accolade Systems' = 22605,
		'Key Delfin' = 27492,
		'XTBA' = 11306,
		'Steinigke Showtechnic GmbH' = 10666,
		'Moog Animatics' = 2432,
		'Wybron, Inc.' = 22361,
		'Rnet Lighting Technology Limited' = 2464,
		'LLC Likhoslavl Plant of Lighting Engineering (Svetotehnika)' = 672,
		'MA Lighting Technology GmbH' = 19777,
		'Arnold Tang Productions' = 16724,
		'KMX Inc.' = 19277,
		'ARRI -- Arnold & Richter Cine Technik GmbH & Co. Betriebs KG' = 8377,
		'WLPS Wodielite Production Services' = 2515,
		'Ambitsel, Inc.' = 1308,
		"Nerd's Meter" = 5674,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY f' = 32767,
		'WERPAX bvba' = 11170,
		'WADAK GmbH' = 6678,
		'W-DEV' = 22340,
		'Aquarii, Inc.' = 16721,
		'Velleman nv' = 2499,
		'Vehtec Tecnologia Ltda' = 7296,
		'Light.Audio.Design' = 1696,
		'Turkowski GmbH' = 1461,
		'Traxon Technologies Ltd.' = 5852,
		'Ephesus Lighting' = 27630,
		'James Thomas Engineering' = 19028,
		'Theatrelight New Zealand' = 1807,
		'ALL-DO INTERNATIONALCO., LTD.' = 10649,
		'Peter Maes Technology' = 10278,
		'General Luminaire (Shanghai) Ltd.' = 18284,
		'The White Rabbit Company, Inc.' = 11177,
		'The Light Source, Inc.' = 29009,
		'GPE srl' = 18245,
		'Tempest Lighting Inc.' = 21580,
		'Technographic Displays Ltd.' = 21572,
		'Targetti Sankey Spa' = 1239,
		'Electronic Theatre Controls, Inc.' = 25972,
		'Tait Towers Manufacturing Inc.' = 737,
		'Zumtobel Lighting GmbH' = 27757,
		'THELIGHT Luminary for Cine and TV S.L.' = 2045,
		'TESI Elettronica srl' = 21573,
		'Spectrum Manufacturing Inc.' = 21360,
		'Synthe FX, LLC' = 21318,
		'Sundrax, LLC' = 10679,
		'Hubbell Entertainment, Inc.' = 26725,
		'Sturdy Corporation' = 10657,
		'Strich Labs' = 911,
		'PLS Electronics Ltd.' = 6552,
		'Avolites Ltd.' = 19798,
		'Color Kinetics Inc.' = 17227,
		'Stellascapes' = 11720,
		'XLN-t bvba' = 30828,
		'Revolution Display' = 21060,
		'State Automation Pty Ltd.' = 10682,
		'Starway' = 2537,
		'Newlab S.r.l.' = 4826,
		'BECKHOFF Automation GmbH' = 16961,
		'Digimedia Multimedia Lighting Solutions' = 17485,
		'Claudio Dal Cero Engineering' = 17475,
		'Hungaroflash' = 9258,
		'Stage Technologies Limited' = 21313,
		'FATEC sarl' = 1930,
		'Soundsculpture Incorporated' = 21321,
		'ESTA1' = 65535,
		'KIM Lighting' = 2224,
		'SAS Productions' = 21322,
		'TBE Srl' = 2374,
		'Lighting Innovation Group AG' = 9379,
		'SpaceCannon vH' = 21347,
		'LjusDesign AB' = 9781,
		'Les Eclairages Lou Inc.' = 17763,
		'Brink Electronics' = 2429,
		'RVL techniek' = 19148,
		'GUANZHOU KAVON STAGE EQUIPMENT CO., LTD.' = 6280,
		'Flashlight/Ampco Holding' = 17996,
		'Growflux LLC' = 712,
		'Altman Stage Lighting' = 16689,
		'Martin Sukale Medientechnik GbR' = 21845,
		'Ice House Productions' = 18760,
		'AUTOLUX Handels- und ProduktionsgmbH' = 21553,
		'Anaren Inc.' = 31392,
		'Milford Instruments Ltd.' = 9908,
		'Prism Projection' = 916,
		'Artistic Licence Engineering Ltd.' = 16716,
		'Elaborated Networks GmbH' = 2399,
		'Ambra Elettronica s.r.l.' = 27794,
		'LGR' = 364,
		'Rosstech Signals Inc.' = 843,
		'City Design S.p.A.' = 4862,
		'AC Lasers' = 16707,
		'Lumenpulse Lighting Inc.' = 13880,
		'Lex Products Corp.' = 19544,
		'D.T.S. Illuminazione srl' = 1808,
		'Serva Transport Systems GmbH' = 5902,
		'Selectron Bvba' = 10674,
		'SRS Light Design' = 10665,
		'Corsair Technology Ltd.' = 1851,
		'Gekko Technology Ltd.' = 9138,
		'Bigbear Co., Ltd.' = 2308,
		'Alkalite LED Technology Corp' = 8374,
		'v2 Lighting Group, Inc.' = 5382,
		'Sand Network Systems' = 21326,
		'EREA' = 17746,
		'James Embedded Systems Engineering (JESE Ltd)' = 26724,
		'CaptSystemes' = 8617,
		'SanDevices, LLC' = 2289,
		'SWISSON AG' = 21367,
		'Entertainment Technology' = 17748,
		'Guangzhou VAS Lighting Co., Ltd.' = 1088,
		'HUMAL Elektroonika OU' = 5220,
		'STILED' = 2265,
		'ALS Stanislaw Binkiewicz' = 7104,
		'TheOlymp - Networking & InterNet Services' = 14903,
		'Edward J. Keefe Jr.' = 1193,
		'SOUNDLIGHT' = 21324,
		'Ingenieurbuero fuer Nachrichtentechnik in der Studio und Veranstaltungstechnik' = 17740,
		'COSMOLIGHT SRL' = 1387,
		'Eulum Design, LLC' = 2294,
		'NJD Electronics' = 20042,
		'CTG sp. z o.o.' = 1776,
		'Imlight-Showtechnic' = 603,
		'Devantech Ltd.' = 17494,
		'Arthur Digital Solutions Kft' = 32487,
		'SAN JACK ANALOG HOUSE CO., LTD.' = 16465,
		'HERA LED' = 26732,
		'Robert Juliat' = 2478,
		'Amptown Lichttechnik GmbH' = 16717,
		'IBL/ESD-Datentechnik GmbH' = 1669,
		'ADL Electronics Ltd.' = 2202,
		'Joshua 1 Systems Inc.' = 18993,
		'Ingenieurbuero Stahlkopf' = 4976,
		'Stealth Light srl' = 2227,
		'Red Arrow Controls' = 2272,
		'RayComposer - R. Adams' = 1839,
		'Toshiba Lighting & Technology Corporation' = 26608,
		'Elation Lighting' = 8870,
		'Nixer Ltd.' = 10036,
		'Autotech Co.' = 2479,
		'DC Reactive' = 31164,
		'Doug Fleenor Design, Inc.' = 17478,
		'SGM Technology For Lighting SPA' = 21319,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY d' = 32765,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY a' = 32762,
		'ESTA' = 0,
		'Lumascape Lighting Industries' = 1388,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY 1' = 32753,
		'Niko' = 20073,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY 0' = 32752,
		'QuickSilver Controls, Inc.' = 20819,
		'Bushveld Labs' = 2220,
		'Advanced Lighting Systems' = 24940,
		'Dangeross Design' = 25700,
		'ShowCAD Control Systems Ltd.' = 21352,
		'Advatek Lighting' = 24916,
		'Fontana Fountains' = 2405,
		'RESERVED FOR PROTOTYPING/EXPERIMENTAL USE ONLY 4' = 32756,
		'City Theatrical, Inc.' = 17236,
		'PixelRange Inc.' = 28792,
		'Etherlight' = 8889,
		'LLT Lichttechnik GmbH&CO.KG' = 9766,
		'Illum Technology LLC (previously Verde Designs, Inc.)' = 2392,
		'Oase GmbH' = 20289,
		'Phaton Lighting Co., Ltd.' = 2298,
		'Pangolin Laser Systems, Inc.' = 28912,
		'Cineo Lighting' = 6669,
		'Focon Showtechnic' = 9015,
		'David O Smith Design' = 2328,
		'LightMinded Industries, Inc.' = 19546,
		'Padura Elektronik GmbH' = 8319,
		'Brompton Technology Ltd.' = 2484,
		'PXM s.c.' = 20568,
		'acdc LED Ltd.' = 19676,
		'ELC lighting' = 25964,
		'Ocean Thin Films Inc.' = 21315,
		'Alcorn McBride Inc.' = 913,
		'Golden Sea Disco Light Manufacturer' = 18259,
		'Diamante Lighting Srl' = 17513,
		'Lug Light Factory Sp. z o. o.' = 2237,
		'DALCNET SRL' = 17486,
		'Williams Electronic Design Ltd.' = 11188,
		'Nila Inc.' = 10020,
		'JIAXING XINHUALI LIGHTING & SOUNDING CO., LTD.' = 1395,
		'Mole-Richardson Co.' = 30734,
		'EVC' = 8875,
		'JPK Systems Limited' = 27243,
		'Alenco BV' = 16748,
		'Capricorn Software' = 17235,
		'D-Light Designs, LLC' = 8726,
		'FLUX ECLAIRAGE' = 1060,
		'Cinetix Medien u. Interface GmbH' = 17257,
		'MARTINI S.p.A.' = 19809,
		'MCI Group' = 2226,
		'MBN GmbH' = 28002,
		'Macostar International Ltd.' = 13192,
		'Luxam, Ltd.' = 2433,
		'Lutron Electronics' = 748,
		'Guangzhou GTD Lighting Technology Co., Ltd' = 2385,
		'Panasonic Corporation' = 1871,
		'Lite Puter Enterprise Co., Ltd.' = 5882,
		'LightProcessor Ltd' = 19536,
		'Shenzhen CreateLED Electronics Co., Ltd' = 2368,
		'Licht-Technik' = 19540,
		'Anytronics Ltd.' = 16718,
		'Legargeant and Associates' = 19557,
		'LLC Lighting Technologies production' = 2462,
		'LED Flex Limited' = 30900,
		'LEADER LIGHT s.r.o.' = 9761,
		'ELM Video Technology, Inc.' = 17741,
		'LDDE Vertriebs Gmbh' = 9762,
		'SISTEMA Jsc' = 1772,
		'DMXPROFI.EU GmbH i.G.' = 17488,
		'Audio Visual Devices P/L' = 16726,
		'Connex GmbH' = 17240,
		'JAP Optoelectronic Ltd.' = 20809,
		'AIM Northwest' = 20055,
		'Pioneer Corporation' = 10273,
	}
	enum PhysicalUnit {
		'Energy' = 13,
		'AngularAccc' = 19,
		'Force' = 8,
		'Time' = 4,
		'Acceleration' = 17,
		'None' = 0,
		'LuminousIntensity' = 6,
		'Mass' = 3,
		'AngularSpeed' = 18,
		'Frequency' = 9,
		'Volume' = 15,
		'Current' = 10,
		'ColorComponent' = 21,
		'Speed' = 16,
		'Length' = 2,
		'Power' = 12,
		'Angle' = 7,
		'WaveLength' = 20,
		'Area' = 14,
		'Voltage' = 11,
		'Temperature' = 5,
		'Percent' = 1,
	}
	enum VirtualKeyExecutionType {
		'Background' = 2,
		'Release' = 3,
		'Normal' = 0,
		'Immediate' = 1,
	}
	enum KeyFunctions {
		'Flash' = 1,
		'Temp' = 13,
		'Time' = 22,
		'LearnRate' = 9,
		'GoFast' = 5,
		'Highlight' = 19,
		'Step' = 23,
		'Select' = 24,
		'LearnSpeed' = 10,
		'Lowlight' = 20,
		'On' = 7,
		'Top' = 15,
		'Load' = 17,
		'GoBack' = 4,
		'GoBackFast' = 6,
		'Toggle' = 14,
		'Black' = 2,
		'Rate1' = 11,
		'Goto' = 16,
		'Speed1' = 12,
		'Solo' = 21,
		'Pause' = 18,
		'Off' = 8,
		'Go' = 3,
	}
	enum TimeDefault {
		'Default' = 9223372036854775807,
	}
	enum RDMPID {
		'STATUS_MESSAGES' = 48,
		'REAL_TIME_CLOCK' = 1539,
		'PRESET_PLAYBACK' = 4145,
		'DISC_UNIQUE_BRANCH' = 1,
		'SLOT_DESCRIPTION' = 289,
		'LAMP_ON_MODE' = 1028,
		'DEFAULT_SLOT_VALUE' = 290,
		'IDENTIFY_DEVICE' = 4096,
		'SENSOR_DEFINITION' = 512,
		'PRODUCT_DETAIL_ID_LIST' = 112,
		'DEVICE_MODEL_DESCRIPTION' = 128,
		'LAMP_STATE' = 1027,
		'BOOT_SOFTWARE_VERSION_LABEL' = 194,
		'PAN_INVERT' = 1536,
		'SUB_DEVICE_STATUS_REPORT_THRESHOLD' = 51,
		'RESET_DEVICE' = 4097,
		'BOOT_SOFTWARE_VERSION_ID' = 193,
		'DISC_MUTE' = 2,
		'DMX_START_ADDRESS' = 240,
		'SELF_TEST_DESCRIPTION' = 4129,
		'DISPLAY_LEVEL' = 1281,
		'DMX_PERSONALITY_DESCRIPTION' = 225,
		'SLOT_INFO' = 288,
		'CLEAR_STATUS_ID' = 50,
		'TILT_INVERT' = 1537,
		'PROXIED_DEVICE_COUNT' = 17,
		'SENSOR_VALUE' = 513,
		'RECORD_SENSORS' = 514,
		'DEVICE_INFO' = 96,
		'DEVICE_LABEL' = 130,
		'DEVICE_HOURS' = 1024,
		'CAPTURE_PRESET' = 4144,
		'LAMP_STRIKES' = 1026,
		'STATUS_ID_DESCRIPTION' = 49,
		'SOFTWARE_VERSION_LABEL' = 192,
		'QUEUED_MESSAGE' = 32,
		'PERFORM_SELFTEST' = 4128,
		'PARAMETER_DESCRIPTION' = 81,
		'PROXIED_DEVICES' = 16,
		'LAMP_HOURS' = 1025,
		'DISC_UN_MUTE' = 3,
		'PAN_TILT_SWAP' = 1538,
		'FACTORY_DEFAULTS' = 144,
		'DMX_PERSONALITY' = 224,
		'DEVICE_POWER_CYCLES' = 1029,
		'None' = 0,
		'MANUFACTURER_LABEL' = 129,
		'LANGUAGE_CAPABILITIES' = 160,
		'COMMS_STATUS' = 21,
		'SUPPORTED_PARAMETERS' = 80,
		'LANGUAGE' = 176,
		'POWER_STATE' = 4112,
		'DISPLAY_INVERT' = 1280,
	}
	enum SignalSlot {
		'Slot 3' = 2,
		'Slot 1' = 0,
		'Off' = 4294967295,
		'Slot 8' = 7,
		'Slot 2' = 1,
		'Slot 6' = 5,
		'Slot 7' = 6,
		'Slot 5' = 4,
		'Slot 4' = 3,
	}
	enum SetupType {
		'Edit' = 2,
		'Live' = 1,
		'Undefined' = 0,
	}
	enum ALSideSizeSpecial {
		'Auto' = 0,
		'Hybrid' = -1,
	}
	enum AssignmentFaderFunctions {
		'Empty' = 0,
		'Speed' = 33,
		'Time' = 37,
		'' = 0,
		'Low' = 35,
		'High' = 34,
		'Rate' = 32,
		'Solo' = 36,
		'Master' = 27,
		'X' = 28,
		'Temp' = 31,
		'XA' = 29,
		'XB' = 30,
	}
	enum LayoutElementIndicator {
		'Off' = 0,
		'Background' = 2,
		'On' = 1,
	}
	enum AssignmentHighlightSoloButtonFunctions {
		'Off' = 8,
		'Empty' = 0,
		'Toggle' = 14,
		'Temp' = 13,
		'Flash' = 1,
		'' = 0,
		'On' = 7,
	}
	enum MatricksWingsNone {
		'None' = 0,
	}
	enum GelSortType {
		'None' = 0,
		'Key' = 2,
		'Name' = 1,
	}
	enum TimeDisplayFormatSelected {
		'<Default>' = 0,
		'251:23:45' = 4,
		'10d11h23m45' = 1,
		'251h23m45' = 2,
		'10.11:23:45' = 3,
	}
	enum ShowUserEncoder {
		'Xkeys' = 2,
		'Exec' = 1,
		'Default' = 0,
	}
	enum GridSortOrder {
		'None' = 0,
		'Asc' = 1,
		'Desc' = 2,
	}
	enum WindowTypes {
		'Presets' = 2,
		'Others' = 3,
		'Pools' = 1,
		'Sheets' = 0,
	}
	enum ConnectorGender {
		'Male' = -1,
		'Universal' = 0,
		'Female' = 1,
	}
	enum InputControl3d {
		'Camera Zoom' = 3,
		'Camera Move' = 5,
		'Camera Orbit' = 2,
		'Select' = 0,
		'Camera Set Pivot' = 6,
		'Camera Pivot' = 4,
		'Follow' = 1,
	}
	enum ButtonHeight {
		//@ts-ignore
		'35' = 35,
		//@ts-ignore
		'45' = 45,
		'Default' = 50,
		//@ts-ignore
		'25' = 25,
		//@ts-ignore
		'30' = 30,
		//@ts-ignore
		'20' = 20,
		//@ts-ignore
		'50' = 50,
		//@ts-ignore
		'40' = 40,
		//@ts-ignore
		'55' = 55,
		//@ts-ignore
		'60' = 60,
	}
	enum GeneratorLimits {
		'14d' = 0,
	}
	enum DMXBreak {
		'Overwrite' = -1,
	}
	enum PresetReadoutMode {
		'ID+Name+Value' = 5,
		'ID+Name' = 4,
		'Name' = 0,
		'ID' = 3,
		'Value' = 1,
		'Name+Value' = 2,
	}
	enum DisplayIndex {
		'None' = 4294967295,
	}
	enum MatricksInvert {
		'' = 0,
		'On' = 1,
	}
	enum SyntaxState {
		'DoType' = 38,
		'DoPark' = 34,
		'DoIncrement' = 25,
		'DoFix' = 37,
		'DoDelete' = 21,
		'DoLabel' = 32,
		'DoDebug' = 39,
		'DoPatch' = 33,
		'DoMove' = 20,
		'DoLogout' = 7,
		'DoImport' = 12,
		'DoSaveShowfile' = 11,
		'DoAlign' = 29,
		'DoBeat' = 43,
		'DoEdit' = 16,
		'DoCall' = 22,
		'DoExecute' = 2,
		'DoStore' = 14,
		'DoSelectFixtures' = 24,
		'SyntaxError' = 0,
		'DoShutdown' = 5,
		'None' = 1,
		'DoList' = 40,
		'DoUpdate' = 15,
		'DoValueReadout' = 31,
		'DoCopy' = 18,
		'DoNotCare' = 44,
		'DoAssign' = 28,
		'DoFader' = 3,
		'DoIncrementReset' = 26,
		'DoSetDMXReadout' = 9,
		'DoGrid' = 41,
		'DoAlignTransition' = 30,
		'DoSet' = 27,
		'DoSelect' = 36,
		'DoPaste' = 19,
		'DoSetLanguage' = 8,
		'DoLocking' = 35,
		'DoExport' = 13,
		'DoLogin' = 6,
		'DoCrashMe' = 23,
		'DoCut' = 17,
		'DoChangeDestination' = 4,
		'DoExchange' = 42,
		'DoLoadShowfile' = 10,
	}
	enum DisplayScales {
		'1.25x' = 20971520,
		'1x' = 16777216,
		'2x' = 33554432,
		'0.75x' = 12582912,
		'1.75x' = 29360128,
		'2.5x' = 41943040,
		'1.5x' = 25165824,
	}
	enum ColumnOrder {
		'Right Left' = 1,
		'Left Right' = 0,
	}
	enum RDMDataType {
		'DS_NOT_DEFINED' = 0,
		'DS_SIGNED_DWORD' = 8,
		'DS_UNSIGNED_WORD' = 5,
		'DS_UNSIGNED_DWORD' = 7,
		'DS_MS' = 128,
		'DS_BIT_FIELD' = 1,
		'DS_UNSIGNED_BYTE' = 3,
		'DS_SIGNED_WORD' = 6,
		'DS_SIGNED_BYTE' = 4,
		'DS_ASCII' = 2,
	}
	enum MatricksInvertStyle {
		'P+T' = 2,
		'Pan' = 0,
		'All' = 3,
		'Tilt' = 1,
	}
	enum FixtureInvert {
		//@ts-ignore
		'1' = 1,
		//@ts-ignore
		'0' = 0,
		'' = 0,
		'false' = 0,
		'on' = 1,
		'true' = 1,
		'off' = 0,
		'Inverted' = 1,
		'<Blank>' = 0,
		'No' = 1,
		'Yes' = 1,
	}
	enum DmxSheetSettingsShowField {
		'Attribute' = 0,
		'Id' = 1,
		'Value' = 2,
	}
	enum WindowMode3d {
		'Setup' = 1,
		'Standard' = 0,
	}
	enum WeekDay {
		'Thursday' = 3,
		'Wednesday' = 2,
		'Sunday' = 6,
		'Saturday' = 5,
		'Friday' = 4,
		'Monday' = 0,
		'Tuesday' = 1,
	}
	enum ConnectionLimitOnPC {
		//@ts-ignore
		'2' = 2,
		//@ts-ignore
		'1' = 1,
		//@ts-ignore
		'5' = 5,
		//@ts-ignore
		'4' = 4,
		//@ts-ignore
		'3' = 3,
	}
	enum ArtNetBroadcastThreshold {
		'Default(5)' = 5,
	}
	enum PlaybacksToShow {
		'Timecodes' = 2,
		'Macros' = 1,
		'Sequences' = 0,
	}
	enum FrameFormatClockSource {
		'30 fps' = 30,
		'25 fps' = 25,
		'24 fps' = 24,
		'Seconds' = 100,
		'<Clock Source>' = 0,
		'60 fps' = 60,
	}
	enum CameraMode {
		'2D_Front' = 1,
		'2D_Top' = 3,
		'2D_Left' = 2,
		'3D' = 0,
		'2D_Back' = 5,
		'2D_Right' = 4,
	}
	enum FrameFormat {
		'30 fps' = 30,
		'25 fps' = 25,
		'24 fps' = 24,
		'Seconds' = 0,
		'60 fps' = 60,
	}
	enum ReleaseType {
		'Alpha' = 0,
		'Release' = 2,
		'Beta' = 1,
	}
	enum MessagePriority {
		'Undefined' = 0,
		'Errors' = 3,
		'Spam' = 1,
		'Alerts' = 4,
		'Warnings' = 2,
	}
	enum SelectionMode {
		'Linearize' = 1,
		'2D Grid' = 0,
	}
	enum RDMNotificationThresholdOperator {
		'Is' = 1,
		'IsNot' = 2,
		'Less' = 4,
		'Greate' = 3,
		'' = 0,
	}
	enum ValueReadoutMode {
		'Percent' = 0,
		'Hex16' = 7,
		'Hex24' = 8,
		'Physical' = 2,
		'Decimal8' = 3,
		'Decimal24' = 5,
		'PercentFine' = 1,
		'Decimal16' = 4,
		'Hex8' = 6,
	}
	enum WhiteListPacketNames {}
	enum GroupSelectionType {
		'Absolute' = 1,
		'Relative' = 0,
	}
	enum GeometryType {
		'FilterColor' = 3,
		'Beam' = 2,
		'FilterBeam' = 5,
		'Display' = 10,
		'None' = 0,
		'FilterShaper' = 6,
		'MediaServerLayer' = 7,
		'FilterGobo' = 4,
		'Axis' = 1,
		'MediaServerCamera' = 8,
		'MediaServerMaster' = 9,
	}
	enum PathType {
		'ColorTheme' = 30,
		'ViewLibrarySmartView' = 59,
		'Mesh' = 37,
		'ViewLibraryDmxSheet' = 52,
		'MvrLibrary' = 78,
		'ExportRemoteMidi' = 19,
		'Export' = 12,
		'CrashLog' = 23,
		'AddonLibrary' = 41,
		'MenuLibrary' = 42,
		'Undo' = 22,
		'Software' = 76,
		'ExternalPackages' = 2,
		'KeyboardShortcuts' = 75,
		'GrandMA2Library' = 70,
		'UserMesheImages' = 83,
		'Backupfiles' = 25,
		'ExportOutputConfig' = 21,
		'Data' = 7,
		'Usb' = 10,
		'MADir' = 3,
		'ViewLibraryGenericPool' = 60,
		'ExportRemoteDMX' = 20,
		'ExportNetworkKeys' = 14,
		'ViewLibraryTimecodeWindow' = 67,
		'ViewLibraryFixtureSheet' = 51,
		'Fonts' = 33,
		'InstallationPackages' = 5,
		'ViewLibraryPresetPool' = 61,
		'FixtureImageLibrary' = 38,
		'ExportSACN' = 16,
		'GoboImageLibrary' = 35,
		'Config' = 9,
		'ImageLibrary' = 34,
		'LayoutLibrary' = 79,
		'FixtureLibrary' = 69,
		'Shared' = 8,
		'MediaLibrary' = 48,
		'GoboImageCache' = 36,
		'ViewButtonLibrary' = 68,
		'PresetLibrary' = 47,
		'ViewLibrarySysteminfoWindow' = 65,
		'ViewLibrarySysmonWindow' = 66,
		'MatricksLibrary' = 45,
		'WebResource' = 28,
		'Language' = 29,
		'AppearanceLibrary' = 46,
		'ViewLibraryRunningPlaybacks' = 57,
		'UpdateDir' = 6,
		'ExportArtNet' = 17,
		'ViewLibrarySequenceSheet' = 53,
		'ViewLibrarySelectionView' = 64,
		'VizLibrary' = 77,
		'ExportOSC' = 15,
		'Keyboards' = 74,
		'ViewLibraryMessageGrid' = 56,
		'Resource' = 27,
		'ViewLibraryHelpViewerWindow' = 63,
		'ViewLibrary' = 50,
		'ViewLibraryCommandlineWindow' = 62,
		'ViewLibraryClockWindow' = 58,
		'DemoShowfiles' = 26,
		'ViewLibraryContentSheet' = 54,
		'VersionDir' = 4,
		'ExportRemoteDC' = 18,
		'UserMeshes' = 82,
		'UserFixtures' = 80,
		'UserGobos' = 81,
		'GdtfLibrary' = 72,
		'UserLibrary' = 73,
		'Shaders' = 31,
		'MacroLibrary' = 44,
		'PluginLibrary' = 43,
		'Showfiles' = 24,
		'GelLibrary' = 40,
		'ViewLibraryWindow3D' = 55,
		'ExternalRoot' = 1,
		'BinaryDir' = 0,
		'Textures' = 32,
		'Temp' = 11,
		'GrandMA3Library' = 71,
		'CustomImageLibrary' = 39,
		'StageLibrary' = 49,
		'ExportUserProfiles' = 13,
	}
	enum ProgValueSource {
		'PlaybackMIBFade' = 15,
		'PlaybackRelease' = 13,
		'Release' = 4,
		'SelectedPlaybackTracked' = 25,
		'PlaybackDownGoing' = 12,
		'ProgIntegrated' = 3,
		'PlaybackBlocked' = 10,
		'PlaybackOtherTracked' = 17,
		'None' = 0,
		'PlaybackOtherMIB' = 22,
		'ActivePreset' = 6,
		'PlaybackOtherMIBFade' = 23,
		'SelectedPlaybackMIBFade' = 31,
		'PlaybackOther' = 16,
		'SelectedPlaybackUpGoing' = 27,
		'SelectedPlaybackDownGoing' = 28,
		'SelectedPlaybackBlocked' = 26,
		'ActiveIntegrated' = 7,
		'PlaybackOtherUpGoing' = 19,
		'PlaybackOtherRelease' = 21,
		'SelectedPlayback' = 24,
		'SelectedPlaybackMIB' = 30,
		'ProgValue' = 1,
		'ProgPreset' = 2,
		'PlaybackTracked' = 9,
		'PlaybackOtherBlocked' = 18,
		'Playback' = 8,
		'PlaybackMIB' = 14,
		'ActiveValue' = 5,
		'PlaybackUpGoing' = 11,
		'SelectedPlaybackRelease' = 29,
		'PlaybackOtherDownGoing' = 20,
	}
	enum RDMSensorType {
		'SENS_ANGULAR_VELOCITY' = 21,
		'SENS_LUMINOUS_INTENSITY' = 22,
		'SENS_DENSITY' = 10,
		'SENS_POSITION_X' = 18,
		'SENS_TEMPERATURE' = 0,
		'SENS_POSITION_Z' = 20,
		'SENS_MS' = 128,
		'SENS_VOLUME' = 9,
		'SENS_CHROMINANCE_BLUE' = 27,
		'SENS_RESISTANCE' = 4,
		'SENS_ANGLE' = 17,
		'SENS_ACCELERATION' = 12,
		'SENS_PRESSURE' = 15,
		'SENS_AREA' = 8,
		'SENS_FREQUENCY' = 3,
		'SENS_COUNTER_16BIT' = 32,
		'SENS_ILLUMINANCE' = 24,
		'SENS_LENGTH' = 7,
		'SENS_ENERGY' = 14,
		'SENS_POWER' = 5,
		'SENS_MASS' = 6,
		'SENS_ITEMS' = 30,
		'SENS_CHROMINANCE_GREEN' = 26,
		'SENS_OTHER' = 127,
		'SENS_CURRENT' = 2,
		'SENS_TIME' = 16,
		'SENS_CHROMINANCE_RED' = 25,
		'SENS_VELOCITY' = 11,
		'SENS_CONTACTS' = 28,
		'SENS_FORCE' = 13,
		'SENS_POSITION_Y' = 19,
		'SENS_HUMIDITY' = 31,
		'SENS_LUMINOUS_FLUX' = 23,
		'SENS_MEMORY' = 29,
		'SENS_VOLTAGE' = 1,
	}
	enum ChannelFilterMode {
		'Active' = 4,
		'All' = 5,
		'Look' = 6,
		'Active For Selected' = 2,
		'All For Selected' = 3,
	}
	enum MibMultiStep {
		'Running' = 0,
		'Paused' = 1,
	}
	enum AlignMode {
		'Off' = 0,
		'/' = 1,
		'>' = 3,
		'><' = 4,
		'<' = 2,
		'<>' = 5,
	}
	enum EncoderLinkPhaser {
		'Single' = 0,
		'AtFilter' = 2,
		'Feature' = 1,
	}
	enum LampType {
		'Tungsten' = 1,
		'LED' = 3,
		'Halogen' = 2,
		'Discharge' = 0,
	}
	enum WingType {
		'grandMA3 Compact' = 4,
		'grandMA3 Fader Module Encoder (MFE)' = 2,
		'grandMA3 Master Module (MM)' = 0,
		'grandMA3 Fader Module Crossfader (MFX)' = 1,
		'grandMA3 TEST' = 3,
	}
	enum LayoutType {
		'Grid' = 1,
		'Line' = 0,
		'Circle' = 2,
	}
	enum DmxSheetSettingsAddressMode {
		'Absolute' = 1,
		'Univ.addr' = 0,
	}
	enum SelectedSelection {
		//@ts-ignore
		'2' = 1,
		//@ts-ignore
		'1' = 0,
	}
	enum GestureId {
		'PanScrollArea' = 3,
		'Click' = 2,
		'Swipe' = 1,
		'!Invalid!' = 32769,
		'Pan' = 0,
	}
	enum MonthShort {
		'Nov' = 10,
		'Aug' = 7,
		'Jul' = 6,
		'Jun' = 5,
		'Jan' = 0,
		'Dec' = 11,
		'Sep' = 8,
		'Oct' = 9,
		'May' = 4,
		'Mar' = 2,
		'Feb' = 1,
		'Apr' = 3,
	}
	enum MibEnableMode {
		'Enabled' = 0,
		'Force Early' = 2,
		'Force UponGo' = 3,
		'Force Late ' = 4,
		'Never' = 1,
	}
	enum FixtureTypeSource {
		'GDTF' = 2,
		'In current show' = 4,
		'grandMA2' = 1,
		'grandMA3' = 0,
		'User' = 3,
	}
	enum SignalOff {
		'Off' = 4294967295,
	}
	enum MeasurementInterpolation {
		'Log' = 2,
		'Step' = 1,
		'Linear' = 0,
	}
	enum ScrollItemPlacementType {
		'Auto' = 0,
		'End' = 2,
		'Begin' = 1,
	}
	enum FixtureSheetFixedColumnType {
		'Selected' = 1,
		'' = 0,
		'PartlySelected' = 3,
		'SelectedInverted' = 2,
	}
	enum RDMSlotId {
		'SD_EDGE' = 1026,
		'SD_COLOR_SATURATION' = 535,
		'SD_COLOR_CORRECTION' = 520,
		'SD_ROTO_GOBO_WHEEL' = 770,
		'SD_COLOR_ADD_COOL_WHITE' = 532,
		'SD_EFFECTS_WHEEL' = 772,
		'SD_COLOR_ADD_WHITE' = 530,
		'SD_FOUNTAIN_CONTROL' = 1288,
		'SD_COLOR_ADD_BLUE' = 519,
		'SD_COLOR_SEMAPHORE' = 528,
		'SD_PAN' = 257,
		'SD_HEATER_CONTROL' = 1287,
		'SD_COLOR_ADD_GREEN' = 518,
		'SD_LAMP_CONTROL' = 1281,
		'SD_FIXTURE_CONTROL' = 1282,
		'SD_STROBE' = 1028,
		'SD_POWER_CONTROL' = 1285,
		'SD_UNDEFINED' = 65535,
		'SD_ZOOM' = 1029,
		'SD_TILT' = 258,
		'SD_COLOR_ADD_RED' = 517,
		'SD_COLOR_HUE' = 534,
		'SD_PRISM_WHEEL' = 771,
		'SD_COLOR_WHEEL' = 513,
		'SD_MACRO' = 1284,
		'SD_COLOR_SUB_YELLOW' = 515,
		'SD_COLOR_SUB_MAGENTA' = 516,
		'SD_COLOR_SUB_UV' = 533,
		'SD_INTENSITY_MASTER' = 2,
		'SD_INTENSITY' = 1,
		'SD_FIXTURE_SPEED' = 1283,
		'SD_FROST' = 1027,
		'SD_COLOR_SCROLL' = 521,
		'SD_COLOR_ADD_WARM_WHITE' = 531,
		'SD_BARN_DOOR' = 1033,
		'SD_COLOR_SUB_CYAN' = 514,
		'SD_FRAMING_SHUTTER' = 1030,
		'SD_STATIC_GOBO_WHEEL' = 769,
		'SD_DOUSER' = 1032,
		'SD_COLOR_ADD_AMBER' = 529,
		'SD_FAN_CONTROL' = 1286,
		'SD_BEAM_SIZE_IRIS' = 1025,
		'SD_SHUTTER_ROTATE' = 1031,
	}
	enum ValueLayer {
		'Fade' = 1,
		'Relative' = 10,
		'Delay' = 2,
		'Absolute' = 9,
	}
	enum ShuffleMode {
		'Auto' = 0,
		'Linked' = 1,
		'Unlinked' = 2,
	}
	enum AxisGroupType {
		'XY' = 0,
		'XZ' = 1,
		'YZ' = 2,
	}
	enum ECRec {
		'false' = 0,
		//@ts-ignore
		'1' = 1,
		//@ts-ignore
		'0' = 0,
		'true' = 1,
		'No' = 0,
		'off' = 0,
		'' = 1,
		'on' = 1,
	}
	enum SpotQuality3d {
		'No Spot' = -1,
		'Gobo' = 0,
	}
	enum SeqRestartMode {
		'First Cue' = 0,
		'Current Cue' = 1,
		'Next Cue' = 2,
	}
	enum MibTiming {
		'Default' = 9223372036854775807,
	}
	enum AssignmentSpeedButtonFunctions {
		'Empty' = 0,
		'Time' = 22,
		'Pause' = 18,
		'GoStep' = 23,
		'Toggle' = 14,
		'Off' = 8,
		'Highlight' = 19,
		'Solo' = 21,
		'Speed1' = 12,
		'LearnSpeed' = 10,
		'' = 0,
		'Lowlight' = 20,
		'On' = 7,
	}
	enum PlaybackPriority {
		'Lowest' = 8,
		'High' = 5,
		'Low' = 7,
		'LTP' = 6,
		'Swap' = 2,
		'Highest' = 4,
		'Super' = 0,
		'HTP' = 3,
	}
	enum LayoutStretch {
		'Bar' = 1,
		'Stretch' = 0,
		'Crop' = 2,
	}
	enum Roles {
		'DisplayShort' = 2,
		'Edit' = 3,
		'Default' = 0,
		'Display' = 1,
	}
	enum AssignmentGrandMasterButtonFunctions {
		'Black' = 2,
		'Empty' = 0,
		'' = 0,
		'Flash' = 1,
	}
	enum GridContentFilterMode {
		'And' = 0,
		'Or' = 1,
	}
	enum Fade {
		'None' = -1,
	}
	enum AssignType {
		'Empty' = 0,
		'World' = 6,
		'Macro' = 2,
		'View' = 1,
		'User' = 10,
		'Sequence' = 7,
		'MAtricks' = 13,
		'Sound' = 9,
		'Plugin' = 3,
		'Master' = 8,
		'ScreenConfig' = 11,
		'Menu' = 4,
		'Group' = 5,
		'Fixture' = 12,
	}
	enum StoremodeRadio {
		'Release' = 4,
		'Remove' = 3,
		'Ask' = -1,
		'Overwrite' = 1,
		'Merge' = 2,
	}
	enum DmxPrio {
		'Super' = 128,
		'Prog' = 112,
		'Highest' = 64,
		'High' = 48,
		'Low' = 16,
		'LTP' = 32,
		'Swap' = 96,
		'Lowest' = 0,
		'HTP' = 80,
	}
	enum InputType {
		'Scroller' = 3,
		'Keyboard' = 2,
		'Mouse' = 0,
		'Touch' = 1,
	}
	enum DisplayType {
		'Long' = 1,
		'Big' = 0,
		'Small' = 2,
	}
	enum TrackEditGrouping {
		'Feature' = 1,
		'All Fixtures' = 3,
		'Selection' = 0,
		'Activation Group' = 2,
	}
	enum EncoderFunction {
		'PresetTiming3' = 4,
		'PresetTiming2' = 3,
		'PresetTiming1' = 2,
		'Data Edit' = 9,
		'MIB' = 6,
		'CueSettings' = 0,
		'Cmd' = 8,
		'CueTiming' = 1,
	}
	enum RDMResponseNackReason {
		'Value for given Parameter out of allowable range or not supported.' = 6,
		'Proxy is not the RDM line master and cannot comply with message.' = 3,
		'Not valid for Command Class attempted. May be used where GET allowed but SET is not supported.' = 5,
		'Sub-Device is out of range or unknown.' = 9,
		'SET Command normally allowed but being blocked currently.' = 4,
		'The responder cannot interpret request as controller data was not formatted correctly.' = 1,
		'The responder cannot comply with request because the message is not implemented in responder.' = 0,
		'The responder cannot comply due to an internal hardware fault.' = 2,
		'The proxy buffer is full and can not store any more Queued Message or Status Message responses.' = 10,
		'Incoming message exceeds buffer capacity.' = 8,
		'Buffer or Queue space currently has no free space to store data.' = 7,
	}
	enum RDMProductDetail {
		'PRODUCT_DETAIL_COLORSCROLLER' = 256,
		'PRODUCT_DETAIL_OTHER_ROTATOR' = 1281,
		'PRODUCT_DETAIL_CONTACTOR' = 1039,
		'PRODUCT_DETAIL_FILM' = 514,
		'PRODUCT_DETAIL_LN2' = 772,
		'PRODUCT_DETAIL_ANALOG_MULTIPLEX' = 1795,
		'PRODUCT_DETAIL_FLAME_OTHER' = 775,
		'PRODUCT_DETAIL_MERGE' = 1538,
		'PRODUCT_DETAIL_SPLITTER' = 1536,
		'PRODUCT_DETAIL_SINE' = 1026,
		'PRODUCT_DETAIL_LCDGATE' = 516,
		'PRODUCT_DETAIL_MIXER' = 2050,
		'PRODUCT_DETAIL_LED' = 4,
		'PRODUCT_DETAIL_CONTROLLABLE_BREAKER' = 2562,
		'PRODUCT_DETAIL_ELECTROLUMINESCENT' = 7,
		'PRODUCT_DETAIL_HIGHFREQUENCY_12V' = 1035,
		'PRODUCT_DETAIL_CURTAIN' = 1283,
		'PRODUCT_DETAIL_SWITCH_ELECTRONIC' = 1038,
		'PRODUCT_DETAIL_REVERSE_PHASE_CONTROL' = 1025,
		'PRODUCT_DETAIL_MOTOR_CONTROL' = 1285,
		'PRODUCT_DETAIL_BARNDOOR_SHUTTER' = 262,
		'PRODUCT_DETAIL_BATTERY' = 2561,
		'PRODUCT_DETAIL_COLORCHANGE' = 258,
		'PRODUCT_DETAIL_GOBO_ROTATOR' = 264,
		'PRODUCT_DETAIL_GFI_RCD' = 2560,
		'PRODUCT_DETAIL_FOGGER_WATER' = 770,
		'PRODUCT_DETAIL_TEST' = 2306,
		'PRODUCT_DETAIL_NOT DECLARED' = 0,
		'PRODUCT_DETAIL_COLDCATHODE' = 6,
		'PRODUCT_DETAIL_PHASE_CONTROL' = 1024,
		'PRODUCT_DETAIL_METAL_HALIDE' = 2,
		'PRODUCT_DETAIL_HFHV_EL' = 1031,
		'PRODUCT_DETAIL_HFHV_NEONBALLAST' = 1030,
		'PRODUCT_DETAIL_LINESET' = 1284,
		'PRODUCT_DETAIL_BITANGLE_MODULATION' = 1033,
		'PRODUCT_DETAIL_PROFILE_SHUTTER' = 261,
		'PRODUCT_DETAIL_PROTOCOL_CONVERTOR' = 1793,
		'PRODUCT_DETAIL_FLAME_PROPANE' = 774,
		'PRODUCT_DETAIL_HAZARD' = 781,
		'PRODUCT_DETAIL_MIRRORBALL_ROTATOR' = 1280,
		'PRODUCT_DETAIL_WIRELESS_LINK' = 1540,
		'PRODUCT_DETAIL_FLUROESCENT' = 5,
		'PRODUCT_DETAIL_COLORWHEEL' = 257,
		'PRODUCT_DETAIL_CHANGEOVER_MANUAL' = 2304,
		'PRODUCT_DETAIL_FOGGER_MINERALOIL' = 769,
		'PRODUCT_DETAIL_WIND' = 779,
		'PRODUCT_DETAIL_WATER_JET' = 778,
		'PRODUCT_DETAIL_CHANGEOVER_AUTO' = 2305,
		'PRODUCT_DETAIL_VIDEO' = 512,
		'PRODUCT_DETAIL_SWITCH_PANEL' = 1796,
		'PRODUCT_DETAIL_C02' = 771,
		'PRODUCT_DETAIL_SNOW' = 777,
		'Manufacturer Specific' = 32768,
		'PRODUCT_DETAIL_RELAY_ELECTRONIC' = 1037,
		'PRODUCT_DETAIL_FOGGER_GLYCOL' = 768,
		'PRODUCT_DETAIL_INCANDESCENT' = 3,
		'PRODUCT_DETAIL_PWM' = 1027,
		'PRODUCT_DETAIL_CONFETTI' = 780,
		'PRODUCT_DETAIL_BUBBLE' = 773,
		'PRODUCT_DETAIL_ARC' = 1,
		'PRODUCT_DETAIL_ROUTER' = 2048,
		'PRODUCT_DETAIL_DC' = 1028,
		'PRODUCT_DETAIL_RELAY_MECHANICAL' = 1036,
		'PRODUCT_DETAIL_SLIDE' = 513,
		'PRODUCT_DETAIL_FLASHTUBE' = 9,
		'PRODUCT_DETAIL_ANALOG_DEMULTIPLEX' = 1794,
		'PRODUCT_DETAIL_MHR_BALLAST' = 1032,
		'PRODUCT_DETAIL_FADER' = 2049,
		'PRODUCT_DETAIL_DIMMING_SHUTTER' = 260,
		'PRODUCT_DETAIL_LASER' = 8,
		'PRODUCT_DETAIL_OTHER' = 32767,
		'PRODUCT_DETAIL_OLEFACTORY_STIMULATOR' = 776,
		'PRODUCT_DETAIL_FREQUENCY_MODULATION' = 1034,
		'PRODUCT_DETAIL_OILWHEEL' = 515,
		'PRODUCT_DETAIL_EFFECTS_DISC' = 263,
		'PRODUCT_DETAIL_HFBALLAST' = 1029,
		'PRODUCT_DETAIL_DAMPER_CONTROL' = 1286,
		'PRODUCT_DETAIL_KABUKI_DROP' = 1282,
		'PRODUCT_DETAIL_IRIS_DOUSER' = 259,
		'PRODUCT_DETAIL_DATAPATCH' = 1539,
		'PRODUCT_DETAIL_ETHERNET_NODE' = 1537,
	}
	enum TCTextMode {
		'Selected' = 2,
		'Markers' = 3,
		'All' = 0,
		'Tracks' = 1,
	}
	enum RDMStatusMessageType {
		'STATUS_GET_LAST_MESSAGE' = 1,
		'STATUS_ADVISORY_CLEARED' = 18,
		'STATUS_NONE' = 0,
		'STATUS_ADVISORY' = 2,
		'STATUS_WARNING' = 3,
		'STATUS_WARNING_CLEARED' = 19,
		'STATUS_ERROR_CLEARED' = 20,
		'STATUS_ERROR' = 4,
	}
	enum ExitCode {
		'GeneralError' = 5,
		'Normal' = 0,
		'Restart' = 1,
		'Reboot' = 2,
		'AutoPluginFailed' = 3,
		'PowerDown' = 4,
	}
	enum ActiveDisplay {
		'Beat' = 2,
		'Wave' = 0,
		'Sound' = 1,
	}
	enum ProgrammingLayer {
		'Decel' = 12,
		'Phase' = 4,
		'Absolute' = 9,
		'Speed' = 3,
		'Transition' = 13,
		'Width' = 14,
		'Relative' = 10,
		'MAgic' = 5,
		'Accel' = 11,
		'Delay' = 2,
		'Fade' = 1,
	}
	enum RDMPidValueResetDevice {
		'Warm' = 1,
		'' = 0,
		'Cold' = 255,
	}
	enum DmxSheetFixedColumnType {
		'Address2' = 1,
		'Address' = 0,
	}
	enum AssignmentButtonFunctions {
		'Flash' = 1,
		'Empty' = 0,
		'Time' = 22,
		'LearnRate' = 9,
		'GoStep' = 23,
		'Highlight' = 19,
		'Select' = 24,
		'LearnSpeed' = 10,
		'Fix' = 95,
		'Lowlight' = 20,
		'On' = 7,
		'Top' = 15,
		'<<<' = 6,
		'Toggle' = 14,
		'Pause' = 18,
		'Temp' = 13,
		'' = 0,
		'Speed1' = 12,
		'Black' = 2,
		'Rate1' = 11,
		'Solo' = 21,
		'SelFix' = 106,
		'>>>' = 5,
		'Off' = 8,
		'Go+' = 3,
		'Go-' = 4,
	}
}
declare function ErrEcho(...args: any): any;
declare function ErrPrintf(...args: any): any;
declare function Export(...args: any): any;
declare function ExportCSV(...args: any): any;
declare function ExportJson(...args: any): any;
declare function FileExists(...args: any): any;
declare function FindBestDMXPatchAddr(...args: any): any;
declare function FindBestFocus(...args: any): any;
declare function FindNextFocus(...args: any): any;
declare function FindTexture(...args: any): any;
declare function FixtureType(...args: any): any;
declare function FromAddr(...args: any): any;
declare function GetAttributeByUIChannel(...args: any): any;
declare function GetAttributeCount(...args: any): any;
declare function GetAttributeIndex(...args: any): any;
declare function GetButton(...args: any): any;
declare function GetChannelFunction(...args: any): any;
declare function GetChannelFunctionIndex(...args: any): any;
declare function GetDisplayByIndex(...args: any): any;
declare function GetDisplayCollect(...args: any): any;
declare function GetDMXUniverse(...args: any): any;
declare function GetDMXValue(...args: any): any;
declare function GetExecutor(...args: any): any;
declare function GetFocus(...args: any): any;
declare function GetFocusDisplay(...args: any): any;
declare function GetPath(...args: any): any;
declare function GetPathOverrideFor(...args: any): any;
declare function GetPathSeparator(...args: any): any;
declare function GetPathType(...args: any): any;
declare function GetPresetData(...args: any): any;
declare function GetProgPhaser(...args: any): any;
declare function GetProgPhaserValue(...args: any): any;
declare function GetPropertyColumnId(...args: any): any;
declare function GetRTChannel(...args: any): any;
declare function GetRTChannelCount(...args: any): any;
declare function GetSelectedAttribute(...args: any): any;
declare function GetSubfixture(...args: any): any;
declare function GetSubfixtureCount(...args: any): any;
declare function GetTokenName(...args: any): any;
declare function GetTokenNameByIndex(...args: any): any;
declare function GetTopModal(...args: any): any;
declare function GetTopOverlay(...args: any): any;
declare function GetUIChannel(...args: any): any;
declare function GetUIChannelCount(...args: any): any;
declare function GetUIChannelIndex(...args: any): any;
declare function GetUIChannels(...args: any): any;
declare function GetUIObjectAtPosition(...args: any): any;
declare function GetVar(...args: any): any;
declare function GlobalVars(...args: any): any;
declare function HandleToInt(...args: any): any;
declare function HandleToStr(...args: any): any;
declare function HookObjectChange(...args: any): any;
declare function HostOS(...args: any): any;
declare function HostSubType(...args: any): any;
declare function HostType(...args: any): any;
declare function Import(...args: any): any;
declare function IncProgress(...args: any): any;
declare function IntToHandle(...args: any): any;
declare function IsObjectValid(...args: any): any;
declare function Keyboard(...args: any): any;
declare function KeyboardObj(...args: any): any;
declare function LoadExecConfig(...args: any): any;
declare function LoadStorePreferencesFromProfile(...args: any): any;
declare function MessageBox(...args: any): any;
declare function Mouse(...args: any): any;
declare function MouseObj(...args: any): any;
declare const MultiLanguage: Array<[string, string]>;
declare namespace Obj {
	function AddListChildren(...args: any): any;
	function AddListChildrenNames(...args: any): any;
	function AddListLuaItem(...args: any): any;
	function AddListLuaItems(...args: any): any;
	function AddListNumericItem(...args: any): any;
	function AddListNumericItems(...args: any): any;
	function AddListObjectItem(...args: any): any;
	function AddListPropertyItem(...args: any): any;
	function AddListPropertyItems(...args: any): any;
	function AddListRecursiveNames(...args: any): any;
	function AddListStringItem(...args: any): any;
	function AddListStringItems(...args: any): any;
	function Addr(...args: any): any;
	function AddrNative(...args: any): any;
	function Append(...args: any): any;
	function Aquire(...args: any): any;
	function Changed(...args: any): any;
	function Children(...args: any): any;
	function ClearList(...args: any): any;
	function ClearUIChildren(...args: any): any;
	function CommandAt(...args: any): any;
	function CommandCall(...args: any): any;
	function CommandCreateDefaults(...args: any): any;
	function CommandDelete(...args: any): any;
	function CommandStore(...args: any): any;
	function Compare(...args: any): any;
	function Copy(...args: any): any;
	function Count(...args: any): any;
	function Create(...args: any): any;
	function CurrentChild(...args: any): any;
	function Delete(...args: any): any;
	function Export(...args: any): any;
	function Find(...args: any): any;
	function FindListItemByName(...args: any): any;
	function FindListItemByValueStr(...args: any): any;
	function FindParent(...args: any): any;
	function FindRecursive(...args: any): any;
	function Get(...args: any): any;
	function GetAssignedObj(...args: any): any;
	function GetChildClass(...args: any): any;
	function GetClass(...args: any): any;
	function GetDisplay(...args: any): any;
	function GetDisplayIndex(...args: any): any;
	function GetExportFileName(...args: any): any;
	function GetFader(...args: any): any;
	function GetFaderText(...args: any): any;
	function GetListItemAppearance(...args: any): any;
	function GetListItemButton(...args: any): any;
	function GetListItemName(...args: any): any;
	function GetListItemsCount(...args: any): any;
	function GetListItemValueI64(...args: any): any;
	function GetListItemValueStr(...args: any): any;
	function GetListSelectedItemIndex(...args: any): any;
	function GetOverlay(...args: any): any;
	function GetScreen(...args: any): any;
	function GetUIChild(...args: any): any;
	function GetUIChildrenCount(...args: any): any;
	function GridCellExists(...args: any): any;
	function GridGetBase(...args: any): any;
	function GridGetCellData(...args: any): any;
	function GridGetCellDimensions(...args: any): any;
	function GridGetData(...args: any): any;
	function GridGetDimensions(...args: any): any;
	function GridGetParentRowId(...args: any): any;
	function GridGetScrollCell(...args: any): any;
	function GridGetScrollOffset(...args: any): any;
	function GridGetSelectedCells(...args: any): any;
	function GridGetSelection(...args: any): any;
	function GridGetSettings(...args: any): any;
	function GridIsCellReadOnly(...args: any): any;
	function GridIsCellVisible(...args: any): any;
	function GridScrollCellIntoView(...args: any): any;
	function GridSetColumnSize(...args: any): any;
	function GridsGetExpandHeaderCell(...args: any): any;
	function GridsGetLevelButtonWidth(...args: any): any;
	function HasActivePlayback(...args: any): any;
	function HasParent(...args: any): any;
	function HookDelete(...args: any): any;
	function Import(...args: any): any;
	function Index(...args: any): any;
	function InputRun(...args: any): any;
	function InputSetAdditionalParameter(...args: any): any;
	function InputSetEditTitle(...args: any): any;
	function InputSetTitle(...args: any): any;
	function Insert(...args: any): any;
	function IsClass(...args: any): any;
	function IsEmpty(...args: any): any;
	function IsListItemEmpty(...args: any): any;
	function IsListItemEnabled(...args: any): any;
	function IsValid(...args: any): any;
	function Load(...args: any): any;
	function MaxCount(...args: any): any;
	function OverlaySetCloseCallback(...args: any): any;
	function Parent(...args: any): any;
	function PropertyCount(...args: any): any;
	function PropertyName(...args: any): any;
	function PropertyType(...args: any): any;
	function Ptr(...args: any): any;
	function Remove(...args: any): any;
	function RemoveListItem(...args: any): any;
	function Resize(...args: any): any;
	function Save(...args: any): any;
	function ScrollDo(...args: any): any;
	function ScrollGetInfo(...args: any): any;
	function ScrollGetItemByOffset(...args: any): any;
	function ScrollGetItemOffset(...args: any): any;
	function ScrollGetItemSize(...args: any): any;
	function ScrollIsNeeded(...args: any): any;
	function SelectListItemByIndex(...args: any): any;
	function SelectListItemByName(...args: any): any;
	function SelectListItemByValue(...args: any): any;
	function Set(...args: any): any;
	function SetChildren(...args: any): any;
	function SetEmptyListItem(...args: any): any;
	function SetEnabledListItem(...args: any): any;
	function SetFader(...args: any): any;
	function SetListItemAppearance(...args: any): any;
	function SetListItemName(...args: any): any;
	function SetPositionHint(...args: any): any;
	function ShowModal(...args: any): any;
	function ToAddr(...args: any): any;
	function UIChildren(...args: any): any;
	function UILGGetColumnAbsXLeft(...args: any): any;
	function UILGGetColumnAbsXRight(...args: any): any;
	function UILGGetColumnWidth(...args: any): any;
	function UILGGetRowAbsYBottom(...args: any): any;
	function UILGGetRowAbsYTop(...args: any): any;
	function UILGGetRowHeight(...args: any): any;
	function WaitChildren(...args: any): any;
	function WaitInit(...args: any): any;
}
declare function OverallDeviceCertificate(...args: any): any;
declare function Patch(...args: any): any;
declare function PluginVars(...args: any): any;
declare function PopupInput(...args: any): any;
declare function Printf(...args: any): any;
declare function Programmer(...args: any): any;
declare function ProgrammerPart(...args: any): any;
declare function Pult(...args: any): any;
declare function RefreshLibrary(...args: any): any;
declare function ReleaseType(...args: any): any;
declare function RenewLayoutHook(...args: any): any;
declare function Root(...args: any): any;
declare function SaveExecConfig(...args: any): any;
declare function SaveStorePreferencesToProfile(...args: any): any;
declare function Selection(...args: any): any;
declare function SelectionComponentX(...args: any): any;
declare function SelectionComponentY(...args: any): any;
declare function SelectionComponentZ(...args: any): any;
declare function SelectionCount(...args: any): any;
declare function SelectionFirst(...args: any): any;
declare function SelectionNext(...args: any): any;
declare function SelectionNotifyBegin(...args: any): any;
declare function SelectionNotifyEnd(...args: any): any;
declare function SelectionNotifyObject(...args: any): any;
declare function SerialNumber(...args: any): any;
declare function SetBlockInput(...args: any): any;
declare function SetColor(...args: any): any;
declare function SetFilterSettingsTarget(...args: any): any;
declare function SetLED(...args: any): any;
declare function SetProgPhaser(...args: any): any;
declare function SetProgPhaserValue(...args: any): any;
declare function SetProgress(...args: any): any;
declare function SetProgressRange(...args: any): any;
declare function SetProgressText(...args: any): any;
declare function SetVar(...args: any): any;
declare function ShowData(...args: any): any;
declare function ShowSettings(...args: any): any;
declare function StartProgress(...args: any): any;
declare function StopProgress(...args: any): any;
declare function StrToHandle(...args: any): any;
declare function SyncFS(...args: any): any;
declare function TextInput(...args: any): string;
declare function Time(...args: any): any;
declare function Timer(...args: any): any;
declare function ToAddr(...args: any): any;
declare function Touch(...args: any): any;
declare function TouchObj(...args: any): any;
declare function Unhook(...args: any): any;
declare function UnhookMultiple(...args: any): any;
declare function UserVars(...args: any): any;
/**
 * Returns software version of grandMA3.
 */
declare function Version(): string;
declare function WaitModal(...args: any): any;
declare function WaitObjectDelete(...args: any): any;
