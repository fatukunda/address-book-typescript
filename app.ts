import $ = require('jquery');
import { PhoneBook } from './app/phonebook';
//Seeding phonebook with some data
 const myPhoneBook = new PhoneBook()
 myPhoneBook.addContact('Frank', 'Atukunda', 776675635);
 myPhoneBook.addContact('John', 'Bukasa', 675645654);
 myPhoneBook.displayContacts();

 
 const appendTable = () => {
    contacts.append(table);
 }
const removeTable = () => {
    contacts.empty();
}

 //Append a new table row with a contact
 const appendTr = () => {
    myPhoneBook.contacts.map((contact) => {
        const tr = $('<tr></tr>');
        const firstName = $(`<td>${contact.firstName}</td>`);
        const lastName = $(`<td>${contact.lastName}</td>`);
        const phoneNumber = $(`<td>${contact.phoneNumber}</td>`);
        table.append(tr);
        tr.append(firstName);
        tr.append(lastName);
        tr.append(phoneNumber);
    });
 };

 //Create a default table
 const contacts = $('.contacts');
 const table = $('<table></table>');
 table.addClass('table');
 appendTable();
 appendTr();


//Adding a new contact
    $('#save').click((event) => {
        event.preventDefault();
        const firstName = $('#firstName').val()
        const lastName = $('#lastName').val();
        const phoneNumber = $('#mobile').val();
        myPhoneBook.addContact(<string>firstName, <string>lastName, parseInt(phoneNumber));
        removeTable();
        appendTable();
        appendTr();
        myPhoneBook.displayContacts();
        clear();

 });
 //clear data from form fields
 const clear = () =>  {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#mobile').val('');
 }
 


 