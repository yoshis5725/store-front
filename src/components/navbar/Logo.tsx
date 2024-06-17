import React from 'react';
import {VscVscodeInsiders} from "react-icons/vsc";
import {Button} from "@/components/ui/button";
import Link from "next/link";


const Logo = () => {
    return (
        <Button size={'icon'} asChild>
            <Link href={'/'}>
                <VscVscodeInsiders className={'w-6 h-6'}/>
            </Link>
        </Button>
    );
};

export default Logo;