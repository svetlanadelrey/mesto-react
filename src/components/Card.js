import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onClick}) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `gallery__button-like ${isLiked && 'gallery__button-like_active'}`
    );

    const handleCardClick = () => {
        onClick(card);
    }
    return (
        <li 
            className="gallery__item">
            <img 
                className="gallery__image" 
                src={card.link} 
                alt={card.name} 
                onClick={handleCardClick}
            />
            {isOwn && 
                <button 
                    className="gallery__button-delete" 
                    type="button" 
                    aria-label="Удалить"
                />
            }
            <div className="gallery__wrapper">
                <h2 className="gallery__title">{card.name}</h2>
                <div className="gallery__like-wrapper">
                    <button 
                        className={cardLikeButtonClassName} 
                        type="button" 
                        aria-label="Нравится"
                    />
                    <span className="gallery__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export { Card };