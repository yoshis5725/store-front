import React from 'react';
import {Input} from "@/components/ui/input";

const NavSearch = () => {
    return (
        <Input type={'search'} placeholder={'Search product...'} className={'max-w-xs dark:bg-muted'}></Input>
    );
};

export default NavSearch;