import React from 'react'

class LanguageSelector extends React.Component {

    render(){


        return(
        <div>
              Select a language:
              <i 
                className="flag us" 
                onClick={()=>this.props.onLanguageChange('english')}
              />
              <i 
                className="flag pl" 
                onClick={()=>this.props.onLanguageChange('polish')}
              />
          </div>
        )
    }
}

export default LanguageSelector;