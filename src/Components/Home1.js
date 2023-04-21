import React,{ useState } from 'react'
import './home.css'
import { Products } from './Products'

const Home = () => {

    const[item,setItem] = useState(Products);

    
  return (
    <>
    
    <div className='main'>
        {
    item.map((value)=>{
        return(
        
    <div className='card'>
        <div>
            {/* <img src='./Images/avatar-1.png' alt='missing' width='150'></img> */}
            <img src={value.image} alt='missing' width='150'></img>
        </div>
        <div className='content'>
            <h2>{value.name}</h2>
            <h4 className='details'>{value.email} :<span>{value.email1}</span></h4>
            <h4 className='details'>{value.phone} :<span>{value.phone1}</span></h4>
            <h4 className='details'>{value.company}:<span>{value.company1}</span></h4>
            <h4 className='details'> {value.website} :<span>{value.website1}</span></h4>
            <h4 className='details'>{value.address} :<span>{value.address1}</span></h4>
        </div>
    </div>
        )
    })
   }
    </div>
    
    </>
  )
    
}



export default Home