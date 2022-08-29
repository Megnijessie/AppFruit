import SliderImg from './../images/slider-img.jpg';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header () {

    // const [categories,setCategories]=useState([]);
    // useEffect(()=>{
    //     axios('https://fakestoreapi.com/products/categories' , {
    //         method: 'GET', mode:'cors'
    //     }).then(cat=>{setCategories(cat.data)
    //     console.log(cat.data)})
    // })

    return(
            <div className="hero_area">
                {/* <!-- header section strats --> */}
                <div className="brand_box">
                    <a className="navbar-brand" href="index.html">
                        <span>
                            Ninom
                        </span>
                    </a>
                </div>
                {/* <!-- end header section --> */}
                {/* <!-- slider section --> */}
                <section className=" slider_section position-relative">
                    <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-box">
                                    <img src={SliderImg} alt=""/>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src={SliderImg} alt=""/>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-box">
                                    <img src={SliderImg} alt=""/>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="sr-only"></span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="sr-only"></span>
                        </a>
                    </div>
                </section>
                {/* <!-- end slider section --> */}
                {/* Menu section */}
                <Menu />
            </div>
    );
}

export default Header;
