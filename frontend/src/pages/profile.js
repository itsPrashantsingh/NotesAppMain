import React from 'react'
import Navbar from '../components/navbar';
import Note from '../components/note';


const Profile = () => {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-between w-screen h-[300px] px-[50px] ">
        <div className="flex items-center gap-[10px]">
          <div className="profileCircle w-[150px] h-[150px] rounded-[50%] bg-[#d9d9d9]"></div>
          <div>
            <h3 className='text-[23px]'>UserName</h3>
            <p className='m-[0px] p-[0px] text-[gray] text-[15px] -mt-1'>Joined In </p>
          </div>
        </div>

        <div className='relative h-[40%]'>
          <div className='flex items-center gap-[10px] text-[gray]'>Total Notes : </div>
          <div className='absolute bottom-0 flex items-center gap-[10px]'>
            <button className="addButton text-black py-2 px-4 rounded">Add Pic</button>
            
          </div>
        </div> 
    </div>
  
   
    <div className="gridItems ">
  
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        
        
    </div>

    </>
  )
}

export default Profile;
