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
export const fetchAllProducts = async () => {
    const products = await db.product.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return products;
};