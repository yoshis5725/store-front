import React from 'react';
import {Button} from "@/components/ui/button";


const HomePage = () => {
    return (
        <main>
            <h1 className={'text-3xl'}>Home Page</h1>
            <Button variant={'outline'} size={'lg'} className={'capitalize m-8'}>Click Me</Button>
        </main>
    );
};


export default HomePage;
