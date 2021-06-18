import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from '../Footer';
import girl from '../../images/girl.jpg';
import ugg from '../../images/ugg.jpg'
import front1 from '../../images/front1.jpg'
import front2 from '../../images/front2.jpg'
import card from '../../images/card.jpg'
import one from '../../images/1.JPG'
import two from '../../images/2.JPG'
import three from '../../images/3.JPG'


class ImageGalleryComponent extends React.Component {
    render() {
        return (
            <div  >
                
                <Carousel  autoPlay interval="3000" transitionTime="1000">
                    <div>
                        <img src={front1} alt = "ERROR" />
                        
                    </div>
                    <div>
                        <img src={girl} alt = "ERROR" />
                    
                    </div>
                    <div>
                        <img src={ugg} alt = "ERROR"/>
                    
                    </div>
                    <div>
                        <img src={front2} alt = "ERROR" />
                       
                    </div>
                    <div>
                        <img src={card} alt = "ERROR" />
               
                    </div>
                    <div>
                        <img src={one} alt = "ERROR" />
               
                    </div>
                    <div>
                        <img src={two} alt = "ERROR" />
               
                    </div>
                    <div>
                        <img src={three} alt = "ERROR" />
               
                    </div>
                </Carousel>
                <Footer/>
            </div>
        )
    };
}

export default ImageGalleryComponent;