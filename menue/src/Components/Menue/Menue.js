import { useEffect, useState ,useContext} from 'react';
import './Menue.css';
import Card from 'react-bootstrap/Card';
import {Spiner} from '../spinner/spinner';
import  { AppContext } from "../../App";
export function Menue(){
    const {cat,menu} = useContext(AppContext) ;
    const storedJsonString = localStorage.getItem("menue");
    const retrievedObject = JSON.parse(storedJsonString);
    return(
        <div className="menue">
            <h1 className='title tracking-in-expand'>{retrievedObject.en_category_name}</h1>
            <div className="container-fluid d-flex gap-3 align-items-center justify-content-center flex-wrap p-5">
                {retrievedObject?retrievedObject.items?.details?.map((item,key)=>{
                    return(
                        <Card key={key} style={{ margin:"10px 0"}}>
                            <Card.Img src={item.image} style={{ maxHeight: '230px' }} />
                            <Card.Body>
                                <Card.Title>{item.en_name}</Card.Title>
                               <div className='d-flex justify-content-between'>
                                <p style={{backgroundColor:"red",padding:"5px",borderRadius:"5px",color:"#ffff",fontWeight:"bold",margin: '0 20px'}}>{item.price} SAR</p>
                                <p style={{backgroundColor:"green",padding:"5px",borderRadius:"5px",color:"#ffff",fontWeight:"bold",margin: '0 20px'}}>{item.calories} Calories</p>
                               </div>
                            </Card.Body>
                        </Card>
                    )
                }):<Spiner/>}
                
            </div>
        </div>
    )
}