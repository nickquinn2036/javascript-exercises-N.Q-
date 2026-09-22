const removeFromArray = function(mainArray, ...itemsToRemove) {
  let cleanArray = [];

  for (const item of mainArray) {
    
    if (itemsToRemove.includes(item)) {

    } else {

      cleanArray.push(item);
    }
  }


  return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
