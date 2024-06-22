import React from 'react';
import {FaStar} from "react-icons/fa";

const ProductRatingComponent = ({productId}: { productId: string }) => {
    // ************ temp: delete this block of code ************
    const rating = 4.2;
    const count = 100;

    const className = `flex gap-1 items-center text-md mt-1 mb-4`;
    const countValue = `(${count}) reviews`;

    return (
        <span className={className}>
            <FaStar className={'w-3 h-3'}/>
            {rating} {countValue}
        </span>
    );
};

export default ProductRatingComponent;