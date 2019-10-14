import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {

    componentDidMount(){
        this.props.fetchUser(this.props.userId)
        
        
    }
    render() {
        
        const {user }= this.props; // to jest desctructor równy:  const user = this.props.user
        if(!user){
            return null;    
        }
        return<div className='header'>{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => { // mapState to nie ma dostepu do props classy bo jest poza nią 
    return { // jednak dzieki ownProps ma dostęp , ownProps jest referencją do this.props classy
        user: state.users.find(user => user.id === ownProps.userId)
    }
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);