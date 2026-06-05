import React from 'react'
import { useState ,useEffect  } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update  = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [book,setBook] = useState({});

  async function fetchBook() { 
    const response = await axios.get(`https://mern2-0-basicnode-1.onrender.com/book/${id}`);
    setBook(response.data.data);
    console.log(response.data.data);
  }

  useEffect(() => { 
    fetchBook();
  },[]);

  const [file,setFile] = useState(null);

  const formData = new FormData();

  if (file) {
    formData.append("image", file);
  }

  formData.append("book", JSON.stringify(book));
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.patch(`https://mern2-0-basicnode-1.onrender.com/book/${id}`,formData);
    if(response.status === 200) {
      navigate("/single/" + id);
    }else {
      alert("Failed to update book");
    }
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
              value={book.isbrNumber}
              
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

export default Update