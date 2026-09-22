const sumAll = function(startNum, endNum) {
    
    let finalSum = 0;
    let realStart = Math.min(startNum, endNum);
    let realEnd = Math.max(startNum, endNum);
    
    
    if (startNum < 0 || endNum < 0 || !Number.isInteger(startNum) || !Number.isInteger(endNum)) {
  return "ERROR";
}


 for (let i = realStart; i <= realEnd; i++) {
    finalSum += i;

  }

  return finalSum;
};
// Do not edit below this line
module.exports = sumAll;
