// import shopImg from './../images/shop-img.jpg';
import shopImg from './../images/shop-img.jpg'


function Partie1 (){
    return(
        <section className="shop_section layout_padding">
            <div className="container">
            <div className="box">
                <div className="detail-box">
                <h2>
                    Fruit shop
                </h2>
                <p>
                    There are many variations of passages of Lorem Ipsum available
                </p>
                </div>
                <div className="img-box">
                <img src={shopImg} alt=""/>
                </div>
                <div className="btn-box">
                <a href="m,,b">
                    Buy Now
                </a>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Partie1;