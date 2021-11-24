const title = document.getElementById('titleInput');
const author = document.getElementById('authorInput');
const pages = document.getElementById('pageCount');
const isRead = document.getElementById('read');
const submitButton = document.getElementById('submitButton');
const library = document.querySelector('.addedBooks');
const newBookButton = document.getElementById('addNewBook');
const modal = document.querySelector('#form');

newBookButton.onclick=()=>{
    modal.style.display = "block";
    modal.style.marginLeft = "20px";
}

submitButton.addEventListener('click',()=>{
    if(title.value !== ''&& author.value !== ''&& pages.value>0){
        bookReader();
        emptyFields();
    } 
})

let myLibrary = [];

class Book {
    constructor(title, author, pages, isRead){
        this.title = title.value
        this.author = author.value
        this.pages = pages.value
        this.isRead = isRead.checked
    }
}

const addBook = (newBook)=>{
    if (!isInLibrary(newBook)) myLibrary.push(newBook)
} 


const removeBook=(title)=> {
    myLibrary = myLibrary.filter((book) => book.title !== title)
}

const getBook = (title)=> {
    return myLibrary.find((book) => book.title === title)
}

const isInLibrary = (newBook) => {
    return myLibrary.some((book) => book.title === newBook.title)
}

const bookReader=()=>{
    newBook = new Book(title, author, pages, isRead);
    console.log(newBook)
    addBook(newBook);
}

const emptyFields = () =>{
    title.value=''
    author.value=''
    pages.value=''
    isRead.checked=false;
    modal.style.display = 'none';
    document.querySelector('.main').style.backgroundColor = '';
}

