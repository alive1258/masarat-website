import React from 'react';
import ProductHead from './Products/ProductHead';
import DegitalService from './Products/DegitalService';
import TeamDo from './Products/TeamDo';
import AskedQuestion from './Products/AskedQuestion';
import ContactHome from '../../Pages/Home/ContactHome/ContactHome';

const ProductService = () => {
    return (
        <div>
           <ProductHead></ProductHead>
           <DegitalService></DegitalService>
           <TeamDo></TeamDo>
           <AskedQuestion></AskedQuestion>
           <ContactHome></ContactHome>
        </div>
    );
};

export default ProductService;