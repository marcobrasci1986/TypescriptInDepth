import { Category } from './enums'; // filename no extension
import { Book, Logger, Author, Librarion } from './interfaces';
import { UniversityLibrarian, ReferenceItem} from './classes';
import refBook from './Encyclopedia';
import { CalculateLateFee as CalcFee, MaxBooksAllowed } from './lib/namespaceFunction';


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


//let ref:ReferenceItem = new ReferenceItem('Facts and fiction', 2016);
//
//ref.printItem();
//ref.publisher = 'David Baldacci';
//console.log(ref.publisher);

//let refBook: ReferenceItem = new Encylopedia("Worldpedia", 1900, 10);
//refBook.printCitation();

























