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
    myPhoneBook.contacts.map((contact, index) => {
       const tr = $('<tr></tr>');
       const fName =  $(`<td>
       <input type = 'text' value = ${contact.firstName} class='form-control editable' readonly>
      </td>
      `);
       const lName = $(`<td>
       <input type = 'text' value = ${contact.lastName} class='form-control editable' readonly>
      </td>
      `);
       const mobile = $(`<td>
       <input type = 'number' value = ${contact.phoneNumber} class='form-control editable' readonly>
      </td>
      `);
       let edit = $("<td><button class = 'btn btn-primary btn-sm edit'> Edit </button></td>");
       const remove = $("<td><button class = 'btn btn-danger btn-sm remove'> Remove </button></td>");
       table.append(tr);
       tr.append(fName);
       tr.append(lName);
       tr.append(mobile);
       tr.append(edit);
       tr.append(remove);
       const editableFields = $('.editable');
       remove.click(() => {
           $(remove).closest('tr').remove();
           myPhoneBook.removeContact(contact.phoneNumber);
           myPhoneBook.displayContacts();
       });
       edit.click((event) => {
           event.preventDefault();
          const attr =  $(fName).children().attr('readonly');
          if(attr){
            $(fName).children().removeAttr(<string>attr);
            $(edit).children().html('Save');
            $(edit).children().removeClass('btn-primary');
            $(edit).children().addClass('btn-success');
            //myPhoneBook.editContact(index);
          } else {
            $(fName).children().attr('readonly', '');
            $(edit).children().html('Edit');
            $(edit).children().removeClass('btn-success');
            $(edit).children().addClass('btn-primary');
          }
         
          
          
          attr ? $(lName).children().removeAttr(<string>attr): $(lName).children().attr('readonly', '');
          attr ? $(mobile).children().removeAttr(<string>attr): $(mobile).children().attr('readonly', '');
       })
    });
}
//Adding a new contact
    $('#save').click((event) => {
        event.preventDefault();
        const firstName = $('#firstName').val()
        const lastName = $('#lastName').val();
        const phoneNumber = <number>($('#mobile').val());
        if (firstName !== '' && lastName !== '' && phoneNumber!=0) {
            myPhoneBook.addContact(<string>firstName, <string>lastName, phoneNumber);
            table.children().remove();
            seedTableData();
            clear();
        }
 });
 //clear data from form fields
 const clear = () =>  {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#mobile').val('');
 };