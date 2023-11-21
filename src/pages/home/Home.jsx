import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/section/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCart from '../../components/productcart/ProductCart';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';


export default function Home() {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart)
    console.log(cartItem);
    const addCart = () => {
        dispatch(addToCart('shirt'));
    }
    const deleteCart = () => {
        dispatch(deleteFromCart('shirt'));
    }

    return (
        <Layout>
            <HeroSection />
            <Filter />
            <ProductCart />
            <Track />
            <Testimonial />
        </Layout>
    );
}


