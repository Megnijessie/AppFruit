import insta from "./../images/instagram.png";
import location from "./../images/location.png";
import call from "./../images/call.png";
import mail from "./../images/mail.png";
import facebook from "./../images/facebook-logo-button.png";
import twitter from "./../images/twitter-logo-button.png";
import linkedin from "./../images/linkedin.png";

function Footer () {
    return(
        <div>
            <section className="info_section layout_padding">
                <div className="container">
                <div className="info_logo">
                    <h2>
                    NiNom
                    </h2>
                </div>
                <div className="info_contact">
                    <div className="row">
                    <div className="col-md-4">
                        <a href="">
                        <img src={location} alt=""/>
                        <span>
                            Passages of Lorem Ipsum available
                        </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="">
                        <img src={call} alt=""/>
                        <span>
                            Call : +012334567890
                        </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="">
                        <img src={mail} alt=""/>
                        <span>
                            demo@gmail.com
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-lg-9">
                    <div className="info_form">
                        <form action="">
                        <input type="text" placeholder="Enter your email"/>
                        <button>
                            subscribe
                        </button>
                        </form>
                    </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                    <div className="info_social">
                        <div>
                        <a href="">
                            <img src={facebook} alt=""/>
                        </a>
                        </div>
                        <div>
                        <a href="">
                            <img src={twitter} alt=""/>
                        </a>
                        </div>
                        <div>
                        <a href="">
                            <img src={linkedin} alt=""/>
                        </a>
                        </div>
                        <div>
                        <a href="">
                            <img src={insta} alt=""/>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>

                </div>
            </section>
        </div>
    );
}

export default Footer;