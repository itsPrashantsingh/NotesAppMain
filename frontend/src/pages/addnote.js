import React from 'react'
import { useState, useRef} from 'react';
import JoditEditor from 'jodit-react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom'



const AddNote = ({ placeholder }) => {
    const editor = useRef(null);
	  const [content, setContent] = useState('');

    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [isimportant, setimportant] = useState(false);
    let navigate = useNavigate();
    
    const submitForm = async (e) => {
      e.preventDefault();
      let res = await fetch("http://localhost:8000/addnotes",{
        mode:"cors",
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({title:title, description:description, content:content, isImportant:isimportant,uploadedBy:localStorage.getItem("userID")})
      });
      const data = await res.json();
        // console.log(data);
        if (data.success) {

          alert("Note Added Successfully");
          navigate("/");

          } 
          else {
            alert("Error Adding Note");
            
          }
      
      
    }






  return (
    <>
    <Navbar />
    
    <div className='.addNote min-h-screen px-[50px]' >
        <form className='my-10' onSubmit={submitForm} >
            <h3 className='m-0 p-0 text-3xl '>Create a New Note</h3>
            <div className='inputBox mt-5'>
                <label htmlFor=''>Enter Note Title</label>
                <input
                  type="text"
                  placeholder="Note Title"
                  className="w-full p-2 rounded-md mt-1"
                  style={{ border: "2px solid #555" }}
                  name="title"
                  id="title"
                  onChange={(e)=>settitle(e.target.value)}
                  value={title}
                  required
            />
            </div>
            <div className="inputBox !block !bg-transparent mt-4 mb-4">
            <label htmlFor="description" className="my-2">Enter A Note Description</label>
            <textarea
              type="text"
              placeholder="Note Description"
              className="w-full p-2 rounded-md mt-1 min-h-[100px]"
              style={{ border: "2px solid #555" }}
              name="description"
              id="description"
              onChange={(e)=>setdescription(e.target.value)}
              value={description}
              required
            ></textarea>
          </div>
<JoditEditor

			ref={editor}
			value={content}
			
			tabIndex={1} // tabIndex of textarea
			
			onChange={newContent => setContent(newContent)}
		/>
    <label  for="check"> Important Tag:</label> 
    <input
                  type="checkbox"
                  className="ml-2 mt-4 "
                  name="check"
                  id="check"
                  onChange={(e)=>setimportant(e.target.checked)}
                  
            /> 
    <br></br>
    <button className="add text-black py-2 px-7 rounded mt-4" type="submit">Add</button>
    
            

    </form>


        

    </div>
    </>
    
  )
}

export default AddNote
