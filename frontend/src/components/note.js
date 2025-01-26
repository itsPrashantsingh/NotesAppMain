import React from 'react'

const Note = () => {
  return (
    <>
        <div className='note relative'>
            <p className='text-[black]'>Note1</p>
            <h1 className='text-[black] text-[20px] line-clamp-1 w-[80%]'>Website design kk</h1>
            <p className='text-[black] line-clamp-4 w-[80%]'>lorem10</p>
            <div className='noteBottom absolute bottom-5 w-[93%] flex justify-between items-center'>
                <p className='text-[black]'>2/3/4</p>
                <div className='flex items-center gap-1'>
                    <img className='w-[30px] h-[30px]'  alt='xxx'/>
                    <img className='w-[35px] h-[35px]'  alt='xxx'/>
                </div>

            </div>

        </div>
      
    </>
  )
}

export default Note
