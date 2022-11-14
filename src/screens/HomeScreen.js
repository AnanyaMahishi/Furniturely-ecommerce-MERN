import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

const data = [
  {
   image: require('./c1.jpg'), 
   caption:"Caption",
   description:"Description Here"
  },
  {
    image:require('./c2.jpg'), 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image:require('./c3.jpg'), 
    caption:"Caption",
    description:"Description Here"
   } 
]

function HomeScreen() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>

    <Link to="/livingroom">Living Room</Link><br/>
    <Link to="/bedroom">Bed Room</Link><br/>
    <Link to="/kitchen">Kitchen</Link><br/>

    </div>
  );
}
export default HomeScreen;