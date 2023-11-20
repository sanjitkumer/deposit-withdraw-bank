document.getElementById("btn-deposit").addEventListener("click", function () {
  //   console.log("Deposit money");
  const depositedField = document.getElementById("deposit-field");
  const newDepositAmountString = depositedField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // console.log(depositAmount);
  // for no-input(element other than input, textarea) use innerText to get the next
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step 4: add number to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  // set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  //step 5: get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: Calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  depositedField.value = "";
});
