import React from 'react';
import { connect } from 'react-redux';
import { signIn , signOut } from '../actions'

class GoogleAuth extends React.Component {

    
    componentDidMount(){
        window.gapi.load('client:auth2' , ()=> {
            window.gapi.client.init({
                clientId: '376450185515-r1l2nv2m6eg0lfv6l6epue449sltr876.apps.googleusercontent.com',
                scope: 'profile' 
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get()) //update state in reduxstore
                this.auth.isSignedIn.listen(this.onAuthChange)
            }).catch();
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId()) // call action creator
        }
        else{
            this.props.signOut()
        }
    }


    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null
        }else if(this.props.isSignedIn){
            return(
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    SignOut
                </button>
            )
        }
        else{
        return(
             <button onClick={this.onSignInClick} className="ui green google button">
             <i className="google icon"/>
                SignIn
             </button>
        )
        }
    }
        render() {

        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);