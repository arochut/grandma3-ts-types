type Macros = Obj<DataPool, Macro> & Macro[] & { [index: string]: Macro };

type Macro = Obj<Layouts, MacroLine> & MacroLine[] & { [index: string]: MacroLine };

type MacroLineProps = ObjProps & {
    wait: number
    command: string
    note: string
    enabled: boolean
    addToCmdLine: boolean
    execute: boolean
};
type MacroLine = Obj<Macro, undefined> & MacroLineProps;
