import { Contact } from './app/contact';
import $ = require('jquery');
import { myPhoneBook}  from './app/seed';
const table = $(`<table>
<thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
</table>`);
//Initial page load
window.addEventListener('load', (event) => {
    event.preventDefault();
    tableDefinition();
    seedTableData();
})

//Create a dynamic table
const tableDefinition = () => {
    const contactsDiv = $('.contacts');
    table.addClass('table table-striped table-hover');
    contactsDiv.append(table);
}
const seedTableData = () => { 
    myPhoneBook.contacts.map((contact, index) => {
       const tr = $('<tr></tr>');
       const fName =  $(`<td>
       <input type = 'text' id ='fName' value = ${contact.firstName} class='form-control editable' readonly>
      </td>
      `);
       const lName = $(`<td>
       <input type = 'text' id = 'lName' value = ${contact.lastName} class='form-control editable' readonly>
      </td>
      `);
       const mobile = $(`<td>
       <input type = 'number' id = 'phone' value = ${contact.phoneNumber} class='form-control editable' readonly>
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
       remove.click(() => {
           $(remove).closest('tr').remove();
           myPhoneBook.removeContact(contact.phoneNumber);
           myPhoneBook.displayContacts();
       });
       edit.click((event) => {
           event.preventDefault();
           //Put all the <td> elements in an array
           let tableDataElements = [$(fName), $(lName), $(mobile)];

           tableDataElements.map((td) => {
               let attr = td.children().attr('readonly');
               if (attr) {
                   td.children().removeAttr(attr);
                   $(edit).children().html('Save');
                   $(edit).children().removeClass('btn-primary');
                   $(edit).children().addClass('btn-success');
                  
               }else{
                   td.children().attr('readonly', '');
                   $(edit).children().html('Edit');
                   $(edit).children().removeClass('btn-success');
                   $(edit).children().addClass('btn-primary');
                   //editContactDetails(contact, index)
                //    console.log(myPhoneBook.displayContacts());
               }
           });
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
           myPhoneBook.addContact( <string>firstName, <string>lastName, phoneNumber);
            table.children('tr').remove();
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
const editContactDetails = (contact: Contact, id: number) => {
   contact.firstName =  <string> $('#firstName').val();
   contact. lastName = <string> $('#lastName').val();
   contact.phoneNumber = <number> $('#mobile').val();
   myPhoneBook.editContact(contact, id);  
}
  
