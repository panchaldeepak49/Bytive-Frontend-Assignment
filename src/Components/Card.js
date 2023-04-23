import React,{useState} from 'react'
import { Products } from './Products'

const Card = (props) => {
    const {value,handleDelete} = props

  const red = '#ff0000'
  const color = '#008000'

    const [bg,setBg] = useState(red);
    const[showModal,setShowModal] = useState(false);
    

    const bgChange=(item)=>{ 
        console.log(item)
        if(bg===red){
          setBg(color);
        }
        else{setBg(red);
        }
    }

    
    const MyModal =()=>{
        
        return (
            <>
            <div className='modal-wrapper'></div>
            <div className='modal-container'>
            <label>Name :</label>
            <input type='text' placeholder=''></input>
            <label>Email :</label>
            <input type='text' placeholder=''></input>
            <label>Phone :</label>
            <input type='text' placeholder=''></input>
            <label>Website :</label>
            <input type='text' placeholder=''></input>
            
            <button onClick={()=>setShowModal(false)}>Accept it </button>
            </div>
            
            </>
        )
    }
  return (
    <>
    <div className='maincard' key={value.id}>
        <div className='card1'>
            <div className='pic'>
            <img src={value.image} alt='missing' height='180'></img>
            </div>
            <h3 style={{color:'grey',marginRight:'30px'}} >{value.name}</h3>
            <div className='content1'>
                <li><i class="fa-regular fa-envelope"></i><span>{value.email1}</span></li>
                <li><i class="fa-thin fa-phone-flip fa"></i><span>{value.phone1}</span></li>
                <li><i class="fa-sharp fa-light fa-globe fa"></i><span>{value.website1}</span></li>
            </div>
        </div>



        <div className='card2'>
            <i class="fa-solid fa-heart" style={{color: bg}} onClick={()=>bgChange(value)}></i>
            <i class="fa-thin fa-pen fa" style={{marginLeft: '20px'}} onClick={()=>setShowModal(true)}></i>
            <i class="fa-light fa-trash fa" onClick={()=>handleDelete(value)}></i>
            { showModal && <MyModal />}
        </div>
    </div>
    </>
  )
}

export default Card