"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var phonebook_1 = require("./app/phonebook");
//Seeding phonebook with some data
var myPhoneBook = new phonebook_1.PhoneBook();
myPhoneBook.addContact('Frank', 'Atukunda', 776675635);
myPhoneBook.addContact('John', 'Bukasa', 675645654);
myPhoneBook.displayContacts();
var appendTable = function () {
    contacts.append(table);
};
var removeTable = function () {
    contacts.empty();
};
//Append a new table row with a contact
var appendTr = function () {
    myPhoneBook.contacts.map(function (contact) {
        var tr = $('<tr></tr>');
        var firstName = $("<td>" + contact.firstName + "</td>");
        var lastName = $("<td>" + contact.lastName + "</td>");
        var phoneNumber = $("<td>" + contact.phoneNumber + "</td>");
        table.append(tr);
        tr.append(firstName);
        tr.append(lastName);
        tr.append(phoneNumber);
    });
};
//Create a default table
var contacts = $('.contacts');
var table = $('<table></table>');
table.addClass('table');
appendTable();
appendTr();
//Adding a new contact
$('#save').click(function (event) {
    event.preventDefault();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phoneNumber = $('#mobile').val();
    myPhoneBook.addContact(firstName, lastName, parseInt(phoneNumber));
    removeTable();
    appendTable();
    appendTr();
    myPhoneBook.displayContacts();
    clear();
});
//clear data from form fields
var clear = function () {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#mobile').val('');
};
