/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  let op = "(",
    cp = ")",
    ob = "[",
    cb = "]",
    oc = "{",
    cc = "}";

  for (let i = 0; i < s.length; i++) {
    let x = s[i];
    console.log(x);
    if (x == op || x == ob || x == oc) {
      stack.push(x);
    } else {
      if (x == cp) {
        let popElement = stack.pop();
        if (popElement == op) {
          continue;
        } else {
          return false;
        }
      } else if (x == cb) {
        let popElement = stack.pop();
        if (popElement == ob) {
          continue;
        } else {
          return false;
        }
      } else if (x == cc) {
        let popElement = stack.pop();
        if (popElement == oc) {
          continue;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return stack.length == 0 ? true : false;
};
