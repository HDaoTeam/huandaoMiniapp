var _handle = new Object();

function $on(type, callback, target) {
  _handle[type] = _handle[type] || [];
  _handle[type].push({ callback: callback, target: target, once: false });
}

function $off(type, callback, target) {
  if (_handle[type] && _handle[type].length !== 0) {
    for (var i = _handle[type].length -1 ; i>=0; i--) {
      if (callback === _handle[type][i].callback
      && target === _handle[type][i].target) {
        _handle[type].splice(i, 1);
      }
    }
  }
}


function $fire(type, params) {
  if (_handle[type] && _handle[type].length !== 0) {
    for (var i = _handle[type].length - 1; i >= 0; i--) {
      _handle[type][i].callback.call(_handle[type][i].target, params);
      if (_handle[type][i].once) {
        _handle[type].splice(i, 1);
      }
    }
  }
}

module.exports = {
  $on: $on,
  $off: $off,
  $fire: $fire
}
