/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { fetchAllBooks } from "../api"
import { useState, useEffect } from "react"
import BookCard from "./BookCard"


const Books = () => {
    const [books, setBooks] = useState([])
    useEffect (() => {
        async function getBooks() {
            const newBooks = await fetchAllBooks()
            setBooks(newBooks)
        }
        getBooks()
    }, [])
    return <div>
        {
            books.map((book, index) => {
                return <BookCard key={index} book = {book}/>
            })
        }
    </div>
}

export default Books