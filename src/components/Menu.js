import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


function Menu(){
    
    // const [categorie,setCategorie]=useState({});
    // const params=useParams();
    // useEffect(()=>{
    //     axios.get('https://fakestoreapi.com/products/category/'+params.id, {
    //         mode: 'cors', method:'GET'
    //     }).then(cat=>{setCategorie(cat.data)})
    // })

     const [categorie,setCategorie]=useState([]);
    useEffect(()=>{
        axios('https://fakestoreapi.com/products/categories' , {
            method: 'GET', mode:'cors'
        }).then(cat=>{setCategorie(cat.data)
        })
    })


    return(
        <section className="nav_section">
            <div className="container">
                <div className="custom_nav2">
                    <nav className="navbar navbar-expand custom_nav-container ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex  flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                    {
                                        categorie.map((cate, index) =>(
                                            <li className="nav-item " key={index}>
                                                <Link className="nav-link active" to={"/menu/" + cate}>{ cate}</Link>
                                            </li>
                                        ))
                                    }
                                    
                                </ul>
                                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Menu;