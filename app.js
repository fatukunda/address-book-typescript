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
    PhoneBook.prototype.addContact = function (firstName, lastName, phoneNumber) {
        var contact = new Contact(firstName, phoneNumber);
        this.contacts.push(contact);
    };
    PhoneBook.prototype.displayContacts = function () {
        console.log(this.contacts);
    };
    return PhoneBook;
}());
var myPhoneBook = new PhoneBook();
myPhoneBook.addContact('Frank', 'Atukunda', 776675635);
myPhoneBook.addContact('John', 'Bukasa', 675645654);
myPhoneBook.displayContacts();
var saveContact = function () {
    //  const firstName = $('#firstName').val.toString();
    //  const lastName = $('#lastName').val.toString();
    //  const phoneNumber = $('#mobile').val.toString();
    var firstName = 'Sam';
    var lastName = 'White';
    var phoneNumber = '45673827';
    myPhoneBook.addContact(firstName, lastName, parseInt(phoneNumber));
    myPhoneBook.displayContacts();
};
