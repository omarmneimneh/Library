const titleofBook = document.getElementById('titleInput');
const authorofBook = document.getElementById('authorInput');
const pagesofBook = document.getElementById('pageCount');
const checkBox = document.getElementById('read');
const submitButton = document.getElementById('submitButton');
const library = document.querySelector('.addedBooks');

submitButton.addEventListener('click',()=>{
    addBooktoLibrary()
    titleofBook.value=''
    authorofBook.value=''
    pagesofBook.value=''
    checkBox.checked=false
})

let myLibrary = [];

class Book {
    constructor(title, author, pageCount, read) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.read = read;
    }
}

function addBooktoLibrary(){
    let title = titleofBook.value;
    let author = authorofBook.value;
    let pages = pagesofBook.value;
    let read = false
    if(checkBox.checked) read = true;

    if(title != '' && author !='' && pages!='') myLibrary.push(new Book(title, author, pages,read));
}
// function displayBooks(){
// myLibrary.forEach((book)=>{
//     let books = document.createElement('div')
//     let bookTitle = document.createElement('h3');
//     bookTitle.innerHTML = `"${book.title}"`;
//     let authorName = document.createElement('h3');
//     authorName.innerHTML = `${book.author}`;
//     let pageCounter = document.createElement('h3');
//     pageCounter.innerHTML = `${book.pages} pages`;
//     let checker = document.createElement('button');
//     if(book.read) checker.innerHTML = 'Read';
//     else checker.innerHTML = 'Not Read'
//     books.appendChild(bookTitle);
//     books.appendChild(authorName);
//     books.appendChild(pageCounter);
//     books.appendChild(checker);
// })
// }
// static class Library{
//     static displayBooks(){
//         const library = [];
//     }

//     static addBooktoLibrary(book){
//         const newBook = document.querySelector('.addedBooks');;

//         const 
//     }
// }

//document.addEventListener('DOMContentLoaded', Library.displayBooks);


