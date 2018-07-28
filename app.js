"use strict";
var Contact = /** @class */ (function () {
    function Contact(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    return Contact;
}());
var PhoneBook = /** @class */ (function () {
    function PhoneBook(contacts) {
        if (contacts === void 0) { contacts = []; }
        this.contacts = contacts;
    }
    PhoneBook.prototype.addContact = function (firstName, phoneNumber) {
        var contact = new Contact(firstName, phoneNumber);
        this.contacts.push(contact);
    };
    PhoneBook.prototype.displayContacts = function () {
        console.log(this.contacts);
    };
    return PhoneBook;
}());
var myPhoneBook = new PhoneBook();
myPhoneBook.addContact('Frank', 776675635);
myPhoneBook.addContact('John', 675645654);
myPhoneBook.displayContacts();
