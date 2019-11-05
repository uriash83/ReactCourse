import React from 'react'
import { Field , reduxForm } from 'redux-form'


class StreamForm extends React.Component{


    /*
    renderInput({input}){        
        return <input {...input}/>
    }

    ===
    renderInput(formProps){
        return <input {...formProps.input}/>
    }

    */
    renderError ({ error, touched}) {
        if(touched && error){
            return(
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        //console.log(formProps.meta)
        //return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
        //to samo jak 
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete='off'/>
                {this.renderError(formProps.meta)}
                
            </div>
            
        )
    }

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.onSubmit(formValues)// to jest jest w state ale jest do tego dostęp
    }
    render(){
        //etykieta label w Field reduxform nie wie co z nia zrobić więc ja przekazuje do this.renderInput
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                
                <Field name="Title" component={this.renderInput} label="Enter Title"/>
                <Field name="Description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>

        )    
    }
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.Title){
        errors.Title = 'You must enter the title'
    }
    if(!formValues.Description){
        errors.Description = 'You must enter the description'
    }
    return errors;
}
export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

