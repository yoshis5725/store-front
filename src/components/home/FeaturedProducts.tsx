import React from 'react';
import {fetchFeaturedProducts} from "@/utils/actions";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

const FeaturedProducts = async () => {
    const products = await fetchFeaturedProducts();
    if (!products) return <EmptyList />;

    return (
        <section className={'pt-24'}>
            <SectionTitle text={'featured products'} />
            <ProductsGrid products={products} />
        </section>
    );
};

export default FeaturedProducts;