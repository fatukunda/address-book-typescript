import { Contact } from './contact';
//Phone book class
export class PhoneBook {
    constructor(public contacts: Contact[] = []){
    }
    addContact(firstName: string, lastName: string, phoneNumber: number){
        const contact = new Contact(firstName, lastName, phoneNumber)
        this.contacts.push(contact);
    }
    displayContacts(){
        console.log(this.contacts);
    }
    displayContact(){
        console.log('hello');
    }
    removeContact(phoneNumber: number){
        this.contacts.forEach((contact, index) => {
            contact
            if (contact.phoneNumber === phoneNumber) {
                this.contacts.splice(index, 1);
            }
        })
    };
    editContact(contact: Contact, id: number) {
        this.contacts.map((contac, index) => {
            if (index === id) {
                contac.firstName = contact.firstName;
                contac.lastName = contact.lastName;
                contac.phoneNumber = contact.phoneNumber;
            }
        })
    };

 };
