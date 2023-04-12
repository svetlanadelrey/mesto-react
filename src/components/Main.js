import React from 'react';
import api from '../utils/Api.js';
import { Card } from './Card.js';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
      api.getCurrentUser()
      .then((user) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch(err => console.log(err));

      api.getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch(err => console.log(err));
    }, []);

    return (
        <main>
        <section className="profile">
          <div className="avatar profile__avatar">
            <button 
              className="avatar__button" 
              onClick={props.onEditAvatar} />
            <img
              className="avatar__image"
              src={userAvatar}
              alt="Жак-Ив Кусто"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__button-edit"
              type="button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile}
            />
            <p className="profile__paragraph">{userDescription}</p>
          </div>
          <button
            className="profile__button-add"
            type="button"
            aria-label="Добавить фото"
            onClick={props.onPlaceAdd}
          />
        </section>
        <section className="gallery" aria-label="Фотогалерея">
          <ul className="gallery__list">
            {cards.map((card) => 
              <Card
                key={card._id}
                card={card}
                onClick={props.onCardClick}
              />
            )}
          </ul>
        </section>
      </main>
    );
}

export { Main };