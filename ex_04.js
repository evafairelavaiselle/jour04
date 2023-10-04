function capitalize(arr) {
    return arr.map(word => word.toUpperCase());
  }
  
  const inputArray = ['CapITAlize', 'tHis', 'text'];
  const resultArray = capitalize(inputArray);
  console.log(resultArray);
  
  
  
  // Here is some code to test and display your function output:
  // (you must modify it to test out your code but /!\ do not deliver it /!\ ). Only deliver your function
  const result = ["CHANGE", "this", "array", "BY", "ThE", "RESULT", "oF", "youR", "FUNCTION", "TO", "test", "IT", "OUT"]
  displayResult(capitalize(result))