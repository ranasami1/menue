import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Menue } from './Components/Menue/Menue';
import { useState,createContext} from 'react';
import axios from 'axios';
export const AppContext = createContext();
function App() {
  const [cat,setCat] = useState("Beef");
  const [filterm , setFilterm] = useState([]);
  const [loading , setLoading] = useState(true);
  const [mealN,setMealN] = useState([]);
  const [menu,setMenu] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  function filterFunction(i){
    setCat(i);
    console.log(cat);
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
    .then((res)=>setFilterm(res.data.meals));
    console.log(filterm);
    setLoading(false);      
} 
async function mealName(i){
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${i}`)
  .then((res)=>res.json())
  .then((data)=>setMealN(data.meals[0]));
  if(isVisible != true){
    setIsVisible(!isVisible);
  }
}
const handleButtonClick = () => {
  setMealN(null)
  if(isVisible == true){
    setIsVisible(!isVisible);
  }
};
  return (
    <div className="App">
    <Header/>
    <AppContext.Provider value={{filterFunction,loading,setLoading,
      cat,mealName,mealN,isVisible,setIsVisible,handleButtonClick,menu,setMenu}}>
    <Router>
      <Routes>      
        <Route path='/' element={<Home/>}/>
        <Route path='/menue' element={<Menue/>}/>
         </Routes>
    </Router>
    </AppContext.Provider>
    </div>
  );
}

export default App;
