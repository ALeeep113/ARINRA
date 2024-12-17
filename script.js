const books = [
    { title: "SKY", author: "Maida Ivana", category: "Fiksi Dewasa" },
    { title: "PSEUDONIM", author: "Daniel Mahendra", category: "Novel" }
];

function displayBooks(filteredBooks) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ''; // Clear existing list

    filteredBooks.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");

        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Penulis:</strong> ${book.author}</p>
            <p><strong>Kategori:</strong> ${book.category}</p>
        `;
        
        bookList.appendChild(bookItem);
    });
}

function searchBooks() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery) ||
        book.category.toLowerCase().includes(searchQuery)
    );

    displayBooks(filteredBooks);
}

// Initialize with all books
displayBooks(books);