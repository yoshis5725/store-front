import React from 'react';
import {formatCurrency} from "@/utils/format";
import {fetchProductById} from "@/utils/actions";
import BreadCrumbsComponent from "@/components/single-product/BreadCrumbs.Component";
import Image from "next/image";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import ProductRatingComponent from "@/components/single-product/ProductRating.Component";
import AddToCartComponent from "@/components/single-product/AddToCart.Component";

const SingleProductPage = async ({params}: { params: { id: string } }) => {
    const product = await fetchProductById(params.id);
    const {name, image, company, description, price} = product;
    const dollarsAmount = formatCurrency(price)

    return (
        <section>
            <BreadCrumbsComponent name={product.name}/>
            <div className={'mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'}>

                {/*Product Image*/}
                <div className={'relative h-full'}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes={'(max-width:768px), 100vw, (max-width:1200px) 50vw, 33vw'}
                        priority
                        className={'w-full rounded object-cover'}
                    />
                </div>

                {/*Product Info*/}
                <div>
                    <div className={'flex gap-x-8 items-center'}>
                        <h1 className={'capitalize text-3xl font-bold'}>{name}</h1>
                        <FavoriteToggleButton productId={params.id}/>
                    </div>
                        <ProductRatingComponent productId={params.id}/>
                        <h4 className={'text-xl mt-2'}></h4>
                        <p className={'mt-3 text-md bg-muted inline-block p-2'}>{dollarsAmount}</p>
                        <p className={'mt-6 leading-8 text-muted-foreground'}>{description}</p>
                        <AddToCartComponent productId={params.id}/>
                </div>
            </div>
        </section>
    );
};

export default SingleProductPage;