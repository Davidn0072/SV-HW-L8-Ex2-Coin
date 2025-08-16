function CalcClick()
{
  let nisAmount = document.getElementById("NIS").value;
  let coinRate = document.getElementById("CoinSelect").value;
  let rs=nisAmount*coinRate;
  
  if (nisAmount =="")
    alert("No value was entered for New Shekel.")
  else
  if (isNaN(rs))
    alert("The entered value is not a number.")
  else  
    alert(rs);
}