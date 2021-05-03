import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from '../constants/Routes';
import Home from '../components/screens/homeScreen';
import Cart from '../components/screens/Cart';
import Checkout from '../components/screens/checkout';
import ProductDetail from '../components/screens/productDetail';
import Categories from '../components/screens/categories';
import ScrollToTop from '../components/scrollToTop';
import SearchResults from '../components/screens/categories/searchResults';

const Router = () => {
    return (
        <ScrollToTop>
            <Switch>
                <Route path={ROUTES.HOME} exact>
                    <Home />
                </Route>
                <Route path={ROUTES.SEARCH_RESULTS}>
                    <SearchResults />
                </Route>
                <Route path={ROUTES.CART_PAGE}>
                    <Cart />
                </Route>
                <Route path={ROUTES.CHECKOUT_PAGE}>
                    <Checkout />
                </Route>
                <Route path={ROUTES.PRODUCT_DETAIL} >
                    <ProductDetail />
                </Route>
                <Route path={ROUTES.PRODUCT_CATEGORY}>
                    <Categories />
                </Route>                
            </Switch>
        </ScrollToTop>
    );
}

export default Router;