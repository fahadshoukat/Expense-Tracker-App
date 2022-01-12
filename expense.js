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

  if (transactionAmount == 0){
   alert("Please Enter Valid Amount");
   return
  }

  if (transactionText == ""){
   alert("Please Enter Valid Transaction Text");
   return
  }

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

  let removeItem = myObj.transactionItems.findIndex((item) => {
    if(item.transactionText === e.target.nextElementSibling.textContent){
      return true;
    }
  })

  myObj.transactionItems.splice(removeItem, 1);
  updateValue = e.target.nextElementSibling.nextElementSibling.textContent.slice(1);
  
  if(updateValue > 0) {
    myObj.totalBalance = myObj.totalBalance - parseInt(updateValue);
    myObj.totalIncome = myObj.totalIncome - parseInt(updateValue);
  }else{
    myObj.totalBalance = myObj.totalBalance - parseInt(updateValue);
    myObj.totalExpense = myObj.totalExpense - parseInt(updateValue);
  }

  displayList();
  
});
