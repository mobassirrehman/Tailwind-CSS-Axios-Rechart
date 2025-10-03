import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({price}) => {
    // console.log(price);
    const {name, price: priceValue, ideal_for, features } = price;
    return (
        <div className='border bg-cyan-600 rounded-md p-6 flex flex-col'>
          <div>
          <h2 className="text-6xl">{name}</h2>
          <h4 className="text-3xl">{priceValue}</h4>
          </div>
          <div className='bg-cyan-700 rounded-sm p-6 flex-1'>
            <p>{ideal_for}</p>
           { 
            features.map((features, index) => <PricingFeatures 
            key={index} 
            features={features}></PricingFeatures>)
           }
          </div>
          <button className='btn w-full'>Subscribe</button>
        </div>
       
    );
};

export default PricingCard;