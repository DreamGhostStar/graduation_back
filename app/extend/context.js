'use strict';

module.exports = {
  returnInfo(code, data, message) {
    return {
      code,
      data,
      message
    };
  },
  isNull() { // 判断是否为空
    let res = false;
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] === null || arguments[i] === undefined  || arguments[i] === '') {
        res = true;
        return res;
      }
    }

    return res;
  }
};
