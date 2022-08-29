import { useEffect, useState } from "react";
// import f1 from "./../images/f-1.jpg";
import {useParams} from 'react-router-dom';

import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DetailProduit ({id}){

    const params = useParams();
    const [produit, setProduit]= useState({});
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/'+params.pk).then(response=>{
            setProduit(response.data)
        })
    })

    return(
        <div>
            <Header/>
            <section class="about_section layout_padding">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 px-0">
                            <div class="img-box">
                                <img src={produit.image} alt=''/>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="detail-box">
                                <div class="heading_container">
                                    <hr/>
                                    <h2>About Our Fruit Shop</h2>
                                    <br/>
                                    <span className="text-start fs-5"> Titre:{produit.title} </span>
                                    <span className="text-start fs-5"> Description:{produit.description} </span>
                                    <span className="text-start fs-5"> Categorie: {produit.category} </span>
                                    <span className="text-start fs-5"> prix: {produit.price} </span>
                                    <span className="text-start fs-5"> Avis: {produit.rating? produit.rating.count:''}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>

        </div>
    );
}

export default DetailProduit;