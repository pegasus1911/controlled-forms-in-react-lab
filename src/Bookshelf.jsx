import { useState } from 'react';
const Bookshelf=()=>{

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },])
    const [newBook,setNewBook]=useState({title:'', author:''})
    
const handleInputChange=(event)=>{
  setNewBook({...newBook,[event.target.name]:event.target.value})
}
const handleSubmit=(event)=>{
  event.preventDefault()
  console.log('we wont go to another page')
  setBooks([...books,newBook])
  setNewBook({title:'',author:""})
}
return (
  <div className="bookshelfDiv">
    <div className="formDiv">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Enter title name: </label>
        <input name='title' id='title' value={newBook.title} onChange={handleInputChange}/>
        <br></br>
        <label>Author</label>
        <input name='author' id='author' value={newBook.author} onChange={handleInputChange}/>
      <button type='submit'>Submit ur book</button>
      </form>
         </div>
    <div className="bookCardsDiv">
      {
        books.map((book,index)=>{
          return( 
            <div key={index} className='bookCard'>
            <p>{book.title}</p>
            <p>{book.author}</p>
          </div>
          )
          
        })
      }
      </div>
  </div>
)
}
export default Bookshelf