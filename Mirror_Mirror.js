function mirrorstring(str) {
    const reversedStr = str.split('').reverse().join('');
    const mirrorString = str + reversedStr; 
    return mirrorString;
  }
  