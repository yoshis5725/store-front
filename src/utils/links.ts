type NavLink = {
    label: string
    href: string
}


export const links: NavLink[] = [
    {label: 'home', href: '/'},
    {label: 'shop', href: '/shop'},
    {label: 'about', href: '/about'},
    {label: 'products', href: '/products'},
    {label: 'favorites', href: '/favorites'},
    {label: 'cart', href: '/cart'},
    {label: 'orders', href: '/orders'},
    {label: 'dashboard', href: '/admin/sales'},
]

export const adminLinks: NavLink[] = [
    {label: 'sales', href: '/admin/sales'},
    {label: 'my products', href: '/admin/products'},
    {label: 'create product', href: '/admin/products/create'},
]