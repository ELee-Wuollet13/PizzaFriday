pizza.prototype.cost = function(size, topping1, topping2) {

  // if (this.cost == "$18 A few friends") {
  //   var price = ("$18")
  // }else if (this.cost === "$24 Extended family who are cool enough for pizza") {
  //   console.log("$22");
  // }else if (this.cost === "$30 Pack of rabid children/the band and all their roadies/Literal Monsters") {
  //   price = "$28"
  // }else {
  //   price +=30
  //   console.log(price);
  // };
};
function pizza(size, firstTopping, secondTopping) {
  this.size = size;
  this.firstTopping = firstTopping;
  this.secondTopping = secondTopping;
  // this.price = price;
  // console.log(price);
  // console.log(price);
  console.log(size);
  console.log(secondTopping);
  }

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    var size = $("select#size-select").val();
    var firstTopping = $("select#topping1-select").val();
    var secondTopping = $("select#topping2-select").val();
    // var price = parseInt(sizeSelect("select#size-select").value);   //trying tp parse the number attatched to 'value'
    console.log(price);
    // var cost = $("select#size-select").val();
    var thisPizza = new pizza(size, firstTopping, secondTopping);
    var result = [size, firstTopping, secondTopping];
    var joined = result.join(" ");
    $(".output").text(joined);
    $(".thisPizza").text(size);
    $(".thisPizza").text(firstTopping);
    $(".thisPizza").text(secondTopping);
    // $(".thisPizza").text(price);
    debugger
    console.log(thisPizza);
  });
  });
