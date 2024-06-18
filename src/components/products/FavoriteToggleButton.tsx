import React from 'react';
import {Button} from "@/components/ui/button";
import {FaHeart} from "react-icons/fa";

const FavoriteToggleButton = ({productId} : {productId : string}) => {
    return (
        <Button size={'icon'} variant={'outline'} className={'p-2 cursor-pointer'}>
            <FaHeart />
        </Button>
    );
};

export default FavoriteToggleButton;