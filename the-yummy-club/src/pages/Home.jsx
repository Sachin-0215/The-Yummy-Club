import React from 'react';
import NavBar from '../components/NavBar';
import CategoryMenu from '../components/CategoryMenu';
import FoodItems from '../components/FoodItems';
import Cart from '../components/Cart';

const Home = () => {
    return (
        <div>
            <NavBar />
            <CategoryMenu />
            <FoodItems />
            <Cart/>
        </div>
    );
}

export default Home;
