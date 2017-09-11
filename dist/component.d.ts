export declare class ComponentService {
    static getVariables(args: any): {
        name: any;
        capitalizeFn: (arg: string) => any;
        camelCaseFn: (arg: string) => string;
        upperCamelCaseFn: (arg: string) => any;
    };
    static getTemplates(variables: any): {
        component: any;
        spec: any;
        template: any;
    };
    static writeFiles(variables: any, templates: any): void;
}
