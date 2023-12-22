const shelf = document.getElementById("shelf");

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 320, true);
const breath = new Book("When Breath Becomes Air", "Paul Kalanithi", 228, true);
const pridePrejudice = new Book("Pride and Prejudice", "Jane Austen", 496, false);

const myLibrary = [harryPotter, breath, pridePrejudice];

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
myLibrary.forEach((book) => {
    let card = document.createElement("div");
    shelf.appendChild(card).className = "card";

    let title = document.createElement("p");
    title.innerText = book.name;
    card.appendChild(title).className = "title";

    let author = document.createElement("p");
    author.innerText = "By " + book.author;
    card.appendChild(author).className = "author";

    let pages = document.createElement("p");
    pages.innerText = book.pages + " pages";
    card.appendChild(pages).className = "pages";

    let read = document.createElement("button");
    (book.read === true) ? (read.innerText = "Read") : (read.innerText = "Unread");
    card.appendChild(read).className = "read-button";
});

//toggle read or unread with button
const readBtn = document.getElementsByClassName("read-button");


display();