import { Invoice } from "./classes/Invoice.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Ken", "repair work", 250);
// docTwo = new Payment("Mario", "plumbing work", 350);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
const invOne = new Invoice("Mario", "plumbing", 200);
const invTwo = new Invoice("Luigi", "pipe replacement", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
