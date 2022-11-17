import { Link } from 'react-router-dom';
import data from './data_livingroom';

function LivingRoom() {
    return(
        <div>
      <main>
        <h2>Living Room</h2>
        <div className="products" id="products">
          {data.products.map((product) => (
            <div  className="product"  id="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}> 
                <img src={product.image} alt={product.name} />
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
                <button  class="btn btn-dark btn-lg rounded-pill">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    )
}
export default LivingRoom ;