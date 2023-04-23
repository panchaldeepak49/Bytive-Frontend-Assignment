import React, {useState} from 'react'
import './assign.css'
import { Products } from './Products'
import Card from './Card'



const Assign = () => {
  
    const[data,setData] =useState(Products);

    
    const handleDelete = (deletingData)=>{
        const newData = data.filter((datum)=> datum !== deletingData);
        setData(newData);
    }
    

  return (
    <>
    
    <div className='main1'>
        {
            data.map((value,index)=>{
                return(
            
                  <Card value={value} handleDelete={handleDelete}/>
    
                )
                })
        }
    </div>
    </>
          )
    }

    export default Assign