import $ = require('jquery');
interface contact {
    firstName: string,
    lastName?: string,
    email?: string,
    phoneNumber: number,
}

class Contact implements contact {
    constructor(public firstName: string,public lastName: string, public phoneNumber: number) {
    }
}

class PhoneBook {
   constructor(public contacts: Contact[] = []){
   }
   addContact(firstName: string, lastName: string, phoneNumber: number){
       const contact = new Contact(firstName, lastName, phoneNumber)
       this.contacts.push(contact);
   }
   displayContacts(){
       console.log(this.contacts);
   }
}
 const myPhoneBook = new PhoneBook()
 myPhoneBook.addContact('Frank', 'Atukunda', 776675635);
 myPhoneBook.addContact('John', 'Bukasa', 675645654);
 myPhoneBook.displayContacts();

    $('#save').click((event) => {
        event.preventDefault();
        const firstName = $('#firstName').val()
        const lastName = $('#lastName').val();
        const phoneNumber = $('#mobile').val();
        myPhoneBook.addContact(<string>firstName, <string>lastName, parseInt(phoneNumber));
        myPhoneBook.displayContacts();
        clear();

 });
 const clear = () =>  {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#mobile').val('');
 }

 