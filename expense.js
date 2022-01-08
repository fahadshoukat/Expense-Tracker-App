let myObj = {
  transactionItems: [],
  totalBalance: 0,
  totalIncome: 0,
  totalExpense: 0,
};

$("#addBtn").click(function (e) {
  e.preventDefault();

  let transactionText = $("#text").val();
  let transactionAmount = $("#amount").val();

  myObj.transactionItems.push({ transactionText, transactionAmount });

  if (transactionAmount > 0) {
    myObj.totalIncome += +transactionAmount;
    myObj.totalBalance += +transactionAmount;
  } else {
    myObj.totalExpense += +transactionAmount;
    myObj.totalBalance += +transactionAmount;
  }
  displayList();

  $("#text").val("");
  $("#amount").val(null);
});

function displayList() {
  $(".balance").html("$" + myObj.totalBalance + ".00");
  $(".green").html("$" + myObj.totalIncome + ".00");
  $(".red").html("$" + myObj.totalExpense + ".00");

  $(".transaction-list").html(() => {
    let myHtml = "";
    myObj.transactionItems.forEach((item) => {
      if (item.transactionAmount > 0) {
        myHtml += `<li class='green-border'>
        <div class="deleteBtn">X</div>
      <span>${item.transactionText}</span>
      <span>$${item.transactionAmount}</span>
  </li>`;
      } else {
        myHtml += `<li class='red-border'>
        <div class="deleteBtn">X</div>
        <span>${item.transactionText}</span>
        <span>$${item.transactionAmount}</span>
    </li>`;
      }
    });

    return myHtml;
  });
}

$(".transaction-list").click((e) => {
  let removeItem = e.target.parentNode;
  
  myObj.transactionItems.splice(removeItem, 1);
});
