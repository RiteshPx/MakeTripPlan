import react,{useState} from 'react'
import './Card.css';

function Card({id,name,tourPrice,imageLink,description,RemoveTour}){
    const [readmore ,read]=useState(false);
    let descr= readmore? description:`${description.substring(0,200)}....`; 

    function Change(){
        read(!readmore);
    }

    return (
        <div className='card'>
            <img src={imageLink} className="image-style "/>
            <div className="allDetail">
              
               <div className='name'>{name} <span className='price'> at price: {tourPrice}</span>  </div>
               <span className='detail'>{descr} 
               <span className="read" onClick={Change}>
                {readmore ? 'read less ': 'read more'}
               </span>
               </span>
            </div>
            <button className='btn' onClick={()=>RemoveTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;