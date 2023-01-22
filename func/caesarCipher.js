function caesarCipher(s, shift = 0) {
  if (shift == 0) return s;

  let encryptedString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-zA-z]/i)) {
      encryptedString += shiftChar(s[i], shift);
    } else {
      encryptedString += s[i];
    }
  }

  return encryptedString;
}

function shiftChar(c, shift) {
  let temp = String.fromCharCode(c.charCodeAt(0) + shift);

  if (c == c.toUpperCase()) {
    // for uppercase letters
    if (temp.charCodeAt(0) > 90)
      temp = String.fromCharCode(temp.charCodeAt(0) - 26);
  } else {
    // for lowercase letters
    if (temp.charCodeAt(0) > 122)
      temp = String.fromCharCode(temp.charCodeAt(0) - 26);
  }
  return temp;
}

module.exports = { caesarCipher };
