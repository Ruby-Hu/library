const shelf = document.getElementById("shelf");
const dialog = document.querySelector("dialog");
const addBtn = document.getElementById("addBook");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");
const readBtn = document.getElementsByClassName("read-button");

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
addBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});


//process form submitted from user and add book info into library array
function addBookToLibrary() {
    let checkBox = (document.getElementById("read").checked) ? true : false;
    let newAdded = new Book(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, checkBox);
    console.log(newAdded);
    myLibrary.push(newAdded);
    console.log(myLibrary);
}


//loop through array and display the books in cards
function displayBooks() {
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

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        card.appendChild(deleteBtn).className = "delete-button";
    });
}


//toggle read or unread with button


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    shelf.innerText = "";
    displayBooks();
  });

  displayBooks();