import React from 'react';
import LanguageContext from '../context/LanguageContext'


class Field extends React.Component {
    static contextType = LanguageContext; // must be contextType

    render() {
        const text = this.context === 'polish' ? 'Imię' : 'Name'
        return(
            <div className="ui field">
                <label>{text}</label>
                <input/>
            </div>
        )
    }
}

export default Field