"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phonebook_1 = require("./phonebook");
//Seeding phonebook with some data
exports.myPhoneBook = new phonebook_1.PhoneBook();
exports.myPhoneBook.addContact('Frank', 'Atukunda', 776675635);
exports.myPhoneBook.addContact('John', 'Bukasa', 675645654);
exports.myPhoneBook.displayContacts();
