const title = document.getElementById('titleInput');
const author = document.getElementById('authorInput');
const pages = document.getElementById('pageCount');
const isRead = document.getElementById('read');
const submitButton = document.getElementById('submitButton');
const library = document.querySelector('.books');
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
    if (!isInLibrary(newBook)){
        myLibrary.push(newBook);
        createBook(newBook);   
    } 
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


// displaying the books

function render() {
    const books = document.querySelectorAll('.book');
    books.forEach(book => library.removeChild(book));

    myLibrary.forEach(book=> createBook(book));
}

const createBook = (book) => {
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button')

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(book));

    titleDiv.textContent = `${book.title}`;
    titleDiv.classList.add('title');
    titleDiv.setAttribute('id', 'info')
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = book.author;
    authorDiv.classList.add('author');
    authorDiv.setAttribute('id', 'info')
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = book.pages;
    pagesDiv.classList.add('pages');
    pagesDiv.setAttribute('id', 'info')
    bookDiv.appendChild(pagesDiv);

    readBtn.classList.add('readBtn')
    readBtn.setAttribute('id', 'info')    
    bookDiv.appendChild(readBtn);
    if(book.isRead===false) {
        readBtn.textContent = 'Not Read';
        bookDiv.style.backgroundColor = '#DE4300';
    }else {
        readBtn.textContent = 'Read';
        bookDiv.style.backgroundColor = 'green';
        bookDiv.style.color='white';
    }
    readBtn.onclick = toggleRead;

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);
    
    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book),1);
        //setData()
        render();
    });

    readBtn.addEventListener('click', () => { 
        book.read = !book.read; 
        //setData(); 
        render();
    }); 
}

const toggleRead=(e)=>{
    const title = e.target.parentNode.firstChild.innerHTML.replaceAll('"', '')
    const book = getBook(title)
    book.isRead = !book.isRead
    render()
}
