const leapYears = function(leapFinder) {

  if (leapFinder % 400 === 0) {
    return true;
  }

  if (leapFinder % 100 === 0) {
    return false;
  }
  
  if (leapFinder % 4 === 0) {
    return true;
  }
  
  return false;

// return (leapFinder % 400 === 0) || (leapFinder % 4 === 0 && leapFinder % 100 !== 0);

};
// Do not edit below this line
module.exports = leapYears;
