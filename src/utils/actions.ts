import db from "@/utils/db";


//
// Getting all products from the database where the featured field is true.
//
export const fetchFeaturedProducts = async () => {
    const products = await db.product.findMany({
        where: {
            featured: true
        }
    });

    return products;
};


//
// Getting all products from the database. Will display the products in descending order of creation.
//
export const fetchAllProducts = async ({search = ''} : {search: string}) => {
    const products = await db.product.findMany({
        where: {
            OR: [
                { name: {contains: search, mode: 'insensitive'} },
                { company: {contains: search, mode: 'insensitive'} }
            ]
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return products;
};