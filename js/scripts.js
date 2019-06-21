// ---------Backend kitchen logic----------//
function Kitchen() {
    this.order = []
    // this.item = 0
    // console.log(order)
}
Kitchen.prototype.addPizza = function(Pizza) {
  // thisPizza.id = this.assignId();
  this.order.push(Pizza);
}

// ----------Backend Pizza logic---------
function Pizza(size, topping1, topping2) {
  this.size = size;
  this.firstTopping = topping1;
  this.secondTopping = topping2;
  // this.cost = price;
  console.log(topping1)
}

// Kitchen.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }
      // var Pizza = new Pizza(size, topping1, topping2);
//Pizza constructor
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("select#size-select").val();
    var inputtedTopping1 = $("select#topping1-select").val();
    var inputtedTopping2 = $("select#topping2-select").val();
    var thisPizza = new Pizza("inputtedSize", "inputtedTopping1", "inputtedTopping2");
    Kitchen.addPizza(thisPizza);
    console.log(inputtedSize);
    console.log(inputtedTopping1);
    console.log(inputtedTopping2);
    // .push(YourOrder)
    console.log(Pizza)
  });
});
