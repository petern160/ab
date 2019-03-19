var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var repeat = 0;
while (repeat < 1) {
  console.log(ingredients);
  repeat++;
}
// Write a for loop that prints out the contents of ingredients:
for (var repeat = 0; repeat < 1; repeat++) {
  console.log(ingredients);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
// starts at banana decrements by 1
for(var i = ingredients.length - 1; i >= 0; i--){
  var ingredient = ingredients[i];
  console.log(ingredient);
}
