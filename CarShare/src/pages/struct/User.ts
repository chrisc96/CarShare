export class User {

    public uid : string;
    public email: string;
    public firstName : string;
    public lastName: string;
    public contactNum: string;

    public constructor(
        uid : string,
        email: string,
        firstName : string,
        lastName: string,
        contactNum: string,
    ) {
        this.uid = uid;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contactNum = contactNum
    }

    
}