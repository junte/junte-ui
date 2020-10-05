if (!('path' in Event.prototype)) {
  Object.defineProperty(Event.prototype, 'path', {
    get: function () {
      var path = [];
      var current = this.target;
      while (current) {
        path.push(current);
        current = current.parentElement;
      }
      if (path.indexOf(window) === -1 && path.indexOf(document) === -1) {
        path.push(document);
      }
      if (path.indexOf(window) === -1) {
        path.push(window);
      }
      return path;
    }
  });
}
