let transactionItems = [];
$("#addBtn").click(function (e) {
  e.preventDefault();

  let transactionText = $("#text").val();
  let transactionAmount = $("#amount").val();

  transactionItems.push({ transactionText, transactionAmount });

 $(".transaction-list").html(transactionItems.map((item) => {
     if(item.transactionAmount > 0){
        $("li").
     }
    return `<li>
        <span>${item.transactionText}</span>
        <span>${item.transactionAmount}</span>
    </li>`;
  }));
});
