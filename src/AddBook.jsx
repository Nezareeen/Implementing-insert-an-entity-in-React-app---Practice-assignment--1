// src/AddBook.jsx

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./AddBook.css"; 

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Book data submitted:", { title, author, description, coverImageUrl });
    alert("Book added (hypothetically)!");
  };

  return (
    <div className="add-book-container">
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverImageUrl">Cover Image URL:</label>
          <input
            type="url"
            id="coverImageUrl"
            value={coverImageUrl}
            onChange={(e) => setCoverImageUrl(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <Link to="/">
            <button type="button">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddBook;