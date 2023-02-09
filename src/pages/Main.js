import React from 'react';
import { useState } from 'react';
import {ImLocation} from "react-icons/im"
import {Link} from "react-router-dom"
import data from './data';

export default function Main(){

   const [data, setData]=useState([
    {
      title: "Mount Fuji",
      location: "JAPAN",
      googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
      imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
  },
  {
      title: "Sydney Opera House",
      location: "AUSTRALIA",
      googleMapsUrl: "https://goo.gl/maps/aVzpxW4xsoBEWNGW7",
      startDate: "27 May, 2021",
      endDate: "8 Jun, 2021",
      description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
      imageUrl: "https://source.unsplash.com/JmuyB_LibRo"
  },
  {
      title: "Geirangerfjord",
      location: "NORWAY",
      googleMapsUrl: "https://goo.gl/maps/ZS4NgvjLsio86Azs5",
      startDate: "01 Oct, 2021",
      endDate: "18 Nov, 2021",
      description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
      imageUrl: "https://source.unsplash.com/3PeSjpLVtLg"
  },
  ])

    const cards = data.map(item => {
      return (
        <div>
          <Card
             item={item}
          />
        </div>
      )
  }) 
  
    return(
      <div className="main">
        {cards}
      </div>
    )
  }
  
  function Card(props){
    return(
  
      <div className="item">
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
        </div>
      </div>
    )
    
    
  }
  
  