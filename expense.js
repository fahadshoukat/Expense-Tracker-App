let transactionItems = [];
let totalBalance = 0;
let totalIncome = 0;
let totalExpense = 0;
$("#addBtn").click(function (e) {
  e.preventDefault();

  let transactionText = $("#text").val();
  let transactionAmount = $("#amount").val();

  transactionItems.push({ transactionText, transactionAmount });

  if (transactionAmount > 0) {

    totalIncome += +transactionAmount;
    totalBalance += +transactionAmount;

} 
  else {
  
    totalExpense += +transactionAmount;
    totalBalance += +transactionAmount;
  
}

  $(".balance").html("$" + totalBalance + ".00");
  $(".green").html("$" + totalIncome + ".00");
  $(".red").html("$" + totalExpense + ".00");

  $(".transaction-list").html(
    transactionItems.map((item) => {
      if (item.transactionAmount > 0) {
        $("li").addClass("green-border");
      } else {
        $("li").addClass("red-border");
      }
      return `<li>
        <span>${item.transactionText}</span>
        <span>$${item.transactionAmount}</span>
    </li>`;
    })
  );
});
