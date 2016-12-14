export declare class ComponentService {
    static getVariables(name: string): {
        modulePrefix: string;
        moduleName: string;
        componentPrefix: string;
        component: string;
        componentName: string;
        capitalizedComponentName: string;
        controllerName: string;
        componentPath: string;
        controllerPath: string;
        templatePath: string;
    };
    static getTemplates(variables: any): {
        index: any;
        component: any;
        componentSpec: any;
        controller: any;
        html: any;
    };
    static writeFiles(variables: any, templates: any): void;
}
