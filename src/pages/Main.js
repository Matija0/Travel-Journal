import React from 'react';
import { useState } from 'react';
import {ImLocation} from "react-icons/im"
import {Link} from "react-router-dom"
import {useEffect} from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export default function Main(){
  
  const LOCAL_STORAGE_KEY = "dataKey"
  const [unSelected, setUnselected]=useState([])
  const [selected,setSelected]= useState([])
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [googleMapsUrl, setUrl] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [data, setData]=useState(()=>{
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  })
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  
    const select=(item)=>{
   
      setSelected((d)=> [...d,item])

    }
    const unselect=(item)=>{
      const index = selected.indexOf(item)
       setUnselected([selected.splice(index,1)])
    }
    const remove=(item)=>{
      const array = data
      const index = data.indexOf(item)
      array.splice(index,1)
       setData([...array])
  }
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

  setData([...data, obj])
  Clear()
  
} 


useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}, [data]);

function Clear(){
  setTitle("")
  setLocation("")
  setUrl("")
  setStartDate("")
  setEndDate("")
  setDescription("")
  setImageUrl("")
}


    const cards = data.map((item, index) => {
      return (
        <div key={index} className={selected.some(i=> i.title == item.title)?" selected":""}> 
          <Card
             item={item}
             select={()=>select(item)}
             unselect={()=>unselect(item)}
             delete={()=>remove(item)}
          />
        
        </div>
      )
  }) 
  
    return(
    
      
      <div className='container'>
        
        <button className="btn" onClick={openModal}>Add new</button>
        {cards}
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
          <button className="btn" onClick={closeModal}>close</button>
          <form onSubmit={Save} className="form w-100" id="add">
          
          <input type="text" placeholder=" Enter title"     onChange={(e)=>setTitle(e.target.value)} value={title}  />
      
      
          <input type="text" placeholder=" Enter location"  onChange={(e)=>setLocation(e.target.value)} value={location}/>
      
      
          <input type="text" placeholder="Enter google maps link" onChange={(e)=>setUrl(e.target.value)} value={googleMapsUrl} />
      
      
          <input type="text" placeholder="Enter date of start" onChange={(e)=>setStartDate(e.target.value)} value={startDate} />
      
      
          <input type="text" placeholder="Enter date of end" onChange={(e)=>setEndDate(e.target.value)} value={endDate} />

      
          <input type="text"  placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} value={description}/>
      
      
          <input type="text" placeholder="Enter image link" onChange={(e)=>setImageUrl(e.target.value)} value={imageUrl}/>

          <button className="btn" type='submit'>Save</button>
      </form>
      </Modal>
    

    <div className="">
      {selected.map((item,index)=>(
          <div className="item" key={index}>
          <img src={item.imageUrl} />
          <div className="item-text">
            <div className="location">
              <h3><ImLocation/>{item.location}</h3>
              <Link to={item.googleMapsUrl} target="_blank">View on Google Maps</Link>
            </div>
            <h1>{item.title}</h1>
            <div className="date">
              <span>{item.startDate} - </span><span>{item.endDate}</span>
            </div>
            <p className="desc">{item.description}</p>
         
          </div>
        </div>
      ))}
    </div>
  </div>

      
    
    )
  }
  
  function Card(props){
    return(
  
      <div className='item'>
        <img src={props.item.imageUrl} />
        <div className="item-text">
          <div className="location">
            <h3><ImLocation/>{props.item.location}</h3>
            <Link to={props.item.googleMapsUrl} target="_blank">View on Google Maps</Link>
          </div>
          <h1>{props.item.title}</h1>
          <div className="date">
            <span>{props.item.startDate} - </span><span>{props.item.endDate}</span>
          </div>
          <p className="desc">{props.item.description}</p>
          <div className="buttons">
            
            <button className="btn-remove" onClick={props.delete}>Remove</button>
          </div>
        </div>
      </div>
    )
   
    
  }
  
  