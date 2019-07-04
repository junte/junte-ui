const themes = {"dark":"f16ae63d07","light":"da7a9d0542"};

class Themes {
  constructor() {
    window.addEventListener('message', ({data}) => {
      if (data.type === 'theme') {
        this.refresh(data.theme);
      }
    }, false);

    this.refresh(localStorage.theme);
  }

  clear() {
    const exist = document.head.querySelector('style[theme="true"]');
    if (!!exist) {
      document.head.removeChild(exist);
    }
  };

  refresh(name) {
    const current = name || 'light';
    const self = this;
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        self.clear();
        const style = document.createElement('style');
        style.setAttribute('theme', 'true');
        style.innerHTML = this.responseText;
        document.head.appendChild(style);
        localStorage.setItem('theme', current);
      }
    };
    request.open('GET', `./assets/themes/${current}.${themes[current]}.css`, true);
    request.send();
  };
}

(function () {
  new Themes();
}());
