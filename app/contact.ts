//Contact interface
interface contact {
    firstName: string,
    lastName?: string,
    email?: string,
    phoneNumber: number,
}
//Contact class
export class Contact implements contact {
    constructor(public firstName: string,public lastName: string, public phoneNumber: number) {
    }
}