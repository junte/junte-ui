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
      let json = {children: []};

      function traverse(node, parent) {
        if (node.name === BACKGROUND_NAME) {
          return;
        }

        const current = {};
        parent.children.push(current);

        let tag = '';
        let props = '';

        if (node.type !== NodeType.page && node.type !== NodeType.vector
          && node.type !== NodeType.rectangle) {
          current['name'] = node.name;
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
              current['children'] = [];
              for (const child of node.children) {
                traverse(child, current);
              }
            }
          }
        }

        if (!!tag) {
          content += `</${tag}>`;
        }
      }

      traverse(figma.currentPage, json);
      figma.ui.resize(SIZE, SIZE);
      let htmlCode = html(content, {
        wrap_attributes: 'force-expand-multiline',
        indent_level: 0,
        wrap_attributes_indent_size: 4
      });
      htmlCode = htmlCode.replace(/\n *>/g, '>').replace(/> +</g, '><');
      figma.ui.postMessage({type: 'show', code: {html: htmlCode, json: JSON.stringify(json, null, 2)}});
    }

    if (msg.type === 'cancel') {
      figma.closePlugin();
    }
  };
}
