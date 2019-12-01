const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 48 when passed 40", () => {
    expect(utils.addVAT(40)).toBe(48);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });

describe("utils.getFullName", () => {
  test("returns Simone Klein when passed Simone and Klein", () => {
      expect(utils.getFullName("Simone", "Klein")).toBe("Simone Klein");
  });

describe("utils.makeHalfPrice", () => {
  test("returns 50 when passed 100", () => {
      expect(utils.makeHalfPrice(100)).toBe(50);
  }); 

describe("utils.countBooks", () => {
  test("returns number of books when passed an array", () => {
      expect(utils.countBooks(["book1","book2","book3"])).toBe(3);
  });
});

describe("utils.isInStock", () => {
  test("returns true if the title is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Shields",
      yearOfPublication: 1993,
      quantity: 9
  };
      expect(utils.isInStock(book)).toBe(true);
  });

  test("returns false if the title is not in stock", () => {
    const book = {
      title: "Boy",
      author: "Roald Dahl",
      yearOfPublication: 1984,
      quantity: 0
  };
      expect(utils.isInStock(book)).toBe(false);
});    
});

describe("utils.getTotalOrderPrice", () => {
  test("returns total price of order plus VAT", () => {
      expect(utils.getTotalOrderPrice(9, 10, 0.2)).toBe(108);
  });
});


});
});
});