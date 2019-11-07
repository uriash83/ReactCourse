import React from 'react';
import LanguageContext from '../context/LanguageContext'
import ColorContext from '../context/ColorContex'


class Button extends React.Component {
    // to static contextType = LanguageContext; // must be contextType
    renderSubmit(value){
        return value === 'polish' ? 'Zatwierdź' : 'Submit'
    }
    render() {
        // to const text = this.context === 'polish' ? 'Zatwierdź' : 'Submit'
        return(
            <ColorContext.Consumer>
                {(color)=> 
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value )=> this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>
                }
                
            </ColorContext.Consumer>
                
        )
    }button 
}

export default Button