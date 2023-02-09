import React from 'react';
import {useState} from 'react';
import Main from './Main';





export default function Input(){
    const [message, setMessage] = useState('');
    const handleChange = event => {
    setMessage(event.target.value);};

    const [message2, setMessage2]= useState('');
    const handleChange2=event=>{
        setMessage2(event.target.value)
    }
    const [message3, setMessage3]= useState('');
    const handleChange3=event=>{
        setMessage3(event.target.value)
    }
    const [message4, setMessage4]= useState('');
    const handleChange4=event=>{
        setMessage4(event.target.value)
    }
    const [message5, setMessage5]= useState('');
    const handleChange5=event=>{
        setMessage5(event.target.value)
    }
    const [message6, setMessage6]= useState('');
    const handleChange6=event=>{
        setMessage6(event.target.value)
    }
    const [message7, setMessage7]= useState('');
    const handleChange7=event=>{
        setMessage7(event.target.value)
    }
    
    
    return(
        <>
        <form className="form">
       
            <input type="text" placeholder=" Enter title"     onChange={handleChange} value={message}  />
        
       
            <input type="text" placeholder=" Enter location"  onChange={handleChange2} value={message2}/>
        
        
            <input type="text" placeholder="Enter google maps link" onChange={handleChange3} value={message3} />
        
        
            <input type="text" placeholder="Enter date of start" onChange={handleChange4} value={message4} />
        
        
            <input type="text" placeholder="Enter date of end" onChange={handleChange5} value={message5} />
    
        
            <input type="text"  placeholder="Enter description" onChange={handleChange6} value={message6}/>
        
        
            <input type="text" placeholder="Enter image link" onChange={handleChange7} value={message7}/>

            <button className="btn" onClick={Save}>Save</button>
        </form>
        
        
        </>
    )
    function Save(){
        const obj={
            title: {message},
            location: {message2},
            googleMapsUrl: {message3},
            startDate: {message4},
            endDate: {message5},
            description: {message6},
            imageUrl: {message7}
        }
    
    return(
       <></>
       
    )
     


    }
}



