function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" method="get" name={props.name} id="edit-form" noValidate="">
                    {props.children}
                    <button className="popup__button-save" type="submit">{props.buttonText}</button>
                </form>
                <button className="popup__button-close" onClick={props.onClose} type="button" aria-label="Закрыть"/>
            </div>
    </div>
    );
}
 export { PopupWithForm };