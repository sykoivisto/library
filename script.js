let myLibrary = [
    {
        title: 'Moby-Dick',
        author: 'Herman Melville',
        pages: 378,
        read: true
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        pages: 281,
        read: true
    },
];

function Book(title, author, pages, read) {
    this.title = title; //string, title of book
    this.author = author; //string, author of book
    this.pages = pages; //number, number of pages
    this.read = read; //bool, have we read the book
}

//add and remove books

function addBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    document.getElementById('book-form').reset();

    myLibrary.push(new Book(title, author, pages, read));
    displayBook(myLibrary[myLibrary.length - 1], myLibrary.length - 1);

    removeBookForm();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    refreshDisplay();
}

//change book status
function readBookStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    refreshDisplay();
}

//display books

function refreshDisplay() {
    document.getElementById('display').innerHTML = '';
    displayAllBooks();
}
function displayAllBooks() {
    for(let i=0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i], i)
    }
}
function displayBook(book, index) {
    let newCard = document.createElement('div');
    newCard.classList.add('card')

    newCard.innerHTML = `
        <p>"${book.title}"</p>
        <p>${book.author}</p>
        <p>${book.pages} Pages</p>
        <button data-index="${index}" class="${book.read ? 'read' : 'unread'}"  onclick="readBookStatus(this.getAttribute('data-index'))">${book.read ? 'Read' : 'Unread'}</button>
        <button data-index="${index}" class="remove-book" onclick="removeBook(this.getAttribute('data-index'))">Remove</button>
    `
    document.getElementById('display').appendChild(newCard);
}


// Modal functionality

function addBookForm() {
    document.getElementById('modal-bg').classList.remove('inactive');
    document.getElementById('add-book-popup').classList.remove('inactive');
}
function removeBookForm() {
    document.getElementById('modal-bg').classList.add('inactive');
    document.getElementById('add-book-popup').classList.add('inactive');
}

//upon loading

// //modal functionality
document.getElementById('modal-bg').addEventListener('click', removeBookForm);


//load the books
displayAllBooks();