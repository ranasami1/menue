import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Sec2.css';
import { Link } from 'react-router-dom';
import { Spiner } from '../spinner/spinner';
import  { AppContext } from "../../App";
export function Sec2(){
    const {setLoading,loading,filterFunction} = useContext(AppContext) ;
    const [meal,setMeal] = useState([])
    function Categories(){
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response)=>{setMeal(response.data.categories);
            console.log(meal);
            setLoading(false);
        })
    }
    useEffect(() =>{
        Categories();
    },[])
    return(
       <div className='Container'>
        <h1 className='title tracking-in-expand'>Categories</h1>
        <div className='category'>
            {loading?<Spiner/>:meal.slice(0,12).map((item,key)=>{
                return(
                <Card key={key} style={{ width: '18rem',margin: "10px"}}>
                <Card.Img variant="top" src={item.strCategoryThumb} />
                <Card.Body>
                    <Card.Title>{item.strCategory}</Card.Title>
                    <Card.Text>{item.strCategoryDescription.substr(0,50)}</Card.Text>
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