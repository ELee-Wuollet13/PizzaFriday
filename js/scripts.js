function pizza(size, firstTopping, secondTopping) {
  this.size = size;
  this.firstTopping = firstTopping;
  this.secondTopping = secondTopping;
  console.log(size);
  console.log(firstTopping);
  console.log(secondTopping);
}

$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    var size = $("select#size-select").val();
    var firstTopping = $("select#topping1-select").val();
    var secondTopping = $("select#topping2-select").val();
    var thisPizza = new pizza(size, firstTopping, secondTopping);
    var result = [size, + "_" + firstTopping, + "_" + secondTopping];
    var joined = result.join("");
    $(".output").text(joined);
    $(".thisPizza").text(size);
    $(".thisPizza").text(firstTopping);
    $(".thisPizza").text(secondTopping);

    console.log(size);
    console.log(thisPizza);
  });
  });
