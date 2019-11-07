function themes(theme, callback) {
  var themes = {"dark":"b1defab265","light":"2939e2c9ec"};

  var clear = function () {
    var exist = document.head.querySelector('style[theme="true"]');
    if (!!exist) {
      document.head.removeChild(exist);
      localStorage.removeItem('theme');
    }
  };

  var set = function (name, callback) {
    var current = name || 'light';
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        clear();
        var style = document.createElement('style');
        style.setAttribute('theme', 'true');
        style.innerHTML = this.responseText;
        document.head.appendChild(style);
        document.body.setAttribute('theme', current);
        localStorage.setItem('theme', current);
        if (!!callback) {
          callback();
        }
      }
    };
    request.open('GET', `./assets/themes/${current}.${themes[current]}.css`, true);
    request.send();
  };

  if (!!theme && theme !== 'light') {
    set(theme, callback);
  } else {
    clear();
  }
}

window['themes'](localStorage.theme);
