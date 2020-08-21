let products = [
  {
    id: "15215",
    name: "25' Garden Hose",
    price: 9.5,
    quantity: 1,
    department: "garden",
  },
  {
    id: "15123",
    name: "Bag of Garden Soil",
    price: 5.0,
    quantity: 1,
    department: "garden",
  },
  {
    id: "15312",
    name: "Shovel",
    price: 12.0,
    quantity: 1,
    department: "garden",
  },
  {
    id: "15215",
    name: "Screwdriver",
    price: 4.5,
    quantity: 0,
    department: "tool",
  },
  {
    id: "15215",
    name: "Corded Drill",
    price: 124.5,
    quantity: 1,
    department: "tool",
  },
  {
    id: "15215",
    name: "Pack of 50 Screws",
    price: 8.5,
    quantity: 2,
    department: "hardware",
  },
  {
    id: "15215",
    name: '1/8" washers',
    price: 4.5,
    quantity: 1,
    department: "hardware",
  },
];

// function showTools() {
//   let x = document.getElementById["showHardwar"];
//   let departmentName = "";
//   let i;
//   for (i = 0; i < x.length; i++) {
//     departmentName += x.elements[i].value + "<br>";
//   }
// }

// let chosenDepartment = "";
// for (i = 0; i < products.length; i++);
// if ((products.department = "hardware")) {
//   department = "showHardware";
// } else if ((products.department = "tool")) {
//   department = "showTools";
// } else if ((products.department = "garden")) {
//   department = "showGarden";
// } else {
//   department = "showAll";
// }

let chosenDepartment = "";

function renderProducts() {
  let html = "";
  html = products
    .filter(function (product) {
      return product.quantity > 0;
    })
    .filter(function (product) {
      if (chosenDepartment === "") {
        return product.quantity > 0;
      } else {
        return product.department === chosenDepartment;
      }
    })
    .map(function (product) {
      return `
      <li>
      <h3>${product.name}</h3><br>
      <p>Price: $ ${product.price}</p>
      </li>`;
    })
    .reduce(function (text, product) {
      return text + product;
    });

  // Your code here!
  /*
    using the product array

    Perform a filter, a map, and a reduce function. (Just like in the reading!)

    The html you create for each item should have:
    an outer <li>
    an <h3> title of the item
    and a price

    There are two filters to be applied!
    First, do not show out of stock items! If the quantity is zero then
    do not display the item.

    Secondly, you have to apply the filter.  
    The Buttons are already wired up, so when you click a button it will 
    set chosenDepartment.  If the item's department matches the 
    chosenDepartment, then display it.

    But watch out for the showAll case! If the chosenDepartment is blank,
    then you should show all items!  (That are in stock, of course)

    Hint: You can do this within one filter function, or you can have 
    multiple filter functions!  This can be very cleanly done with two 
    filter functions, one for checking if it's in stock, the other for checking
    the chosenDepartment.
    */

  let elem = document.getElementById("productList");
  elem.innerHTML = html;
}

window.onload = () => {
  renderProducts(products);
  document.getElementById("showAll").onclick = function () {
    chosenDepartment = "";
    renderProducts();
  };
  document.getElementById("showHardware").onclick = function () {
    chosenDepartment = "hardware";
    renderProducts();
  };
  document.getElementById("showGarden").onclick = function () {
    chosenDepartment = "garden";
    renderProducts();
  };
  document.getElementById("showTools").onclick = function () {
    chosenDepartment = "tool";
    renderProducts();
  };
};
