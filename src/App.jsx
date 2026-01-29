// src/App.jsx
import { useState } from "react";
import "./App.css";
import Bookshelf from "./components/Bookshelf/Bookshelf";

const App = () => {

  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState({ title: "", author: "" })

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setBooks([...books, newBook])
    setNewBook({ title: "", author: "" });
  }

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf
        books={books}
        newBook={newBook}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default App;
