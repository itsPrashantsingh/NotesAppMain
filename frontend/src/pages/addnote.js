import React from 'react'
import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import Navbar from '../components/navbar';


const AddNote = ({ placeholder }) => {
    const editor = useRef(null);
	  const [content, setContent] = useState('');

	const config = useMemo(() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...'
		}),
		[placeholder]
	);

  return (
    <>
    <Navbar />
    
    <div className='.addNote min-h-screen px-[50px]' >
        <form className='my-10'>
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
              required
            ></textarea>
          </div>
<JoditEditor

			ref={editor}
			value={content}
			
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
    <label  for="check"> Important Tag:</label> 
    <input
                  type="checkbox"
                  className="ml-2 mt-4 "
                  name="check"
                  id="check"
                  required
            /> 
    <br></br>
    <button className="add text-black py-2 px-7 rounded mt-4" type="submit">Add</button>
    
            

    </form>


        

    </div>
    </>
    
  )
}

export default AddNote
