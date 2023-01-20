function capitalize(s) {
  let newString = s;
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/i)) {
      newString = s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1);
      break;
    }
  }

  return newString;
}

module.exports = { capitalize };
