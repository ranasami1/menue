import './App.css';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Header from './Components/Header/Header';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Menue } from './Components/Menue/Menu';
import { useState,createContext,useEffect} from 'react';
import axios from 'axios';
import Footer from './Components/Footer/Footer';
import { initReactI18next, useTranslation } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import Cookies from 'js-cookie';


export const AppContext = createContext();

i18next.use(initReactI18next).use(LanguageDetector).use(HttpApi)
.init({
  lng:"ar",
  fallbacklng:"en",
  detection:{
    order: ['cookie', 'htmlTag', 'sessionStorage', 'navigator', 'localStorage', 'path', 'subdomain'],
    caches:['cookie'],
  },
  backend:{
    loadPath: `/locale/{{lng}}/transilition.json`,

  }
  
})

function App() {
  let { t } = useTranslation();
  let [cat,setCat] = useState();
  let [menu,setMenu] = useState([]);
  let [meal,setMeal] = useState()
  const [isArabic, setIsArabic] = useState(false);
  
  function Categories(){
    axios.get('https://rolllandscoffee.com/rjs/items.json')
    .then ((res)=>setMeal(res.data))
    console.log(meal);
}
function Category(selectedCategory) {
  let selected= JSON.stringify(selectedCategory)
  console.log('Selected Category:', selectedCategory);
  setMenu=localStorage.setItem("menue",selected);
}

const lng = Cookies.get("i18next");
    useEffect(() =>{
        Categories();
        window.document.dir = i18next.dir();
        if (lng === "ar") {
          setIsArabic(true);
        }
    },[lng])
  return (
    <AppContext.Provider value={{ cat, menu, setMenu, meal, Category,t,lng}}>
    <div className={`App ${isArabic ? "arFont" : ""}`}>
    <Header/>
    
    <Router>
      <Routes>      
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menue/>}/>
         </Routes>
    </Router>

    <Footer/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
