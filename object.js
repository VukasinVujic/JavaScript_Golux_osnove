/*
let myBook = {
    title: 'Na drini cuprija',
    author: 'PEro',
    pageCount: 254
}

let drugaknjiga = {
    title: 'Paklena avlija',
    author: 'Milos obrenovic',
    pageCount: 5500
}

let jaja = function(book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCount: `${book.title} by  ${book.pageCount}`
    }

}

let bookSummary = jaja(myBook);
let otherSummary =jaja(drugaknjiga);

// console.log(bookSummary.pageCount);
// console.log(otherSummary.summary);

// console.log(`My book by title ${myBook.title} ,with autho ${myBook.author} with pages: ${myBook.pageCount}`)
*/
//********************************** */
let myAccount = {
    name: 'Vukasin',
    expenses: 0,
    income:0
}

// let otherAccount = myAccount;
// otherAccount.income = 1000;

let addExpense = function (account, amount)
{
    account.expenses = account.expenses+ amount;
}
// addExpense(myAccount, 5);
// console.log(myAccount);

let addIncome = function (account, amount)
{
     account.income += amount; 
     return account;
}

let resetAccount = function(account)
{
    account.income = 0;
    account.expenses = 0;
    return account;
}

let getAccountSummary = function(account)
{
    return (`Account of ${account.name} has income: 
    ${account.income} and exepenses of: ${account.expenses}`);
}

// let provera = addIncome(myAccount, 100 );

// console.log(provera);
//********************************** */


let restaurant = {
    name: "Kuca",
    guestCapacity: 74,
    guestCount: 0,
    checkHowMuchFreePlaces: function (partySize)
    {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    setParty: function(partySize)
    {
         return this.guestCapacity -= partySize
    },
    removeParty: function(partySize)
    {
        this.guestCapacity += partySize
    }
}

let status = restaurant.checkHowMuchFreePlaces(4);
// console.log(status);
restaurant.setParty(50);
console.log(restaurant);
restaurant.removeParty(20);
console.log(restaurant);

