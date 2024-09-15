import { h } from "preact";
export declare const html: (strings: TemplateStringsArray, ...values: any[]) => import("preact").VNode<import("preact").Attributes> | import("preact").VNode<import("preact").Attributes>[];
export declare class AUIApp {
    root: HTMLElement;
    uiNode: UiRenderable | UiNode;
    __interval: any;
    static h: typeof h;
    static frag: import("preact").FunctionComponent<{}>;
    uiGenedProps: Record<string, any>;
    inputNodes: any[];
    renderedNodes: any[];
    constructor();
    mount(ele: any, uiNode: any): void;
    render(): void;
    _bindProps(node: Element | HTMLElement, uiNode: UiRenderable | UiNode, string_props_name: any, special_converters: any): void;
    _uiPropsGen(propTypes: Record<string, string>): {
        string_props_name: any;
        special_converters: any;
    };
    _camelCaseToDash(str: string): string;
    _dashToCamelCase(str: string): string;
    createNodeInUi(node: Element | HTMLElement): UiText | UiBox | UiInput | UiImage | UiRenderable | UiNode;
    renderNodes(node: Element, uiNode: UiRenderable | UiNode): void;
}
export * as hooks from "preact/hooks";
