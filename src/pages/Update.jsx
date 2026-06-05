import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [book,setBook] = useState({
    bookName : "",
    bookPrice : "",
    isbrNumber : "",
    authorName : "",
    publishedAt : "",
    publisher : "",
    
  })

  const [file,setFile] = useState(null);

  const formData = new FormData();
  formData.append("book",JSON.stringify(book));
  formData.append("image",file);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://mern2-0-basicnode-1.onrender.com/book",formData);
    console.log(response.data);
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name] : value
    })
  }



  
  return (
    <div className="create-container">
      <div className="form-card">
        <h2>Add New Book</h2>

        
          <div className="form-group">
            <label>Book Name</label>
            <input 
              onChange={handleChange}
              name = "bookName"
              type="text" 
              placeholder="Enter book name" 
              value={book.bookName}
              
            />
          </div>

          <div className="form-group">
            <label>Book Price</label>
            <input 
              onChange={handleChange}
              name = "bookPrice"
              type="number" 
              placeholder="Enter book price"
              value={book.bookPrice}
            
             />
          </div>

          <div className="form-group">
            <label>ISBN Number</label>
            <input 
              onChange={handleChange} 
              type="text"
              name = "isbrNumber"
              placeholder="Enter ISBN number"
              value={book.isbnNumber}
              
             />
          </div>

          <div className="form-group">
            <label>Author Name</label>
            <input
              onChange={handleChange} 
              name = "authorName"
              type="text" 
              placeholder="Enter author name" 
              value={book.authorName}
            />
          </div>

          <div className="form-group">
            <label>Published At</label>
            <input
             onChange={handleChange} 
             name = "publishedAt"
              type="text " 
              value={book.publishedAt}
             />
          </div>

          <div className="form-group">
            <label>Publisher</label>
            <input 
              onChange={handleChange} 
              name = "publisher"
              type="text"
              placeholder="Enter publisher name" 
              value={book.publisher}
            />
          </div>

          <div className="form-group">
            <label>Book Image</label>
            <input onChange={handleFileChange} type="file"  />
          </div>

          <button type="submit" onClick={handleSubmit}>Create Book</button>
      </div>
    </div>
  )
}

export default Create