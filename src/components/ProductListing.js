import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import PlantItem from './PlantItem';

// Actualiza las rutas de las imágenes para usar desde la raíz del servidor
const plants = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 29.99, image: '/assets/images/plant1.jpg' },
    { id: 2, name: 'Snake Plant', price: 19.99, image: '/assets/images/plant2.jpg' },
    { id: 3, name: 'Peace Lily', price: 24.99, image: '/assets/images/plant3.jpg' },
    { id: 4, name: 'Succulent', price: 9.99, image: '/assets/images/plant4.jpg' },
    { id: 5, name: 'Aloe Vera', price: 14.99, image: '/assets/images/plant5.jpg' },
    { id: 6, name: 'Monstera', price: 34.99, image: '/assets/images/plant6.jpg' },
];

const ProductListing = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (plant) => {
        dispatch(addToCart(plant));
    };

    return (
        <div>
            <h2 className='title'>Our Houseplants</h2>
            <div className="product-listing">
                {plants.map((plant) => (
                    <PlantItem key={plant.id} plant={plant} onAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
