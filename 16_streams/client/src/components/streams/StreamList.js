import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {fetchStreams} from '../../actions'

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderList() {
        return this.props.streams.map( stream => {
            return(
                <div className='item' key={stream.id}>
                     <div>{this.renderAdmin(stream)}</div>
                    <i className='large middle aligned icon camera'/>
                    <div className="content">
                        {stream.Title}
                        <div className="description">
                            {stream.Description}
                        </div>                       
                    </div>
                </div>
            )
        });
    }

    renderAdmin(stream){
        if(stream.userId === this.props.currentUserID){
            return(
                <div className="right floated content">
                    <button className="ui button primary">
                        Edit
                    </button>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            )
        }
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    render() {
        
        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>  
                {this.renderCreate()}  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserID: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);