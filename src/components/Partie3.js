import { Link } from "react-router-dom";

function Partie3 ({produits}){
    
	
    return(
        <section className="fruit_section layout_padding">
			<div className="container">
				<div className="heading_container">
					<hr/>
					<h2>
						Fresh Fruit
					</h2>
				</div>
			</div>
			<div className="container-fluid">
		
				<div className="fruit_container">
					{
					produits.filter((p,index)=> index%2===0).map((p,index)=>(

						<div className="box"  key={index}>
							<img src={p.image} alt="" width='445' height='383'/>
							<div className="link_box">
								<h5>{p.title}</h5>
								<Link to={"/produit/"+p.id}>More</Link>
							</div>
						</div>
					))
					}
				</div>
			</div>
  		</section>
    );
}

export default Partie3;