import React from 'react';
import SongList from './SongList'
import SongDetail from './SongDetails'
//import {selectSong} from '../actions';
// named export need {}
// default export dont need {}

const App = () => {
    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetail/>
                </div>
            </div>
        </div>
    );
};

export default App;