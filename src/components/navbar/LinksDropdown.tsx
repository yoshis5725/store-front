import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";
import {LuAlignLeft} from "react-icons/lu";
import {links} from "@/utils/links";
import Link from "next/link";


const LinksDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} className={'flex gap-4 max-w-[100px]'}>
                    <LuAlignLeft className={'w-6 h-6'}/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={'w-48'} align={'start'} sideOffset={5}>
                {
                    links.map(link => {
                        return (
                            <DropdownMenuItem key={link.href}>
                                <Link href={link.href} className={'capitalize w-full'}>{link.label}</Link>
                            </DropdownMenuItem>
                        )
                    })
                }
            </DropdownMenuContent>
        </DropdownMenu>

    );
};

export default LinksDropdown;