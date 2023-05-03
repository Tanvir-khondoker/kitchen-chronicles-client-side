/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/shared/Header/Header';
import Footer from '../components/shared/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Main;