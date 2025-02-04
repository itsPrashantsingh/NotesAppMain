import React from 'react'
import Navbar from '../components/navbar'

const SingleNotePage = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col px-[60px] w-[80vw] min-h-[68vh] h-[auto] !mb-0 !mt-[10%] justify-self-center ">

        <div className="flex items-start justify-between h-[auto] my-3">
          <div className="left w-[80%] h-full">
            <h3 className='m-0 p-0 text-3xl text-[#000] line-clamp-1 min-w-[90%]'>title</h3>
            <p className='text-[gray]'>date</p>
          </div>
          <div className="right flex items-start gap-1 w-[20%] h-full justify-end">
            <img className='w-[30px] h-[30px] cursor-pointer'  alt="del" />
            <img className='w-[35px] h-[35px] cursor-pointer'  alt="edit" />
          </div>
        </div>

        <p className='text-gray'>description</p>
        <div className='my-3 w-full'>
          xskndwnd
         

        </div>
    </div>



      
    </>
  )
}

export default SingleNotePage
