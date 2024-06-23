'use client'

import React from 'react';
import {usePathname} from "next/navigation";
import {adminLinks} from "@/utils/links";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Sidebar = () => {
    const path = usePathname();
    return (
        <aside>
            {
                adminLinks.map(link => {
                    const isActive = path === link.href;
                    const variant = isActive ? 'default' : 'ghost';
                    return (
                        <Button
                            asChild
                            className={'w-full mb-2 capitalize font-normal'}
                            variant={variant}
                            key={link.href}
                        >
                            <Link href={link.href}>
                                {link.label}
                            </Link>
                        </Button>
                    )
                })
            }
        </aside>
    );
};

export default Sidebar;