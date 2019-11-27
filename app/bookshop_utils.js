function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstname, surname) {
    return firstname + ' ' + surname;
}

function makeHalfPrice(price) {
    return (price/2);
}

function countBooks(array) {
    return (array.length);
}

function isInStock(book) {
    return (book.quantity > 0);
}

/* Put in all parameters being counted (a, b, c),
as input into test (quantity, price, VAT)*/
function getTotalOrderPrice(quantity, price, VAT) {
    let exVAT = quantity*price;
// ? How do we know what 'VAT' is?  
    return exVAT + (VAT*exVAT);
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};