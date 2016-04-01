import { Category } from './enums'; // filename no extension
import { Book, Logger, Author, Librarion , Magazine} from './interfaces';
import { UniversityLibrarian, ReferenceItem} from './classes';
import refBook from './Encyclopedia';
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunctions';
import Shelf from "./shelf";


let reference = new refBook("Fact book", 2016, 1);

function GetAllBooks():Book[] {

    let books = [
        {id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
        {id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Poetry},
        {
            id: 3,
            title: 'I Know Why the Caged Bird Sings',
            author: 'Maya Angelou',
            available: true,
            category: Category.Poetry
        },
        {id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
    ];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()):void {

    let numberOfBooks:number = books.length;
    let firstAvailable:string = '';

    for (let currentBook of books) {

        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total books: ' + numberOfBooks);
    console.log('First available: ' + firstAvailable);
}


function GetBookTitlesByCategory(categoryFilter:Category = Category.Fiction):Array<string> {

    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles:string[] = [];


    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;

}

function LogBookTitles(titles:string[]):void {

    for (let title of titles) {
        console.log(title);
    }

}

function GetBookById(id:number):Book {
    const allBooks = GetAllBooks();

    return allBooks.filter(book => book.id === id)[0];

}

function CreateCustomerID(name:string, id:number):string {
    return name + id;
}

function CreateCustomer(name:string, age?:number, city?:string) {
    console.log('Createing customer: ' + name);


    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}

function printBook(book:Book):void {
    console.log(book.title + " by " + book.author);
}

//****************************************************


let inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];


//var purgedBooks:Array<Book> = Purge<Book>(inventory);
//purgedBooks.forEach(book => console.log(book.title));
//
//
//var numbers:Array<number> = Purge<number>([1,2,3,4]);
//console.log(numbers);

let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));

var firstBook: Book = bookShelf.getFirst();



let magazines: Array<Magazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];


let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));

var firstMagazine: Magazine = magazineShelf.getFirst();

magazineShelf.printTitles();

let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`);






















