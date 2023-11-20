document.getElementById("btn-withdraw").addEventListener("click", function () {
  //   console.log("withdraw button click");
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  //   console.log(newWithdrawAmount);
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const previousWithdrawBalanceTotal = getTextElementValueById("balance-total");
  const newWithdrawBalanceTotal =
    previousWithdrawBalanceTotal - newWithdrawAmount;

  setTextElementValueById("balance-total", newWithdrawBalanceTotal);
});
