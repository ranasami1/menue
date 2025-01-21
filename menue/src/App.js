import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Menue } from './Components/Menue/Menue';
import { useState,createContext,useEffect} from 'react';
import axios from 'axios';
import Footer from './Components/Footer/Footer';
export const AppContext = createContext();
function App() {
  let [cat,setCat] = useState();
  let [menu,setMenu] = useState([]);
  let [meal,setMeal] = useState()
  
  function Categories(){
    axios.get('http://localhost:3000/items.json')
    .then ((res)=>setMeal(res.data))
    console.log(meal);
}
function Category(selectedCategory) {
  let selected= JSON.stringify(selectedCategory)
  console.log('Selected Category:', selectedCategory);
  setMenu=localStorage.setItem("menue",selected);
}


    useEffect(() =>{
        Categories();
    },[])
  
  return (
    <div className="App">
    <Header/>
    <AppContext.Provider value={{ cat, menu, setMenu, meal, Category }}>
    <Router>
      <Routes>      
        <Route path='/' element={<Home/>}/>
        <Route path='/menue' element={<Menue/>}/>
         </Routes>
    </Router>
    </AppContext.Provider>
    <Footer/>
    </div>
  );
}

export default App;
