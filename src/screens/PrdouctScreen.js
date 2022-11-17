import { useParams } from "react-router-dom";

//Getting slug and showing in url
function ProductScreen(){
    const params=useParams(); //returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> 
    const {slug}=params;
    return <div>
        <h1>{slug}</h1>
    </div>

}
export default ProductScreen;