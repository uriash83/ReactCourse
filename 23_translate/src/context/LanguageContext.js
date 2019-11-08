import React from 'react'

const Context =  React.createContext('polish')

console.log(Context)
//export default React.createContext('polish') to jest default value


export class LanguageStore extends React.Component{
    state = {language: 'english'}

    onLanguageChange = (language) => {
        this.setState({language})
    }

    render(){

        return(
        <Context.Provider value={{...this.state, onLanguageChange}}>
            {this.props.children}
        </Context.Provider>    
);
    }
}

export default Context;