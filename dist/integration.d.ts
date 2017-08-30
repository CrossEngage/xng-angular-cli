export declare class IntegrationService {
    static getVariables(args: any): {
        provider: any;
        channelType: any;
        generateSetup: any;
        generateMessageEdit: any;
        generateMessageView: any;
        generateService: any;
        generateOther: any;
        capitalizeFn: (arg: string) => any;
        camelCaseFn: (arg: string) => string;
        upperCamelCaseFn: (arg: string) => any;
    };
    static getTemplates(variables: any): {
        setupComponent: any;
        setupSpec: any;
        setupTemplate: any;
        messageEditComponent: any;
        messageEditSpec: any;
        messageEditTemplate: any;
        messageViewComponent: any;
        messageViewTemplate: any;
        service: any;
        serviceSpec: any;
        models: any;
        module: any;
        index: any;
    };
    static writeFiles(variables: any, templates: any): void;
}
