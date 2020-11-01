import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();

    return (
            <nav className="header">
                <Link to="/">
                    <img className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt="img_logo" />
                </Link>
                <div className="header__search">
                    <input className="header__searchInput" type="text" value="" />
                    <SearchIcon className="header__searchIcon" />
                </div>
            
                <div className="header__nav">
                    <Link to="/login" className="header__link">
                        <div className="header__option">
                            <span className="header_optionLineOne">Hello, Kornel</span>
                            <span className="header__optionLineTwo">Sign In</span>
                        </div>
                    </Link>

                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header_optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>

                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header_optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>
                    </Link>

                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className="header__optionLineTwo header__basketCount">
                                {basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </nav>


    );
}

export default Header;