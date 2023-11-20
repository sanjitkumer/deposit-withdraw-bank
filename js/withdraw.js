document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   console.log("withdraw clicked");

  // get withdraw field
  const withdrawTotalElement = document.getElementById("withdraw-field");
  const newWithdrawTotalString = withdrawTotalElement.value;
  const newWithdrawTotal = parseFloat(newWithdrawTotalString);

  // clear the input line
  withdrawTotalElement.value = "";
  //   console.log(newWithdrawTotal);
  if (isNaN(newWithdrawTotal)) {
    alert("Please provide a valid number");
    return;
  }

  // set withdraw field
  const withdrawFieldTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawFieldTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // get balance field
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawTotal > previousBalanceTotal) {
    alert("Amount is not available");
    return;
  }

  // Calculate total withdraw Total
  const currentWithDrawTotal = previousWithdrawTotal + newWithdrawTotal;

  // set the withdraw total
  withdrawFieldTotalElement.innerText = currentWithDrawTotal;

  // step-6: Calculate current total balance
  const currentBalanceTotal = previousBalanceTotal - newWithdrawTotal;

  balanceTotalElement.innerText = currentBalanceTotal;
});
