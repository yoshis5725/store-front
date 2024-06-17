'use client';
import {ThemeProvider} from "@/app/themeProvider";

import React from 'react';

const Providers = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <ThemeProvider attribute={'class'} defaultTheme={'system'} enableSystem disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </>
    );
};

export default Providers;