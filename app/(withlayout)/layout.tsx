import React from 'react';
import ResponsiveAppBar from '../components/NavItems';
import Footer from '../components/Footer';

const layout = ({children}) => {
    return (
        <div>
               <ResponsiveAppBar></ResponsiveAppBar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;