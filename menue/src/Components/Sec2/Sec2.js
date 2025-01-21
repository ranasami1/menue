import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Sec2.css';
import { Link } from 'react-router-dom';
import { Spiner } from '../spinner/spinner';
import  { AppContext } from "../../App";
import axios from 'axios';
export function Sec2(){
    const {setLoading,loading,filterFunction} = useContext(AppContext) ;
    const [meal,setMeal] = useState()

    function Categories(){
    axios.get('https://rolllandscoffee.com/rjs/items.json')
    .then ((res)=>setMeal(res.data[0]))
    console.log(meal);
}
    useEffect(() =>{
        Categories();
    },[])
    return(
       <div className='Container'>
        <h1 className='title tracking-in-expand'>Categories</h1>
        <div className='category d-flex'>
            {loading?<Spiner/>:meal.map((item,key)=>{
                return(
                <Card key={key} style={{ width: '200px',margin: "10px"}}>
                
                <Card.Body>
                    <Card.Title>{item.ar_category_name}</Card.Title>
                <Link to={"/menue"}>
                <Button variant="warning" onClick={()=>filterFunction(item.strCategory)}>Explore Menue</Button>
                </Link>
                </Card.Body>
                </Card>
                )
            })}
        </div>   
       </div>
    )
    
}