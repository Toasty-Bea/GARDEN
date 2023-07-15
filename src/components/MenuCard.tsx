import React from 'react';

function MenuCard({ image, name, description, onCardClick }: { image: string; name: string; description: string; onCardClick: () => void;  }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{description} </p>
            <button onClick={onCardClick} className="cardButton">
            </button>
        
        </div>
    );
};

export default MenuCard;