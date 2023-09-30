export class Person {
    name: string | null;
    email: string | null;
    gender: string | null;
    address: string | null;
    country: string | null;
    personalId: string | null;

    constructor(name: string | null, email: string | null,
        gender: string | null, address: string | null, countryId: string | null, personalId: string | null) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.address = address;
        this.country = countryId;
        this.personalId = personalId;
    }
}