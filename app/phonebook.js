"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_1 = require("./contact");
//Phone book class
var PhoneBook = /** @class */ (function () {
    function PhoneBook(contacts) {
        if (contacts === void 0) { contacts = []; }
        this.contacts = contacts;
    }
    PhoneBook.prototype.addContact = function (firstName, lastName, phoneNumber) {
        var contact = new contact_1.Contact(firstName, lastName, phoneNumber);
        this.contacts.push(contact);
    };
    PhoneBook.prototype.displayContacts = function () {
        console.log(this.contacts);
    };
    return PhoneBook;
}());
exports.PhoneBook = PhoneBook;
