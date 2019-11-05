import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux';
import {fetchStream,editStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.anything)
    }

    onSubmit = (formValues) => {
        //console.log(formValues)
        this.props.editStream(this.props.match.params.anything,formValues)
    }

    render(){
        //console.log(props)  - tylko w przypadku componentu
        // console.log(this.props) - w przypadku classy
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return(
            <div>
                <h3>Edit Stream</h3>
                <StreamForm 
                    //initialValues={{Title: 'EDIT ME', Description: 'Chaeg me'}}
                    //initialValues={this.props.stream}//tak nie może być bo wtedy do 
                    //state wchodzi wszystko co jest w this.props.state
                    initialValues={_.pick(this.props.stream, 'Title' ,'Description')}
                    onSubmit={this.onSubmit}/>
            </div>
        )
        
    }    
}

const mapStateToProps = (state,ownProps) => {
    //console.log(ownProps)
    return {
        stream: state.streams[ownProps.match.params.anything]
    }

}

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);