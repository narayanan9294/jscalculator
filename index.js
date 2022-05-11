function doAdd() {
  var num1 = document.getElementById("ip1").value;
  var num2 = document.getElementById("ip2").value; //Getter
  var result = Number(num1) + Number(num2);

  var span = document.getElementById("res");
  span.innerHTML = result; //Setter
  span.style.color = "green";
}

function doSub() {
  var num1 = document.getElementById("ip1").value;
  var num2 = document.getElementById("ip2").value;
  var result = num1 - num2;
  var span = document.getElementById("res");
  span.innerHTML = result;
  span.style.color = "green";
}

function doMult() {
  var num1 = document.getElementById("ip1").value;
  var num2 = document.getElementById("ip2").value;
  var result = num1 * num2;
  var span = document.getElementById("res");
  span.innerHTML = result;
  span.style.color = "green";
}
function doDiv() {
  var num1 = document.getElementById("ip1").value;
  var num2 = document.getElementById("ip2").value;
  var result = num1 / num2;
  var span = document.getElementById("res");
  span.innerHTML = result;
  span.style.color = "green";
}
