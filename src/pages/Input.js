import React from 'react';
import {useState} from 'react';
import Main from './Main';





export default function Input({setData,post}){
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [googleMapsUrl, setUrl] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const Save=(e)=>{
        e.preventDefault()
        const obj={
            title: title,
            location: location,
            googleMapsUrl: googleMapsUrl,
            startDate: startDate,
            endDate: endDate,
            description: description,
            imageUrl: imageUrl
        }
        setData(obj)
       
  post()
        }
    
    return(
        <>
        <form onSubmit={Save} className="form w-100">
       
            <input type="text" placeholder=" Enter title"     onChange={(e)=>setTitle(e.target.value)} value={title}  />
        
       
            <input type="text" placeholder=" Enter location"  onChange={(e)=>setLocation(e.target.value)} value={location}/>
        
        
            <input type="text" placeholder="Enter google maps link" onChange={(e)=>setUrl(e.target.value)} value={googleMapsUrl} />
        
        
            <input type="text" placeholder="Enter date of start" onChange={(e)=>setStartDate(e.target.value)} value={startDate} />
        
        
            <input type="text" placeholder="Enter date of end" onChange={(e)=>setEndDate(e.target.value)} value={endDate} />
    
        
            <input type="text"  placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
        
        
            <input type="text" placeholder="Enter image link" onChange={(e)=>setImageUrl(e.target.value)} value={imageUrl}/>

            <button className="btn" type='submit'>Save</button>
        </form>
        
        
        </>
    )

}



