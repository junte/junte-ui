import './ui.css'
import * as hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/darcula.css';

hljs.registerLanguage('xml', xml);

document.getElementById('get').onclick = () => {
    parent.postMessage({pluginMessage: {type: 'get'}}, '*');
};

document.getElementById('clean').onclick = () => {
    document.getElementById('code').style.display = 'none';
};

document.getElementById('cancel').onclick = () => {
    parent.postMessage({pluginMessage: {type: 'cancel'}}, '*');
};

onmessage = event => {
    if (event.data.pluginMessage.type === 'show') {
        let code = document.getElementById('code');
        code.innerText = event.data.pluginMessage.code;
        hljs.highlightBlock(code);
        code.style.display = 'block';
    }
};
