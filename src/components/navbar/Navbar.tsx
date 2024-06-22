import React, {Suspense} from 'react';
import Container from "@/components/global/Container";
import Logo from "@/components/navbar/Logo";
import NavSearch from "@/components/navbar/NavSearch";
import CartButton from "@/components/navbar/CartButton";
import {ModeToggle} from "@/components/navbar/DarkMode";
import LinksDropdown from "@/components/navbar/LinksDropdown";

const Navbar = () => {
    return (
        <nav className={'border-b'}>
            <Container className={'flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center flex-wrap py-8'}>
                <Logo/>
                <Suspense>
                    <NavSearch/>
                </Suspense>
                <div className={'flex gap-4 items-center'}>
                    <CartButton/>
                    <ModeToggle/>
                    <LinksDropdown/>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;