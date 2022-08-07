function compareArrays(arr1, arr2) {
  let result;
  if(arr1.length !== arr2.length) {
    result = false; 
  } else {
      //for (let i=0; i < arr1.length; i++) {
        //if (arr1[i] === arr2[i]) {
          if (arr1.every((item, i) => item === arr2[i])) {
            result = true;  
        } else result = false;
      //}
    }
  return result; // boolean
}


function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item*10);
  
  return resultArr; // array
}
