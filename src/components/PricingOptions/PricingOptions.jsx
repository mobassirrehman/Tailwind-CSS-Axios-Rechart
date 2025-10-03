import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    console.log(pricingData);

    return (
        <div>
             <h3 className='text-4xl'>Be the Member of our Community</h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* {
             pricingData.map(price => <PricingCard
                 key={price.id} 
                 price={price}></PricingCard>)
          } */}

         {
             pricingData.map(pricing => <DaisyPricing 
                key={pricingData.id}
                pricing={pricing}></DaisyPricing>)
         }
          </div>
        </div>
    );
};

export default PricingOptions;