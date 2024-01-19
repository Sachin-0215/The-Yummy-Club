import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';

const FoodItems = () => {
    const handleToast = (name) => toast.success(`Added ${name} to cart`);
    return (
        <>       
        <Toaster position="top-center" reverseOrder={false}/>
        <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
            {
            FoodData.map((food) => {
                return (
                    <FoodCard
                    key={food.id}
                    id={food.id}
                    name={food.name}
                    price={food.price}
                    descr={food.desc}
                    rating={food.rating}
                        img={food.img}
                        handleToast={handleToast}
                />
                );
            })}
            <FoodCard/>
        </div>
      </>
  )
}

export default FoodItems;
