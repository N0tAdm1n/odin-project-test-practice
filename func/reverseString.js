function reverseString(s) {
  let revStr = "";

  for (let i = s.length - 1; i >= 0; i--) {
    revStr = revStr + s[i];
  }

  return revStr;
}

module.exports = { reverseString };
