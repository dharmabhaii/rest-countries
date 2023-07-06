import React, { useState } from 'react'



const Heading = () => {

  const [darkmode,setdarkmode]=useState(false);
const handledarkmode=()=>{
  setdarkmode(prev=>!prev);
  document.body.classList.toggle("dark-mode")
}

  return (
    <>
    <div className='heading-container' >
        <header>Where in the world</header>
      <h4 className='mode' onClick={handledarkmode} >Dark mode</h4>
    </div>
    <hr />
    </>
  )
}

export default Heading
