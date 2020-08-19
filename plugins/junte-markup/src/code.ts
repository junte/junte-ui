import { html } from 'js-beautify';

namespace GetMarkup {
    const BACKGROUND_NAME = 'background';
    const SIZE = 500;

    export enum NodeType {
        page = 'PAGE',
        instance = 'INSTANCE',
        vector = 'VECTOR',
        rectangle = 'RECTANGLE'
    }

    figma.showUI(__html__, {width: 350, height: 100});

    figma.ui.onmessage = msg => {
        if (msg.type === 'get') {
            let content = '';

            function traverse(node) {
                if (node.name === BACKGROUND_NAME) {
                    return;
                }

                let tag = '';
                let props = '';

                if (node.type !== NodeType.page && node.type !== NodeType.vector
                    && node.type !== NodeType.rectangle) {
                    if (node.type === NodeType.instance) {
                        if (node.mainComponent.name.includes('Button')) {
                            tag = 'jnt-button';
                        } else if (node.mainComponent.name.includes('Input')) {
                            tag = 'jnt-input';
                        } else {
                            tag = 'div';
                            props = `name="${node.name}"`;
                        }
                    } else {
                        if (node.layoutMode !== 'NONE') {
                            tag = 'jnt-stack';
                        } else {
                            tag = 'div';
                            props = `name="${node.name}"`;
                        }
                    }
                    content += `<${tag}${!!props ? ' ' + props : ''}>`;
                }

                if ('children' in node) {
                    if (node.type !== NodeType.instance) {
                        if (!node.name.includes('image')) {
                            for (const child of node.children) {
                                traverse(child);
                            }
                        }
                    }
                }

                if (!!tag) {
                    content += `</${tag}>`;
                }
            }

            traverse(figma.currentPage);
            figma.ui.resize(SIZE, SIZE);
            let code = html(content, {
                wrap_attributes: 'force-expand-multiline',
                indent_level: 0,
                wrap_attributes_indent_size: 4
            });
            code = code.replace(/\n *\>/g, '>').replace(/\> +\</g, '><');
            figma.ui.postMessage({type: 'show', code});
        }

        if (msg.type === 'cancel') {
            figma.closePlugin();
        }
    };
}
