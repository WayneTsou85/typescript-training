class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// let myCustomer = new Customer();
let myCustomer = new Customer("Marthin", "Dixon");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);