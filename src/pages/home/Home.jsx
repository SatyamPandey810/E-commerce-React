import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/section/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCart from '../../components/productcart/ProductCart';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';


export default function Home() {



    return (
        <Layout>
            <HeroSection />
            <Filter />
            <ProductCart />
            <Track/>
            <Testimonial/>
        </Layout>
    );
}


