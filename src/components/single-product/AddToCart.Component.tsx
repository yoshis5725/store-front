import React from 'react';
import {Button} from "@/components/ui/button";

const AddToCartComponent = ({productId} : {productId: string}) => {
    return (
        <Button className={'capitalize mt-8'} size={'lg'}>
            Add to Cart
        </Button>
    );
};

export default AddToCartComponent;