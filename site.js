
const bookTitles = [
    "The Catcher in the Rye",
    "1984",
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "Pride and Prejudice"
]

const testBook1 = {
    title: "Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    pages: 1209
}

const title = "The Two Towers"
const author = "J.R.R. Tolkien"
const pages = 352

const testBook2 = { title, author, pgs: pages }

console.log(testBook2)

const c = 10
const f = c * 9/5 + 32;

console.log({c,f})

const books = [
    {
        title: 'Dune',
        author: "Frank Herbert",
        pages: 412
    },
    {
        title: "Dune Messiah",
        author: "Frank Herbert",
        pages: 256
    },
    {
        title: "The Children of Dune",
        author: "Frank Herbert",
        pages: 444
    }
]

const book01 = document.querySelector('#Top-books')
// bookTitles.forEach(title => {
//     const li = document.createElement('li')
//     li.textContent = title
//     book01.append(li)
// })
//console.log(book)

{
    const { title, author } = books[0]
}

books.forEach(({title, author, pages}) => {
    const li = document.createElement('li')
    book01.append(li)

    const h2 = document.createElement('h2')
    h2.textContent = title
    li.append(h2)

    const h3 = document.createElement('h3')
    h3.textContent = author
    li.append(h3)

    const p = document.createElement('p')
    p.textContent = pages
    li.append(p)

})


