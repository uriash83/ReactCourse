import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component{


    /*
    renderInput({input}){        
        return <input {...input}/>
    }

    ===
    renderInput(formProps){
        return <input {...formProps.input}/>
    }

    */
    

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.createStream(formValues)// to jest jest w state ale jest do tego dostęp
    }
    render(){
        //etykieta label w Field reduxform nie wie co z nia zrobić więc ja przekazuje do this.renderInput
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>


        )    
    }
}



export default connect(null,{ createStream })(StreamCreate)