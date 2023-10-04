function capitalize(words) {
    return words.map(words => words.toUpperCase())
  }
  
  console.log(capitalize(['CapITAlize', 'tHis', 'text']))
  
  const result = ["CHANGE", "this", "array", "BY", "ThE", "RESULT", "oF", "youR", "FUNCTION", "TO", "test", "IT", "OUT"]
  displayResult(capitalize(result))
  