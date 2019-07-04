const themes = {"dark":"f16ae63d07","light":"da7a9d0542"};

clearThemes = function () {
  const exist = document.head.querySelector(`style[theme="true"]`);
  if (exist) {
    document.head.removeChild(exist);
  }
};

setTheme = function (name) {
  const current = name || 'light';

  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      clearThemes();
      const style = document.createElement('style');
      style.setAttribute('theme', 'true');
      style.innerHTML = this.responseText;
      document.head.appendChild(style);
      localStorage.setItem('theme', current);
    }
  };
  request.open("GET", `./assets/themes/${current}.${themes[current]}.css`, true);
  request.send();
};

setTheme(localStorage.theme);

window.addEventListener('message', function (event) {
  if (event.data['type'] === 'theme') {
    setTheme(event.data['theme']);
  }
}, false);
