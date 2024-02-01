const Utils = {
  calculateNumber: function(type, a, b){
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      const _a = Math.round(a);
      const _b = Math.round(b);
      if (_b === 0) {
        return 'Error';
      }
      return _a / _b;
    }
  }
};

module.exports = Utils;
