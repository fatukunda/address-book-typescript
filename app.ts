interface contact {
    firstName: string,
    lastName?: string,
    email?: string,
    phoneNumber: number,
}

class Contact implements contact {
    constructor(public firstName: string, public phoneNumber: number) {
    }
}

class PhoneBook {
   constructor(public contacts: Contact[] = []){
   }
   addContact(firstName: string, phoneNumber: number){
       const contact = new Contact(firstName, phoneNumber)
       this.contacts.push(contact);
   }
   displayContacts(){
       console.log(this.contacts);
   }
}
 const myPhoneBook = new PhoneBook()
 myPhoneBook.addContact('Frank', 776675635);
 myPhoneBook.addContact('John', 675645654);
 myPhoneBook.displayContacts();
 