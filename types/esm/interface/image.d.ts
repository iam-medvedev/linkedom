export function ImageClass(ownerDocument: any): {
    new (width: any, height: any, ...args: any[]): {
        height: any;
        width: any;
        alt: any;
        sizes: any;
        src: any;
        srcset: any;
        title: any;
        ownerDocument: any;
        localName: any;
        blur(): void;
        click(): void;
        readonly accessKeyLabel: string;
        readonly isContentEditable: boolean;
        contentEditable: any;
        draggable: any;
        hidden: any;
        spellcheck: any;
        accessKey: any;
        dir: any;
        lang: any;
        onabort: any;
        onblur: any;
        oncancel: any;
        oncanplay: any;
        oncanplaythrough: any;
        onchange: any;
        onclick: any;
        onclose: any;
        oncontextmenu: any;
        oncuechange: any;
        ondblclick: any;
        ondrag: any;
        ondragend: any;
        ondragenter: any;
        ondragleave: any;
        ondragover: any;
        ondragstart: any;
        ondrop: any;
        ondurationchange: any;
        onemptied: any;
        onended: any;
        onerror: any;
        onfocus: any;
        oninput: any;
        oninvalid: any;
        onkeydown: any;
        onkeypress: any;
        onkeyup: any;
        onload: any;
        onloadeddata: any;
        onloadedmetadata: any;
        onloadstart: any;
        onmousedown: any;
        onmouseenter: any;
        onmouseleave: any;
        onmousemove: any;
        onmouseout: any;
        onmouseover: any;
        onmouseup: any;
        onmousewheel: any;
        onpause: any;
        onplay: any;
        onplaying: any;
        onprogress: any;
        onratechange: any;
        onreset: any;
        onresize: any;
        onscroll: any;
        onseeked: any;
        onseeking: any;
        onselect: any;
        onshow: any;
        onstalled: any;
        onsubmit: any;
        onsuspend: any;
        ontimeupdate: any;
        ontoggle: any;
        onvolumechange: any;
        onwaiting: any;
        onauxclick: any;
        ongotpointercapture: any;
        onlostpointercapture: any;
        onpointercancel: any;
        onpointerdown: any;
        onpointerenter: any;
        onpointerleave: any;
        onpointermove: any;
        onpointerout: any;
        onpointerover: any;
        onpointerup: any;
        readonly isConnected: boolean;
        readonly parentElement: any;
        readonly previousSibling: any;
        readonly nextSibling: any;
        readonly previousElementSibling: any;
        readonly nextElementSibling: any;
        before(...nodes: any[]): void;
        after(...nodes: any[]): void;
        replaceWith(...nodes: any[]): void;
        remove(): void;
        id: any;
        className: any;
        readonly nodeName: any;
        readonly tagName: any;
        readonly classList: any;
        readonly dataset: any;
        nonce: any;
        readonly style: any;
        tabIndex: number;
        readonly innerText: string;
        textContent: string;
        innerHTML: string;
        outerHTML: string;
        readonly attributes: any;
        focus(): void;
        getAttribute(name: any): any;
        getAttributeNode(name: any): import("../mixin/parent-node.js").NodeStruct;
        getAttributeNames(): import("./node-list.js").NodeList;
        hasAttribute(name: any): boolean;
        hasAttributes(): boolean;
        removeAttribute(name: any): void;
        removeAttributeNode(attribute: any): void;
        setAttribute(name: any, value: any): void;
        setAttributeNode(attribute: any): import("../mixin/parent-node.js").NodeStruct;
        toggleAttribute(name: any, force: any, ...args: any[]): boolean;
        readonly shadowRoot: any;
        attachShadow(init: any): import("./shadow-root.js").ShadowRoot;
        matches(selectors: any): any;
        closest(selectors: any): any;
        insertAdjacentElement(position: any, element: any): any;
        insertAdjacentHTML(position: any, html: any): void;
        insertAdjacentText(position: any, text: any): void;
        cloneNode(deep?: boolean): any;
        toString(): string;
        toJSON(): any[];
        getAttributeNS(_: any, name: any): any;
        getElementsByTagNameNS(_: any, name: any): import("./node-list.js").NodeList;
        hasAttributeNS(_: any, name: any): boolean;
        removeAttributeNS(_: any, name: any): void;
        setAttributeNS(_: any, name: any, value: any): void;
        setAttributeNodeNS(attr: any): import("../mixin/parent-node.js").NodeStruct;
        [CLASS_LIST]: any;
        [DATASET]: any;
        [STYLE]: any;
        readonly childNodes: import("./node-list.js").NodeList;
        readonly children: import("./node-list.js").NodeList;
        readonly firstChild: import("../mixin/parent-node.js").NodeStruct;
        readonly firstElementChild: import("../mixin/parent-node.js").NodeStruct;
        readonly lastChild: any;
        readonly lastElementChild: any;
        readonly childElementCount: number;
        prepend(...nodes: any[]): void;
        append(...nodes: any[]): void;
        replaceChildren(...nodes: any[]): void;
        getElementsByClassName(className: any): import("./node-list.js").NodeList;
        getElementsByTagName(tagName: any): import("./node-list.js").NodeList;
        querySelector(selectors: any): import("../mixin/parent-node.js").NodeStruct;
        querySelectorAll(selectors: any): import("./node-list.js").NodeList;
        appendChild(node: any): any;
        contains(node: any): boolean;
        insertBefore(node: any, before?: any): any;
        normalize(): void;
        removeChild(node: any): any;
        replaceChild(node: any, replaced: any): any;
        [PRIVATE]: any;
        [NEXT]: import("../mixin/parent-node.js").NodeStruct;
        [END]: import("../mixin/parent-node.js").NodeStruct;
        nodeType: any;
        parentNode: any;
        readonly ELEMENT_NODE: number;
        readonly ATTRIBUTE_NODE: number;
        readonly TEXT_NODE: number;
        readonly COMMENT_NODE: number;
        readonly DOCUMENT_NODE: number;
        readonly DOCUMENT_FRAGMENT_NODE: number;
        readonly DOCUMENT_TYPE_NODE: number;
        nodeValue: any;
        hasChildNodes(): boolean;
        isSameNode(node: any): boolean;
        compareDocumentPosition(target: any): number;
        isEqualNode(node: any): boolean;
        _getParent(): any;
        getRootNode(): any;
        [PREV]: any;
        addEventListener(type: any, listener: any, options: any): void;
        removeEventListener(type: any, listener: any): void;
        dispatchEvent(event: any): boolean;
    };
    readonly observedAttributes: any[];
    readonly ELEMENT_NODE: number;
    readonly ATTRIBUTE_NODE: number;
    readonly TEXT_NODE: number;
    readonly COMMENT_NODE: number;
    readonly DOCUMENT_NODE: number;
    readonly DOCUMENT_FRAGMENT_NODE: number;
    readonly DOCUMENT_TYPE_NODE: number;
};