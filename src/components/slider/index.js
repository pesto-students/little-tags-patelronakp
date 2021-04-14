import React from 'react';
import './styles.scss';
import vectorCollection from '../../assets/images/vector-collections.svg';

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
            <img src={img} alt={title} />
            <img src={vectorCollection} alt="test" />
        </div>
    ));


    return (
        <div className="bannerSlider">
            {sliderContent}
        </div>
    );
};



export default Slider;