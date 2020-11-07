import React from 'react'
import "./Home.scss";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
            <img className="home__image"
             src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"  alt="" />
            
            <div className="home__row">
                <Product id={12384456}
                    title="the lean Startup"
                    price={15.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41kJd3jCl-L._AC_US240_FMwebp_QL65_.jpg"/>

                <Product id={12342484856}
                    title="the lean Startup"
                    price={10.96}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41kJd3jCl-L._AC_US240_FMwebp_QL65_.jpg"/>
                <Product id={448523456}
                    title="the lean Startup"
                    price={16.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41kJd3jCl-L._AC_US240_FMwebp_QL65_.jpg"/>
            
            </div>

            <div className="home__row">
                <Product id={456545454}
                    title="the lean Startup"
                    price={9.96}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/41kJd3jCl-L._AC_US240_FMwebp_QL65_.jpg"/>
                </div>
            </div>    
        </div>
    )
}

export default Home
