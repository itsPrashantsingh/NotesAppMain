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
            <h3 className='m-0 p-0 text-2xl '>Create a New Note</h3>
            <div className='inputBox'>
                <label htmlFor=''>Enter Note Title</label>

            </div>
        </form>


        

    </div>
    </>
    
  )
}

export default AddNote
