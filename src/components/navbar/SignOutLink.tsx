'use client';
import React from 'react';
import {useToast} from "@/components/ui/use-toast";
import {SignOutButton} from "@clerk/nextjs";
import Link from "next/link";

const SignOutLink = () => {
    const {toast} = useToast();

    const handleLogout = () => {
        toast({description: 'Logout Successful'})
    }

    return (
        <SignOutButton>
            <Link href={'/'} className={'w-full text-left'} onClick={handleLogout}>Logout</Link>
        </SignOutButton>
    );
};

export default SignOutLink;