import * as Interfaces from './interfaces'

export class UniversityLibrarian implements Interfaces.Librarion{
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string){
        console.log(this.name + ' is assisting ' + custName);
    }

}


export abstract class ReferenceItem{

    private _publisher:string;

    static department: string = 'Research';

    constructor(public title: string, protected year: number){
        console.log('reating a new ReferenceItem ...');
    }


    printItem():void{
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher():string {
        return this._publisher;
    }

    set publisher(value:string) {
        this._publisher = value;
    }

    abstract printCitation():void;
}
