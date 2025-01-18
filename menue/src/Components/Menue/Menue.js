import { useEffect, useState ,useContext} from 'react';
import './Menue.css';
import Card from 'react-bootstrap/Card';
import {Spiner} from '../spinner/spinner';
import { Button } from 'react-bootstrap';
import { Recipe } from '../recipe/recipe';
import  { AppContext } from "../../App";
export function Menue(){
    const {setLoading,loading,cat,mealName,menu,setMenu} = useContext(AppContext) ;
    function menue(){
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
            .then((res)=>res.json())
            .then((data)=>{
                setMenu(data.meals)
                setLoading(false)
                console.log(menu);
            })
        }
    useEffect(()=>{
        menue();
    },[])
    return(
        <div className="menue">
            <h1 className='title tracking-in-expand'>{cat} Meals</h1>
            <div className="container">
                {loading?<Spiner/>:menu?.map((item,key)=>{
                    return(
                        <Card key={key} style={{ width: '15rem',margin: "10px"}}>
                            <Card.Img variant="top" src={item.strMealThumb} />
                            <Card.Body>
                                <Card.Title>{item.strMeal}</Card.Title>
                                <Button variant="warning" onClick={()=>mealName(item.strMeal)}>Check recipe</Button>
                            </Card.Body>
                        </Card>
                    )
                })} <Recipe/>
                
            </div>
        </div>
    )
}