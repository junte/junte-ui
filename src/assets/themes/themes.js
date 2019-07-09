function themes(theme, callback) {
  var themes = {"dark":"885be1f115","light":"087f588d70"};

  var clear = function () {
    var exist = document.head.querySelector('style[theme="true"]');
    if (!!exist) {
      document.head.removeChild(exist);
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
  }

  set(theme, callback);
}

window['themes'](localStorage.theme);
