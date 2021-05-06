import React from 'react';
import './styles.scss';
import banner1 from '../../assets/homeBanner/Banner1.png'
import banner2 from '../../assets/homeBanner/banner2.png'
import banner3 from '../../assets/homeBanner/banner3.png'
import SlideShow from '../slideShow';



const Slider = () => {
    return (
        <div className="bannerSlider">
            <div className="slide">
                <SlideShow>
                    <img src={banner2} alt="50% discount" className="mySlides" />
                    <img src={banner3} alt="50% discount" className="mySlides" />
                    <img src={banner1} alt="50% discount" className="mySlides" />
                </SlideShow>
            </div>
        </div>
    );
};



export default Slider;