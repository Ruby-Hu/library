const myLibrary = [harryPotter, breath, pridePrejudice];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 320, true);
const breath = new Book("When Breath Becomes Air", "Paul Kalanithi", 228, true);
const pridePrejudice = new Book("Pride and Prejudice", "Jane Austen", 496, false);

//pop up form display
function openForm() {
    document.getElementById("pop-up").classList.toggle("form-show");
    document.getElementById("form-bg").style.display = "block";
}

function closeForm() {
    document.getElementById("pop-up").classList.toggle("form-show");
    document.getElementById("form-bg").style.display = "none";
}


//process form submitted from user and add book info into library array
function addBookToLibrary() {
    
}

//loop through array and display the books in cards
function display() {
    for (let book in myLibrary) {
        document.getElementsByClassName(title).innerText = book.name;
        document.getElementsByClassName(author).innerText = book.author;
        document.getElementsByClassName(pages).innerText = book.pages;

    }
}