"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var seed_1 = require("./app/seed");
var table = $('<table></table>');
//Initial loads
window.addEventListener('load', function (event) {
    event.preventDefault();
    tabeleDefinition();
    seedTableData();
    removeContact();
});
//Create a table
var tabeleDefinition = function () {
    var contacts = $('.contacts');
    table.addClass('table');
    contacts.append(table);
};
var seedTableData = function () {
    seed_1.myPhoneBook.contacts.map(function (contact) {
        var tr = $('<tr></tr>');
        var fName = $("<td>" + contact.firstName + "</td>");
        var lName = $("<td>" + contact.lastName + "</td>");
        var mobile = $("<td>" + contact.phoneNumber + "</td>");
        var edit = $("<td><button class = 'btn btn-primary btn-sm edit'> Edit </button></td>");
        var remove = $("<td><button class = 'btn btn-danger btn-sm remove'> Remove </button></td>");
        table.append(tr);
        tr.append(fName);
        tr.append(lName);
        tr.append(mobile);
        tr.append(edit);
        tr.append(remove);
    });
};
//Adding a new contact
$('#save').click(function (event) {
    event.preventDefault();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phoneNumber = $('#mobile').val();
    seed_1.myPhoneBook.addContact(firstName, lastName, phoneNumber);
    table.children().remove();
    seedTableData();
    clear();
});
//clear data from form fields
var clear = function () {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#mobile').val('');
};
var removeContact = function () {
    var contactList = $('.remove').toArray();
    console.log(contactList);
    contactList.map(function (contactbtn) {
        contactbtn.addEventListener('click', function (event) {
            event.preventDefault();
            $('this').closest('tr').remove();
        });
    });
};
