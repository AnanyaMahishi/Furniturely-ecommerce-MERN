import { Link, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from "react"; 
import axios from 'axios';

function Dining() {
  const navigate = useNavigate();
  const [dining_products, set_dining_Products] = useState(false);
  console.log(dining_products)
  useEffect(() => {
    let isMounted=true
    const fetchData = async () => {
      const result = await axios.get('/api/products/diningroom'); //ajax request
      console.log("this is response:", result,"this is result data:", result.data)
      if(isMounted)
        set_dining_Products(result.data);
    };
    if(!dining_products)
      fetchData();

  });

  if(dining_products){
    console.log("test")

    

  
    const  BuyNow = async(e)=>{
      e.preventDefault()
     
      navigate('/login?redirect=/checkout');
    };
    return(
      <div>
    <main>
      <h2>Dining Room</h2>
      <div className="products" id="products">
        {dining_products.map((product) => (
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
              <button onClick={BuyNow} class="btn btn-dark btn-lg rounded-pill">Buy now</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
  )

  }
}
export default Dining ;