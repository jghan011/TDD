var assert = require("assert");
var expect = require("chai").expect;
var CartSummary = require("../cartSum.js");

describe("CartSummary", function () {
  it("getSubtotal() should return 0 if no items are passed in", function () {
    var cartSummary = new CartSummary([]); //this cartSummary will now be equal to var CartSummary prototype
    expect(cartSummary.getSubtotal()).to.equal(0);
  });
  it("getSubtotal() should return the sum of the price * quantity for all items", function () {
    var cartSummary = new CartSummary([
      {
        id: 1,
        quantity: 4,
        price: 50,
      },
      {
        id: 2,
        quantity: 2,
        price: 30,
      },
      {
        id: 3,
        quantity: 1,
        price: 40,
      },
    ]);

    expect(cartSummary.getSubtotal()).to.equal(300);
  });
});

describe("Inventory Allocator", () => {
  class InventoryAllocator {
    allocate = (order, warehouses) => {
      let hasApples = false;
      let warehouseName;

      warehouses.forEach((warehouse) => {
        if (warehouse.inventory.apple >= order.apple) {
          hasApples = true;
          warehouseName = warehouse.name;
        }
      });

      if (hasApples === true) {
        let returnedWarehouse = {
          [warehouseName]: {
            apple: order.apple,
          },
        };
        return [returnedWarehouse];
      } else {
        return [];
      }
    };
  }
  it("Happy Case, exact inventory match! 1 apple, owd warehouse", () => {
    const allocator = new InventoryAllocator();

    const order = { apple: 1 };
    const warehouses = [
      { name: "owd", inventory: { apple: 1, oranges: 2, banana: 3 } },
    ];

    const output = allocator.allocate(order, warehouses);
    const expectedOutput = [{ owd: { apple: 1 } }];

    expect(output).eql(expectedOutput);
  });

  it("Happy Case, exact inventory match! 5 apples, owd warehouse", () => {
    const allocator = new InventoryAllocator();

    const order = { apple: 5 };
    const warehouses = [{ name: "owd", inventory: { apple: 5 } }];

    const output = allocator.allocate(order, warehouses);
    const expectedOutput = [{ owd: { apple: 5 } }];

    expect(output).eql(expectedOutput);
  });

  it("Happy Case, exact inventory match! 5 apples, dm warehouse", () => {
    const allocator = new InventoryAllocator();

    const order = { apple: 5 };
    const warehouses = [{ name: "dm", inventory: { apple: 5 } }];

    const output = allocator.allocate(order, warehouses);
    const expectedOutput = [{ dm: { apple: 5 } }];

    expect(output).eql(expectedOutput);
  });

  it("Not enough inventory -> no allocations!", () => {
    const allocator = new InventoryAllocator();

    const order = { apple: 1 };
    const warehouses = [{ name: "owd", inventory: { apple: 0 } }];

    const output = allocator.allocate(order, warehouses);

    expect(output).to.eql([]);
  });

  // it("Should split an item across warehouses if that is the only way to completely ship an item", () => {
  //   const allocator = new InventoryAllocator();

  //   const order = { apple: 10 };
  //   const warehouses = [
  //     { name: "owd", inventory: { apple: 5 } },
  //     { name: "dm", inventory: { apple: 5 } },
  //   ];

  //   const output = allocator.allocate(order, warehouses);

  //   expect(output).to.eql([{ dm: { apple: 5 } }, { owd: { apple: 5 } }]);
  // });
});

// describe("Greeter", function () {
//   it("should exist", () => {
//     expect(myGreeter).to.exist;
//   });
//   describe("#sayHello", () => {
//     it("should exist", () => {
//       expect(myGreeter.sayHello).to.exist;
//     });
//     it("should be a method", () => {
//       expect(myGreeter.sayHello).to.be.a("function");
//     });
//     it("should return a  string", () => {
//       let returnedVal = myGreeter.sayHello();
//       expect(returnedVal).to.be.a("string");
//     });
//     it("should return a default greeting", () => {
//       let defaultGreeting = myGreeter.sayHello();
//       expect(defaultGreeting).to.equal();
//     });
//     it("should return a personalized greeting", () => {
//       let returnedValOne = myGreeter.sayHello("jason"); // instead it would be the complex array given
//       let returnedValTwo = myGreeter.sayHello("drew");
//       expect(returnedValOne).to.equal("Make Kumerica great again, jason!");
//       expect(returnedValTwo).to.equal("Make Kumerica great again, drew!");
//     });
//   });
//   it("should return an empty order if no warehouse have fruit", () => {
//     const order = myInventoryAlocator.processOrder({ apples: 5 }, [
//       ...warehouses,
//     ]);
//     expect(order).to.equal([{ mdx: [(apples: 5)] }]);
//   });
// });
