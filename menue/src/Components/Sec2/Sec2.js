import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Spiner } from '../spinner/spinner';
import  { AppContext } from "../../App";
import axios from 'axios';
export function Sec2(){
    const {setLoading,loading,filterFunction} = useContext(AppContext) ;
    const [meal,setMeal] = useState()

    function Categories(){
    axios.get('http://localhost:3000/items.json')
    .then ((res)=>setMeal(res.data))
    console.log(meal);
}
    useEffect(() =>{
        Categories();
    },[])
    return(
       <div>
        <h1 className='title tracking-in-expand'>Categories</h1>
        <div className='container d-flex flex-wrap justify-content-center align-items-center gap-4 p-5'>
            {meal?.map((item,key)=>{
                return(
                    <Card key={key} style={{maxWidth:"250px"}}>
                    <Card.Img variant="top" src={item.items.details[0].image} style={{height:"200px"}} />
                    <Card.Body>
                      <Card.Title>{item.en_category_name}</Card.Title>

                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                )
            })}
        </div>   
       </div>
    )
    
}