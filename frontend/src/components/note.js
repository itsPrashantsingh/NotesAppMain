import React, { useState } from 'react'
import { data } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'




const Note = ({note, height, index}) => {
  const navigate = useNavigate();
  const [isDeleteModel, setIsDeleteModel] = useState(false);
  
  const deleteNote=(id)=>{
    console.log(id);
    let res = fetch("http://localhost:8000/deletenotes",{
      method:"POST",
      mode:"cors",
      headers: {
        'Content-Type': 'application/json'
        },
        body:JSON.stringify({noteId:id})
    }).then(res=>res.json()).then(data=>{
      if(data.success){
        window.location.reload();
      }
      alert(data.message);
    }).catch(err=>console.log(err));
    setIsDeleteModel(false);


  }
  const editNote=(id)=>{
      navigate(`/editNote/${id}`);

  }
  return (
    <>
        <div onClick={()=>{navigate(`/singleNotePage/${note._id}`)}} className='note relative'>
          <div className='flex items-center justify-between'>
          <p className='text-[black]'>Note {index+1}</p>
            {
              note.isImportant ? 
              <p className='text-[white] bg-red-500 px-[10px] p-[3px] rounded '>Important</p>
              :""

            }

          </div>
            
            <h1 className='text-[black] text-[20px] line-clamp-1 w-[80%]'>{note.title}</h1>
            <p className='text-[black] line-clamp-4 w-[80%]'>{note.description}</p>
            <div className='noteBottom absolute bottom-5 w-[93%] flex justify-between items-center'>
                <p className='text-[black]'>{new Date(note.date).toDateString()}</p>
                <div className='flex items-center gap-1'>
                    <img className='w-[30px] h-[30px]' onClick={()=>setIsDeleteModel(true)} alt='delete'/>
                    <img className='w-[35px] h-[35px]' onClick={()=>editNote(note._id)}  alt='edit'/>
                </div>

            </div>

        </div>
        {
          isDeleteModel ?
          <>
            <div className='deleteNoteModal flex items-center justify-center flex-col fixed top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,.1)] z-[100] '>
              <div className='deleteNoteModalbody relative p-[15px] w-[30vw] h-[20vh] rounded-md bg-[#fff] shadow-lg'>
                <h3 className='text-[20px]'>Delete Note “<span className='text-[#578df5]'>Web Design</span>”</h3>
                <p className='m-0 p-0 text-[gray] text-[16px] leading-[1]'>Do You want To Delete This Note <br /> Yes / No</p>

                <div className="flex items-center gap-2 absolute bottom-[5%] w-full">
                    <button onClick={()=> deleteNote(note._id)} className="delete min-w-[46%] p-[8px] bg-[#f55757] text-[#fff] border-0 outline-0 cursor-pointer">Delete</button>
                    <button onClick={()=> setIsDeleteModel(false)} className="cancel min-w-[46%] p-[8px] bg-[#578df5] text-[#fff] border-0 outline-0 cursor-pointer">Cancel</button>
                </div>

              </div>

            </div>
          </>
          :
          ""
        }
      
    </>
  )
}

export default Note
