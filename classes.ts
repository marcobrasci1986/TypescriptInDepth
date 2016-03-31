import {Book, DamageLogger, Author, Librarion} from './interfaces'

export class UniversityLibrarian implements Librarion{
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string){
        console.log(this.name + ' is assisting ' + custName);
    }

}