export declare class FileService {
    static getTemplate(name: string): string;
    static writeFile(name: string, template: string): void;
    static createFolder(dir: string): void;
    static directiveNormalize(name: string): string;
}
