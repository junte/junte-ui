import * as hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/darcula.css';
import './ui.css';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('json', json);
const collapsibles = document.getElementsByClassName('collapsible');

document.getElementById('get').onclick = () => {
  parent.postMessage({pluginMessage: {type: 'get'}}, '*');
};

document.getElementById('cancel').onclick = () => {
  parent.postMessage({pluginMessage: {type: 'cancel'}}, '*');
};

onmessage = event => {
  const msg = event.data.pluginMessage;
  if (msg.type === 'show') {
    let html = document.getElementById('html');
    html.innerText = msg.code.html;
    hljs.highlightBlock(html);
    let json = document.getElementById('json');
    json.innerText = msg.code.json;
    hljs.highlightBlock(json);

    for (const collapsible of collapsibles) {
      collapsible['style'].display = 'block';
    }
  }
};

for (const collapsible of collapsibles) {
  collapsible.addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}
