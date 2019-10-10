import React,{ Component } from 'react'
import{ connect } from 'react-redux'
import { selectSong , deleteSong} from '../actions';
//connect używamy tam gdzie chcemy ba nasz component był connect to state
class SongList extends Component {
    
    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <div 
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(song)}
                        >
                            Select
                        </div>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }
    
    render(){
        
        return(
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }

}

// this has not have name mapStateToProps
const mapStateToProps = (state) => {
    console.log(state)
    return {
        songs: state.songs // this.props === songs: state.props , 
        // songs: state.prop => nie musi być nazwa songs
    }
    //return state zwraca cały obiekt który zdefiniowaliśmy w combineReducers
}

export default connect(mapStateToProps,{
    selectSong: selectSong,
    deleteSong: deleteSong
    
})(SongList); // to wszystko co jest w connect() jest jako state