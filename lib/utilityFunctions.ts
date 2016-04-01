// This is a module


export function CalculateLateFee(daysLate:number):number {
    return daysLate * .25;
}


export function MaxBooksAllowed(age:number):number {
    if (age < 12) {
        return 3
    } else {
        return 10;
    }
}

/**
 * Not exported ! Cannot be imported into other modules
 */
function privateFunction():void {
    console.log('This is private ...');
}


export function Purge<T>(inventory: Array<T>): Array<T>{

    return inventory.splice(2, inventory.length);
}
