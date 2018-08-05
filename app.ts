import { PhoneBook } from './app/phonebook';
import $ = require('jquery');
import { myPhoneBook}  from './app/seed';

const table = $('<table></table>');
//Initial page load
window.addEventListener('load', (event) => {
    event.preventDefault();
    tabeleDefinition();
    seedTableData();
})

//Create a table
const tabeleDefinition = () => {
    const contacts = $('.contacts');
    table.addClass('table');
    contacts.append(table);
}
 
const seedTableData = () => { 
    myPhoneBook.contacts.map((contact) => {
       const tr = $('<tr></tr>');
       const fName = $(`<td>${contact.firstName}</td>`);
       const lName = $(`<td>${contact.lastName}</td>`);
       const mobile = $(`<td class = 'tel'>${contact.phoneNumber}</td>`);
       const edit = $("<td><button class = 'btn btn-primary btn-sm edit'> Edit </button></td>");
       const remove = $("<td><button class = 'btn btn-danger btn-sm remove'> Remove </button></td>");
       table.append(tr);
       tr.append(fName);
       tr.append(lName);
       tr.append(mobile);
       tr.append(edit);
       tr.append(remove);
       remove.click((event) => {
           $(remove).closest('tr').remove();
           myPhoneBook.removeContact(contact.phoneNumber);
           myPhoneBook.displayContacts();
       })
    });
}
//Adding a new contact
    $('#save').click((event) => {
        event.preventDefault();
        const firstName = $('#firstName').val()
        const lastName = $('#lastName').val();
        const phoneNumber = <number>($('#mobile').val());
        myPhoneBook.addContact(<string>firstName, <string>lastName, phoneNumber);
        table.children().remove();
        seedTableData();
        clear();

 });
 //clear data from form fields
 const clear = () =>  {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#mobile').val('');
 };