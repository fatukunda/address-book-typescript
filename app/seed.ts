import { PhoneBook } from './phonebook';
//Seeding phonebook with some data
 export const myPhoneBook = new PhoneBook()
 myPhoneBook.addContact('Frank', 'Atukunda', 776675635);
 myPhoneBook.addContact('John', 'Bukasa', 675645654);
 myPhoneBook.displayContacts();
 