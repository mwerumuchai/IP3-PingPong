function showAndClearField(frm){
  if (frm.num.value == "")
    alert("Hey! You didn't enter anything!")
else{
  var val = document.getElementById("value").value;
// List of outputs
  var outputs = [{
  divi: 3,
    str: 'ping'
},

{
  divi: 5,
  str: 'pong'
}];
// Loop through till the number entered
  for (var i = 1; i <= val; i += 1) {
// Set empty vars
    var result, string = '';
// Loop through the listed output objects
    outputs.forEach(function(output) {
// If listed divisible, concat string
    if (i % output.divi === 0) {
      string += output.str;
    }
    });
// Set result
    if (string.length) {
    result = string;
    } else {
    result = i;
    }
// print result
    document.getElementById("dis1").innerHTML += result +'<br>';
    }
//  alert("Result: " + result)
  }
  frm.firstName.value = ""
  }
