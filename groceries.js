var total = 0;

var groceryList = [
    { name: "Bunch of carrots",
      price: 1.65
    },
    { name: "Pumpkin",
      price: 3.15
    },
    { name: "Milk",
      price: 2.25
    }
];


groceryList.forEach(function(obj){
    console.log(obj.name +": $"+ obj.price);
});


groceryList.forEach(function(obj){
     total = obj.price += total;
});

console.log("Total= $" + total);