//takes use input
function YourOrder() {
  this.order = [],
  this.item = 0
  console.log()
}

$(document).ready(function() {
  $("form#size-form").submit(function(event) {
    event.preventDefault();
    // var size = $("select#size-select").val();
    // var topping1 = $("select#topping1-select").val();
    // var topping2 = $("select#topping2-select").val();
    // var Pizza = new Pizza(size, topping1, topping2);

    // console.log(size)
    // console.log(topping1)
    // console.log(topping2)


  function Pizza(pizzaSize, firstTopping, secondTopping, cost) {
    this.pizzaSize = $("select#size-select").val();
    this.firstTopping = $("select#topping1-select").val();
    this.secondTopping = $("select#topping2-select").val();
    this.cost = price;

var thisPizza = new Pizza("size", "topping1", "topping2") {
  .push(YourOrder)
};

console.log(Pizza)

//Pizza constructor
};
});
});
