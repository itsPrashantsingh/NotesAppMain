import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';

const SingleNotePage = () => {

  const [note, setNote] = useState({});
  let {id} = useParams();
  function getNote(){
    fetch('http://localhost:8000/getnote',{
      method: 'POST',
      mode:"cors",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({noteId: id})
    }).then((res)=>res.json()).then((data)=>{
      
      setNote(data.note);
    })
  }
  useEffect(()=>{
    getNote();
  },[])
  return (
    <>
    <Navbar/>
    <div className="flex flex-col px-[60px] w-[80vw] min-h-[68vh] h-[auto] !mb-0 !mt-[10%] justify-self-center ">

        <div className="flex items-start justify-between h-[auto] my-3">
          <div className="left w-[80%] h-full">
            <h3 className='m-0 p-0 text-3xl text-[#000] line-clamp-1 min-w-[90%]'>{note.title}</h3>
            <p className='text-[gray]'>{new Date(note.date).toDateString()}</p>
          </div>
          
        </div>

        <p className='text-gray'>{note.description}</p>
        <div className='my-3 w-full'>
          {parse(`${note.content}`)}
         

        </div>
    </div>



      
    </>
  )
}

export default SingleNotePage
