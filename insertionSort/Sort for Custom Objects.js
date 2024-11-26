function insertionSortByRating(books) {
    for (let i = 1; i < books.length; i++) {
        let current = books[i];
        let j = i - 1;
        while (j >= 0 && books[j].rating > current.rating) {
            books[j + 1] = books[j];
            j--;
        }
        books[j + 1] = current;
    }
    return books;
}
let books = [
    { title: "Book A", rating: 4.3 },
    { title: "Book B", rating: 3.7 },
    { title: "Book C", rating: 4.8 },
    { title: "Book D", rating: 4.1 }
];

console.log(insertionSortByRating(books));
// Output: [
//   { title: "Book B", rating: 3.7 },
//   { title: "Book D", rating: 4.1 },
//   { title: "Book A", rating: 4.3 },
//   { title: "Book C", rating: 4.8 }
// ]
