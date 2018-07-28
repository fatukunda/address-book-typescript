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
 }