import { combineReducers } from 'redux'

const songReducer = () => {
    return [
        { title: 'Atlas Rise' , duration: '4:05'},
        { title: 'Mama' , duration: '6:15'},
        { title: 'Riders on the storm' , duration: '2:54'},
        { title: 'Summertime' , duration: '1:43'}
    ];
}

const selectedSongReducer = (selectedSong=null,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}
const deletedSongReducer = (selectedSong=null,action) => {
    if(action.type === 'SONG_DELETED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
    deletedSong: deletedSongReducer
})