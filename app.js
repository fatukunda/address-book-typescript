"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var seed_1 = require("./app/seed");
//Append a new table row with a contact
var appendTr = function () {
    seed_1.myPhoneBook.contacts.map(function (contact, index, contacts) {
        if (contacts.slice(-1)[0]) {
            var tr = $('<tr></tr>');
            var firstName = $("<td>" + contact.firstName + "</td>");
            var lastName = $("<td>" + contact.lastName + "</td>");
            var phoneNumber = $("<td>" + contact.phoneNumber + "</td>");
            table.append(tr);
            tr.append(firstName);
            tr.append(lastName);
            tr.append(phoneNumber);
        }
    });
};
var seedTableData = function () {
    seed_1.myPhoneBook.contacts.map(function (contact) {
        var tr = $('<tr></tr>');
        var fName = $("<td>" + contact.firstName + "</td>");
        var lName = $("<td>" + contact.lastName + "</td>");
        var mobile = $("<td>" + contact.phoneNumber + "</td>");
        table.append(tr);
        tr.append(fName);
        tr.append(lName);
        tr.append(mobile);
    });
};
//Create a default table
var contacts = $('.contacts');
var table = $('<table></table>');
table.addClass('table');
contacts.append(table);
seedTableData();
//appendTr();
var appendTable = function () {
    contacts.append(table);
};
var removeTable = function () {
    table.remove();
};
//Adding a new contact
$('#save').click(function (event) {
    event.preventDefault();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phoneNumber = $('#mobile').val();
    seed_1.myPhoneBook.addContact(firstName, lastName, parseInt(phoneNumber));
    appendTr();
    seed_1.myPhoneBook.displayContacts();
    clear();
});
//clear data from form fields
var clear = function () {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#mobile').val('');
};
