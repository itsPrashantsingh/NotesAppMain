import React from 'react'

function Navbar() {
  return (
    <>

        <div className='navbar w-screen h-[90px] bg-[black] px-[50px] flex items-center justify-between'>
          
            <div className='logo font-bold text-[30px] ' style={{color:"white"}}>NOTE IT</div>
            <div className='flex items-center justify-between !w-[40%]'>
              <button className='addButton text-white py-2 px-4 rounded'>Add Note</button>
              <div className='inputx !w-[350px] !p-[7px] ' >
                  <input className='!w-[100%]' type="text" placeholder="Search for a Note!" />
              </div>
            </div>
            
            
        </div>
    </>
  )
}

export default Navbar;
