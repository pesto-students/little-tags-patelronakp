import React from 'react';
import './styles.scss';
import vectorCollection from '../../assets/images/vector-collections.svg';
import banner1 from '../../assets/homeBanner/Banner1.png'
import banner2 from '../../assets/homeBanner/banner2.png'
import banner3 from '../../assets/homeBanner/banner3.png'
import SlideShow from '../slideShow';

const sliders = [
    {
        id: 1,
        img: `https://picsum.photos/1040/800?random=${Math.random()}`,
        title: 'Meet New Fashion Week'
    },
    // {
    //     id: 2,
    //     img: `https://picsum.photos/1040/800?random=${Math.random()}`,
    //     title: 'Meet New Fashion Week'
    // },
];


const Slider = props => {

    const sliderContent = sliders.map(({ id, img, title }) => (
        <div key={id} className="slide">
            <img src={banner1} alt={title} />
            {/* <img src={vectorCollection} alt="test" /> */}
        </div>
    ));


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