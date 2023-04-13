function Card({card, onClick}) {
    const handleCardClick = () => {
        onClick(card);
    }
    return (
        <li className="gallery__item">
            <img className="gallery__image" src={card.link} alt={card.name} onClick={handleCardClick}/>
            <button className="gallery__button-delete" type="button" aria-label="Удалить"></button>
            <div className="gallery__wrapper">
                <h2 className="gallery__title">{card.name}</h2>
                <div className="gallery__like-wrapper">
                    <button className="gallery__button-like" type="button" aria-label="Нравится"></button>
                    <span className="gallery__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export { Card };