import { Link, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from "react"; 
import axios from 'axios';

function BedRoom() {
  
  const navigate = useNavigate();
    const [bed_products, set_bed_Products] = useState(false);
    console.log(bed_products)
    useEffect(() => {
      let isMounted=true
      const fetchData = async () => {
        const result = await axios.get('/api/products/bedroom'); //ajax request
        console.log("this is response:", result,"this is result data:", result.data)
        if(isMounted)
          set_bed_Products(result.data);
      };
      if(!bed_products)
        fetchData();

    });

    if(bed_products){
      console.log("test")

  
  const  BuyNow = async(e)=>{
    e.preventDefault()
   
    navigate('/login?redirect=/checkout');
  };
      return(
        <div>
      <main>
        <h2>BedRoom</h2>
        <div className="products" id="products">
          {bed_products.map((product) => (
            <div  className="product"  id="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}> 
                <img src={"http://localhost:5000"+product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <div className="prod-heading"> 
                <Link to={`/product/${product.slug}`}  id="prod-heading"class="link-dark text-decoration-none">
                  <p>{product.name}</p>
                </Link>
                </div>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button onClick={BuyNow} class="btn btn-dark btn-lg rounded-pill">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    )
  
    }
}
export default BedRoom ;