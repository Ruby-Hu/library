const shelf = document.getElementById("shelf");
const dialog = document.querySelector("dialog");
const addBtn = document.getElementById("addBook");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");
const readBtn = document.getElementsByClassName("read-button");
const deleteBtn = document.getElementsByClassName("delete-button");

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];

// pop up form display
addBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});


// process form submitted from user and add book info into library array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


//loop through array and display the books in cards
function displayBooks() {
    shelf.innerText = "";

    myLibrary.forEach((book, index) => {
        const card = document.createElement("div");
        card.dataset.index = index;
    
        const title = document.createElement("h3");
        title.innerText = book.name;
        
        const author = document.createElement("p");
        author.innerText = `By ${book.author}`;
        
        const pages = document.createElement("p");
        pages.innerText = `${book.pages} pages`;
        
        const readBtn = document.createElement("button");
        readBtn.innerText = book.read ? "Read" : "Unread";
        readBtn.classList.add(book.read ? "btn-read" : "btn-unread");
        readBtn.addEventListener("click", () => toggleRead(index));
        
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => removeBook(index));

        const buttonGroup = document.createElement("div");
        const infoGroup = document.createElement("div");

        shelf.appendChild(card).className = "card";
        card.appendChild(infoGroup).className = "info-group"
        card.appendChild(buttonGroup).className = "button-group";
        infoGroup.appendChild(title).className = "title";
        infoGroup.appendChild(author).className = "author";
        infoGroup.appendChild(pages).className = "pages";
        buttonGroup.appendChild(readBtn);
        buttonGroup.appendChild(deleteBtn).className = "delete-button";
    });
}

// validating form
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const err = document.getElementsByClassName("error")
const titleErr = document.querySelector("#title + span.error")
const authorErr = document.querySelector("#author + span.error")
const pagesErr = document.querySelector("#pages + span.error")
const form = document.getElementById("form");

title.addEventListener("input", (event) => {
    if (title.validity.valid) {
        err.textContent = "";
        err.className = "error";
    } else {
        showError();
    }
});

form.addEventListener("submit", (event) => {
    if ((!title.validity.valid) && (!author.validity.valid) && (!pages.validity.valid)) {
        showError();
        event.preventDefault;
    }
});

function showError() {
    if (title.validity.valueMissing || author.validity.valueMissing || pages.validity.valueMissing) {
        err.innerText = "This field can't be empty.";
    } else if (title.validity.typeMismatch || author.validity.typeMismatch) {
        titleErr.textContent = "This field is text only.";
    } else if (pages.validity.typeMismatch) {
        pagesErr.textContent = "Please enter a number.";
    }

    err.className = "error active";
}

// reset form after each fill
function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
} 

//Update shelf after submit
submitBtn.addEventListener("click", (e) => {


    //handling form submission
    e.preventDefault();
    dialog.close();
    
    //dealing with library and display
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    addBookToLibrary(title, author, pages, read);
    shelf.innerText = "";
    displayBooks();

    resetForm();
});

addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 320, true);
addBookToLibrary("When Breath Becomes Air", "Paul Kalanithi", 228, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 496, false);

displayBooks();