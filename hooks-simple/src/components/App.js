import React ,{ useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'

const App = () => {
    const [resource,setResource] = useState('posts')
    // useState zwraca tablice z dwoma elementami , pierwsze jest zapiswyany do resource , drugi fo setResource
    // można tylko zapisywać tylko 2 wartość a nie obiekt jak było w state
    return(
        <div>
            <UserList/>
            <div>
                <button onClick={()=> setResource('posts')}>Posts</button>
                <button onClick={()=> setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    );
    
}


export default App;