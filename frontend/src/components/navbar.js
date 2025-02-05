import React from 'react'
import {useNavigate, useLocation } from 'react-router-dom'

function Navbar({searchresult}) {
  const navigate = useNavigate()
  const location = useLocation();
  const path = location.pathname;
  
  
  return (
    <>

        <div className='navbar w-screen h-[90px] bg-[black] px-[50px] flex items-center justify-between'>
          
            <div className='logo font-bold text-[30px] ' style={{color:"white"}}>NOTE IT</div>
            <div className='flex items-center justify-between ]'>
              <button className='addButton text-white py-2 px-4 rounded' onClick={()=>{navigate('/addnote')}} >Add Note</button>
              {
                path === '/' ? 
               
              <div className='inputx !w-[350px] !p-[7px] ' >
                  <input className='!w-[100%]' type="text" onChange={(e)=>{searchresult(e.target.value)}}  placeholder="Search for a Note!" />
              </div>:
              ""
              }
              
            </div>
            
            
        </div>
    </>
  )
}

export default Navbar;
