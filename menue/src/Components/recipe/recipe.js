import './recipe.css';
import { Button } from 'react-bootstrap';
import close from "../assets/delete_14025556.png";
import {useContext } from 'react';
import { AppContext } from '../../App';
export function Recipe(){
    const {handleButtonClick,isVisible,mealN} = useContext(AppContext) ;
    return(
        <div className="container-recipe">
            {isVisible?
                 <div className='recipe'>
                 <img onClick={()=>handleButtonClick()} className="close" src={close}/>
                     <h3>{mealN?.strMeal}</h3>
                     <h6 style={{color:"red"}}>{mealN?.strCategory}</h6>
                     <div className='container-text'><p>{mealN?.strInstructions}</p></div>
                    <a href={mealN?.strYoutube} target='_blank'>
                    <Button variant="warning">Show Video</Button>
                    </a> 
                 </div>:""}   
        </div>
    )
}