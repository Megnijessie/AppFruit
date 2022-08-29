import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function OurFruit (){

    const [fruits, setFruits]= useState([]);
    const params=useParams();
    
    useEffect(()=>{
            axios.get('https://fakestoreapi.com/products/category/'+params.categorie, {
                mode: 'cors', method:'GET'
            }).then(cat=>{setFruits(cat.data)})
        })


    return(
        <div>
            <Header/>
                <section class="fruit_section layout_padding">
                    <div class="container">
                        <div class="heading_container">
                            <hr/>
                            <h2>Fresh Fruit</h2>
                        </div>
                    </div>
                   { fruits.map((fruit,index)=>(
                        <div class="container-fluid" key={index}>
                        <div class="fruit_container">
                            <div class="box">
                                <img src={fruit.image} alt=""/>
                                <div class="link_box">
                                    <h5>{fruit.title}</h5>
                                    <span>Description:  {fruit.description}</span>
                                    <span>Prix: {fruit.price}</span>
                                    <span>Avis: {fruit.rating?fruit.rating.count:""}</span>
                                    <a href="d">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                   
                </section>
            <Footer/>
        </div>
    );
}

export default OurFruit;