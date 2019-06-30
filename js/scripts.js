function pizza(size, firstTopping, secondTopping, price) {
  this.size = size;
  this.firstTopping = firstTopping;
  this.secondTopping = secondTopping;
  this.price = price;
  }
  function price (size) {
  if(size === "A few friends") {
    var price = "$18"
  }
  else if (size === "$22Extended family who are cool enough for pizza") {
    var price = "$22"
  }
  else if (size === "Pack of rabid children/the band and all their roadies/Literal Monsters") {
    var price = "$28"
    console.log(price)
  };
};

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    var size = $("select#size-select").val();
    var firstTopping = $("select#topping1-select").val();
    var secondTopping = $("select#topping2-select").val();
    var cost = new price(size);
    var thisPizza = new pizza(size, firstTopping, secondTopping);
    var result = [size, + " " + firstTopping, + " " + secondTopping];
    var joined = result.join("");
    $(".output").text(joined);
    $(".thisPizza").text(size);
    $(".thisPizza").text(firstTopping);
    $(".thisPizza").text(secondTopping);
    console.log(cost);
    console.log(size);
    console.log(thisPizza);
  });
  });
