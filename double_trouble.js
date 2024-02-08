function doubleElementsWithCatch(arr) {
    let result = [];
    let prevElement = null;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === prevElement) {
        result.push(arr[i]);
      } else {
        result.push(arr[i] * 2);
      }
      prevElement = arr[i];
    }
  
    return result;
  }
  
