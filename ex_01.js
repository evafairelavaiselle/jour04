var result = ("")
function getAngryDog(numberOfWoofs)
{
for (var i = 0; i < numberOfWoofs; i++) {
result += "woof"
}
return result
}


//Some code to test your function output : (you can modify it but /!\ do not deliver it /!\ ). Only deliver your function
var result = getAngryDog(5);
displayResult(result);