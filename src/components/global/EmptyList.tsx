import React from 'react';
import {cn} from "@/lib/utils";

const EmptyList = ({heading = 'No items found', className}: { heading?: string, className?: string }) => {
    return (
        <div>
            <h2 className={cn('text-xl', className)}>{heading}</h2>
        </div>
    );
};

export default EmptyList;