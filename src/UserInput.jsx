import React from 'react'

const UserInput = ({author,setAuthor,title, setTitle,content,setContent}) => {
  
return (
    
    <>
   
    <input 
    type="text" 
    placeholder='Input Title'
    onChange={e=> setTitle(e.target.value)}
    value={title}
    />

    <input 
    type="text" 
    placeholder='Input Author'
    onChange={e=> setAuthor(e.target.value)}
    value={author}
    />

<input 
    type="text" 
    placeholder='Input Content'
    onChange={e=> setContent(e.target.value)}
    value={content}
    />
 </>

  )
}

export default UserInput