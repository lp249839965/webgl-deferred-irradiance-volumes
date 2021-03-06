// Generated by CoffeeScript 1.3.3
(function() {
  var log_count, now, start;

  if (window.performance) {
    if (window.performance.now) {
      now = function() {
        return window.performance.now();
      };
    } else if (window.performance.webkitNow) {
      now = function() {
        return window.performance.webkitNow();
      };
    } else if (window.performance.mozNow) {
      now = function() {
        return window.performance.mozNow();
      };
    } else if (window.performance.oNow) {
      now = function() {
        return window.performance.oNow();
      };
    } else {
      now = function() {
        return Date.now();
      };
    }
  } else {
    now = function() {
      return Date.now();
    };
  }

  start = now();

  window.gettime = function() {
    return (now() - start) / 1000;
  };

  if (!window.requestAnimationFrame) {
    if (window.webkitRequestAnimationFrame) {
      window.requestAnimationFrame = window.webkitRequestAnimationFrame;
    } else if (window.mozRequestAnimationFrame) {
      window.requestAnimationFrame = window.mozRequestAnimationFrame;
    } else if (window.oRequestAnimationFrame) {
      window.requestAnimationFrame = window.oRequestAnimationFrame;
    } else {
      window.requestAnimationFrame = function(fun) {
        return setTimeout(fun, 1000 / 30);
      };
    }
  }

  window.URL = window.URL || window.mozURL || window.webkitURL || window.oURL;

  window.BlobBuilder = window.BlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder || window.OBlobBuilder;

  log_count = 0;

  window.console.logN = function(n) {
    var args;
    if (log_count < n) {
      log_count += 1;
      args = [].slice.call(arguments, 1);
      return console.log.apply(console, args);
    }
  };

}).call(this);
