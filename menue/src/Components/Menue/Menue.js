import './Menue.css';
import Card from 'react-bootstrap/Card';
import {Spiner} from '../spinner/spinner';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { AppContext } from '../../App';

export function Menue(){
    let {lng} = useContext(AppContext);
    let {t} = useTranslation();
    const storedJsonString = localStorage.getItem("menue");
    const retrievedObject = JSON.parse(storedJsonString);
    return(
        <div className="menue">
            <h1 className='title tracking-in-expand'>{lng === "ar" ?retrievedObject.ar_category_name:retrievedObject.en_category_name}</h1>
            <div className="container-fluid d-flex gap-3 align-items-center justify-content-center flex-wrap">
                {retrievedObject?retrievedObject.items?.details?.map((item,key)=>{
                    return(
                        <Card key={key} style={{ margin:"10px 0"}}>
                            <Card.Img src={item.image} style={{ maxHeight: '230px' }} />
                            <Card.Body>
                                <Card.Title>{lng === "en"?item.en_name:item.ar_name}</Card.Title>
                               <div className='d-flex justify-content-between'>
                                <p style={{backgroundColor:"red",padding:"5px",borderRadius:"5px",color:"#ffff",fontWeight:"bold",margin: '0 20px'}}>{lng === "ar" ? `${item.price} ${t("SAR")}` : `${t("SAR")} ${item.price}`}</p>
                                <p style={{backgroundColor:"green",padding:"5px",borderRadius:"5px",color:"#ffff",fontWeight:"bold",margin: '0 20px'}}>{lng === "ar" ? `${item.calories} ${t("Calories")}` :`${t("Calories")} ${item.calories}`}
                                </p>
                               </div>
                            </Card.Body>
                        </Card>
                    )
                }):<Spiner/>}
                
            </div>
        </div>
    )
}