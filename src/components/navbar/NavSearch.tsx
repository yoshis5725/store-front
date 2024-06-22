'use client';

import {useRouter, useSearchParams} from "next/navigation";
import React, {useEffect, useState, ChangeEvent, FC} from 'react';
import {Input} from "@/components/ui/input";
import {useDebouncedCallback} from "use-debounce";

const NavSearch: FC = () => {
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    // server side: grabbing the value of the search query from the URL
    const [search, setSearch] = useState<string>(searchParams.get('search')?.toString() || '');


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        handleSearch(value);
    }

    // creating a delay for the search
    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }
        replace(`/products?${params.toString()}`);
    }, 300);

    // clearing the search bar if the search query is empty
    useEffect(() => {
        if (!searchParams.get('search')) {
            setSearch('');
        }
    }, [searchParams.get('search')]);


    // ************************** JSX **************************

    return (
        <Input
            type={'search'}
            placeholder={'Search product...'}
            className={'max-w-xs dark:bg-muted'}
            value={search}
            onChange={handleChange}
        />
    );
};

export default NavSearch;