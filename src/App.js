import './assets/style.css';
import './assets/responsive.css';
import './assets/style.css.map';
import Header from "./components/Header";
import Partie1 from './components/Partie1';
import Partie2 from './components/Partie2';
import Partie3 from './components/Partie3';
import Partie4 from './components/Partie4';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';

function App (){
    const [produits, setProduits]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products',{
            method: 'GET', mode: 'cors' 
        }).then(a=> {
            a.json().then(data=>{
                setProduits(data)
            })
        })
    })

    
    return(
        <div>
            <Header/>
            <Partie1/>
            <Partie2/>
            <Partie3 produits={produits}/>
            <Partie4/>
            <Footer/>
        </div>
    );
}


export default App;