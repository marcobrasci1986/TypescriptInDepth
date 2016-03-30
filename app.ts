function GetAllBooks() {

    let books = [
        {id: 1, title: 'Ulysses', author: 'James Joyce', available: true},
        {id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false},
        {id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true},
        {id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true}
    ];

    return books;
}

function LogFirstAvailable(books): void {

    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {

        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total books: ' + numberOfBooks);
    console.log('First available: ' + firstAvailable);
}

const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);