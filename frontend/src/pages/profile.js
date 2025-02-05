import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Note from '../components/note';



const Profile = () => {
  const [notes, setNotes] = useState([]);
  const [getUser, setUser] = useState({});

  async function getUserDetails(){
    await fetch("http://localhost:8000/userDetails",{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({userId: localStorage.getItem('userID')}),

    }).then(res=>res.json()).then(data=>{
      setUser(data.user)})

  }

  useEffect(()=>{
    getUserDetails()
  }, []);

  let getNotes = async()=>{
    let res = await fetch('http://localhost:8000/getnotes',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({userID: localStorage.getItem('userID')

      })
      }).then(res=>res.json()).then(data=>{
          if(data.success){
            setNotes(data.notes);
          }
          else{
            console.log(data.message);
          }
      

    });
    

  };

  useEffect(()=>{
    getNotes();
  },[]);


  const [searchData, setSearchData] = useState("");
  function getSearchData(data){
    setSearchData(data);
  }
  
  const filteredNotes = notes.filter(note => 
    
    note.title.toLowerCase().includes(searchData.toLowerCase()) ||
    note.content.toLowerCase().includes(searchData.toLowerCase())||
    note.description.toLowerCase().includes(searchData.toLowerCase())||
    (note.isImportant && "important".includes(searchData.toLowerCase()))
  );


  return (
    <>
    <Navbar searchresult = {getSearchData}/>
    <div className="flex items-center justify-between w-screen h-[300px] px-[50px] ">
        <div className="flex items-center gap-[10px]">
          <div className="profileCircle w-[150px] h-[150px] rounded-[50%] bg-[#d9d9d9]"></div>
          <div>
            <h3 className='text-[23px]'>{getUser.name}</h3>
            <p className='m-[0px] p-[0px] text-[gray] text-[15px] -mt-1'>Joined In: {new Date(getUser.date).toDateString()} </p>
          </div>
        </div>

        <div className='relative h-[40%]'>
          <div className='flex items-center gap-[10px] text-[gray]'>Total Notes :{notes.length} </div>
          <div className='absolute bottom-0 flex items-center gap-[10px]'>
            <button className="addButton text-black py-2 px-4 rounded">Add Pic</button>
            
          </div>
        </div> 
    </div>


    <div className="gridItems ">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((ele, index) => (
            <Note key={index} index={index} note={ele} />
          ))
        ) : (
          notes ? notes.map((ele,index)=>{
            return(
              <>
              <Note key={index} index={index} note={ele}/>
              </>
            )
          }):"Empty as Heaven!"
        )}
      </div>
  
   

    

    </>
  )
}

export default Profile;
