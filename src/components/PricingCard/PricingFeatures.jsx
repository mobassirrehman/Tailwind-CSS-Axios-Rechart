import React from 'react';
import { CheckCheck } from 'lucide-react';

const PricingFeatures = ({features}) => {
    return (
     <p className='flex'> <CheckCheck className='mr-2' />{features}</p>
    );
};

export default PricingFeatures;