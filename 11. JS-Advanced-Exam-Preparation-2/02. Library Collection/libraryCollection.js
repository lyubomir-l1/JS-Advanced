class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity,
            this.books = []
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error("Not enough space in the collection.")
        };
        let currentBook = {
            bookName,
            bookAuthor,
            payed: false,
        }
        this.books.push(currentBook);
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let foundBook = this.books.find((p) => p.bookName == bookName);
        let findIndex = this.books.indexOf(foundBook);
        if (!foundBook) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (foundBook.payed === true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        foundBook.payed = true;
        return `${bookName} has been successfully paid.`

    }
    removeBook(bookName) {
        let foundBook = this.books.find((p) => p.bookName == bookName);
        let findIndex = this.books.indexOf(foundBook);

        if (!foundBook) {
            throw new Error(`The book, you're looking for, is not found.`)
        }
        if (foundBook.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        this.books.splice(findIndex, 1);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        let foundBook = this.books.find((p) => p.bookAuthor == bookAuthor);
        let hasPayed = "";
        let newArr = []
        if (bookAuthor === undefined) {
            let emptySlots = Number(this.capacity) - this.books.length;
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach(book => newArr.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed === false ? book.payed = "Not Paid" : "Has Paid"}.`));

            return `The book collection has ${emptySlots} empty spots left.
${newArr.join("\n")}`

        }

        if (!foundBook) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }
        foundBook.payed === true ? hasPayed = "Has Paid" : hasPayed = "Not Paid"


        return `${foundBook.bookName} == ${foundBook.bookAuthor} - ${hasPayed}.`

    }
}

const library = new LibraryCollection(5) 
library.addBook('Don Quixote', 'Miguel de Cervantes'); 
library.payBook('Don Quixote'); 
library.addBook('In Search of Lost Time', 'Marcel Proust'); 
library.addBook('Ulysses', 'James Joyce'); 
console.log(library.getStatistics());