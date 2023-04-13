import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }
  
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onPlaceAdd={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name={"popup_type_edit-profile"}
        title={"Редактировать профиль"}
        buttonText={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input 
          className="popup__input popup__input_type_name" 
          type="text" 
          name="name" 
          placeholder="Имя" 
          minLength={2} 
          maxLength={40} 
          required=""
        />
        <span className="input-error-name error"></span>
        <input 
          className="popup__input popup__input_type_job" 
          type="text" 
          name="job"
          placeholder="О себе"
          minLength={2}
          maxLength={200}
          required=""
        />
        <span className="input-error-job error"></span>
      </PopupWithForm>
      <PopupWithForm
        name={'popup_type_add-card'}
        title={'Новое место'}
        buttonText={'Создать'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_place"
          type="text"
          name="place"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="input-error-place error" />
        <input
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span className="input-error-link error" />
      </PopupWithForm>
      <PopupWithForm
        name={'popup_type_update-avatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="popup__input popup__input_type_link"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку"
          required=""
        />
        <span className="input-error-avatar error" />
      </PopupWithForm>
      <PopupWithForm
        name={'popup_type_confirm'}
        title={'Вы уверены?'}
        buttonText={'Да'}
        onClose={closeAllPopups}
      >
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
