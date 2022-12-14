import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({ card }) => {

    const { brand, image } = card;

    return (
        <Link to={`/singlebrand/${brand}`}>
            <div className="card w-58 bg-white shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl">{brand}</h2>
                    {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">Check Now</button>
                </div> */}
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;