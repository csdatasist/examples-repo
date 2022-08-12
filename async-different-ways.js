// callbacks
app.get('/books', (req, res) => {
    processData('data.txt', (err, result) => {
        fs.writeFile('/data/books.txt', result, (err, output) => {
            res.send(output);
        });
    })
});

// promises
let bookPromise = getBookById(5);

bookPromise
    .then(book => console.log(`data: ${book.title}`))
    .catch(err => console.log(err))
    .finally(() => console.log('done'))

// async await
async function getBookByID(id) {
    let book = await getBookFromServer(id);
    console.log(book.title);
    return book;
}

// rxjs observables 
let booksObservable = processAllBooks();

booksObservable.subscribe(
    book => console.log(book.title),
    err => console.log(err),
    () => console.log('done')
);
