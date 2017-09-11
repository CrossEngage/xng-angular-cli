export declare class ParserOptions {
    name: string;
    description?: string;
    aliases?: string[];
    run: Function;
}
export declare class Parser {
    private options;
    private globalOptions;
    constructor(options: ParserOptions[]);
    parse(input: string[]): void;
}
