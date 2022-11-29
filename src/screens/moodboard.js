import "./moodboard.css"

function Moodboard() {

    return(
        <div>
           
            <div  class="d-flex justify-content-between">
                <div class="container">
                <h2>Moodboard</h2>
                <div class="row mx-md-n5">
                    <div class="col md-2">
                        <img id="mbimg" src={require("./images/aesthetics/abstract.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                        <img id="mbimg" src={require("./images/aesthetics/african.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                        <img id="mbimg" src={require("./images/aesthetics/american-colonial.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                    <img  id="mbimg" src={require("./images/aesthetics/amish.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                    <img id="mbimg" src={require("./images/aesthetics/arabian.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                    <img id="mbimg" src={require("./images/aesthetics/art-deco.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                    <img id="mbimg" src={require("./images/aesthetics/art-moderne.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                       <img id="mbimg" src={require("./images/aesthetics/art-nouveau.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                    <img  id="mbimg" src={require("./images/aesthetics/artisan.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                    <img  id="mbimg" src={require("./images/aesthetics/asian.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                    <img  id="mbimg"src={require("./images/aesthetics/baroque.jpg")} alt="img"/>
                    </div>
                    <div class="col md-2">
                    <img  id="mbimg"src={require("./images/aesthetics/bohemian.jpg")} alt="img"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Moodboard