const shelf = document.getElementById("shelf");
const dialog = document.querySelector("dialog");
const addBtn = document.getElementById("addBook");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");
const readBtn = document.getElementsByClassName("read-button");
const deleteBtn = document.getElementsByClassName("delete-button");


class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(index) {
        this.books.splice(index, 1);
        this.display();
    }

    getBook() {
        return this.books;
    }

    toggleRead(index) {
        this.books[index].read = !this.books[index].read;
        this.display();
    }

    display() {
        shelf.innerText = "";

        this.books.forEach((book, index) => {
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
            readBtn.addEventListener("click", () => this.toggleRead(index));

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.addEventListener("click", () => this.removeBook(index));

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
}

const library = new Library();

// pop up form display
addBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});


// reset form after each fill
function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
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
    newBook = new Book(title, author, pages, read);
    library.addBook(newBook);
    shelf.innerText = "";
    library.display();

    resetForm();
});