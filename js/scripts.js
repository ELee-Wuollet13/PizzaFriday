//---------Front end customer logic--------------
var kitchen = new Kitchen();

function serveDatVirtualPizza(pizzaWorthShowing) {
  var thePizzas = $("ul#order");
  var htmlforPizzaInfo = "";
  pizzaWorthShowing.order.forEach(function(Pizza) {
    htmlForPizzaInfo `<li>"inputtedSize" "inputtedTopping1" "inputtedTopping2"</li>`;
  });
  thePizzas.html(htmlForPizzaInfo);
};


$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("select#size-select").val();
    var inputtedTopping1 = $("select#topping1-select").val();
    var inputtedTopping2 = $("select#topping2-select").val();
    var thisPizza = new Pizza("inputtedSize", "inputtedTopping1", "inputtedTopping2");
    kitchen.addPizza(Pizza);
    serveDatVirtualPizza(Pizza);
    console.log(inputtedSize);
    console.log(inputtedTopping1);
    console.log(inputtedTopping2);
    // .push(YourOrder)
    console.log(Pizza)
  });
});
// ---------Backend kitchen logic----------//
function Kitchen() {
    this.order = [],
    this.item = 0
}
Kitchen.prototype.addPizza = function(Pizza) {
  thisPizza.id = this.assignId();
  this.order.push(Pizza);
}

// ----------Backend Pizza logic---------
function Pizza(size, topping1, topping2) {
  this.size = size;
  this.firstTopping = topping1;
  this.secondTopping = topping2;
}
