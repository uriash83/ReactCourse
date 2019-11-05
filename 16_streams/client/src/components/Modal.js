import React from 'react'
import ReactDOM from 'react-dom'


const Modal = props => {
    return ReactDOM.createPortal(
        <div
            onClick={props.onDismiss}//po to jak ktoś kliknie poza modal żeby wróciło do poredniej strony 
            className="ui dimmer modals visible active">
            <div 
                onClick={(e)=>e.stopPropagation()} // jak ktoś kliknie na modal a niema obsługi onClick to bierze go z parent
                // stopPropagation zapobiega temu
                className="ui standart modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;