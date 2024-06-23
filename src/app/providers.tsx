'use client';
import React from 'react';
import {ThemeProvider} from "@/app/themeProvider";
import {Toaster} from "@/components/ui/toaster";


const Providers = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <Toaster />
            <ThemeProvider attribute={'class'} defaultTheme={'system'} enableSystem disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </>
    );
};

export default Providers;