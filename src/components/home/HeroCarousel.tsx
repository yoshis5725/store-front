import React from 'react';
import hero1 from '/public/images/hero1.jpg';
import hero2 from '/public/images/hero2.jpg';
import hero3 from '/public/images/hero3.jpg';
import hero4 from '/public/images/hero4.jpg';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

const carouselItems = [hero1, hero2, hero3, hero4];

const HeroCarousel = () => {
    return (
        <div className={'hidden lg:block'}>
            <Carousel>
                <CarouselContent>
                    {
                        carouselItems.map((item, index) => {
                            return (
                                <CarouselItem key={index}>
                                    <Card>
                                        <CardContent className={'p2'}>
                                            <Image src={item} alt={'hero'} className={'w-full h-[24rem] rounded-md object-cover'} />
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            )}
                        )
                    }
                </CarouselContent>
                <CarouselPrevious></CarouselPrevious>
                <CarouselNext></CarouselNext>
            </Carousel>
        </div>
    );
};

export default HeroCarousel;