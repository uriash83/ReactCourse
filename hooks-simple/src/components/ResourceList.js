import React from 'react';
import useResources from './useResources'


const  ResourceList = ({resource}) => {
    //console.log(props)
    
    /*
    
    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        setResources(response.data)
    }
    */
    
     
    // hooks sprawdza zawartość [] jeśli sie zmieniła to renderuj
    // jeśli nie podamy 2 argumentu z tablicą to będzie się cały czas wywoływało
    // if we pass in array object and second time the same object ()=> we be call

    const resources = useResources(resource)
        return(
            <ul>
                {resources.map(record => <li key={record.id}>{record.title}</li>)}
            </ul>
        );
    
}

export default ResourceList;