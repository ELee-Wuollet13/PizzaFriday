//takes use input
function YourOrder() {
  this.order = [],
  this.item = 0
}

$(document).ready(function() {
  $("form#size-form").submit(function(event) {
    event.preventDefault();
    var size = $("select#size-select").val();
    var topping1 = $("select#topping1-select").val();
    var topping2 = $("select#topping2-select").val();
    // var Pizza = new Pizza(size, topping1, topping2);


    console.log(size)
    console.log(topping1)
    console.log(topping2)

  })
  })
//Pizza constructor
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings1 = toppings1;
  this.toppings2 = toppings2
  this.price = price;
};
//Pizza modifiers

//
// Pizza.prototype.price = function () {
//
//   console.log(price)
// };
//return Price
