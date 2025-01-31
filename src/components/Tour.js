import Card from "./Card";
import {useState} from "react";
import './Tour.css';

function Tour({Data}){
    const [tour,updateTour]=useState(Data);

    function RemoveTour(id){
        let arr= tour.filter((t)=>{
            return t.id !== id;
        })    
        updateTour(arr);
    }
    if(tour.length===0){
        return (
            <div className="no-tour">
                <h3>No Tour Left</h3>
                <button className="refresh-btn" onClick={()=>updateTour(Data)}>
                    Refresh
                </button>
            </div>
        )
    }

    return (
        <div className="tour">
            {
                tour.map((data) => {
                    return  <Card key={data.id} {...data} RemoveTour={RemoveTour}></Card>;
                })
            } 
        </div>
    )
}
export default Tour;