function capitalize(maj) {
    return maj.map(maj => maj.toUpperCase())
  }
  
  console.log(capitalize(['CapITAlize', 'tHis', 'text']))
  
  const result = ["CHANGE", "this", "array", "BY", "ThE", "RESULT", "oF", "youR", "FUNCTION", "TO", "test", "IT", "OUT"]
  displayResult(capitalize(result))
  