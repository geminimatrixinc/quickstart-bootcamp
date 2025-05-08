// Example 2: Using useEffect
import React, { useState, useEffect } from 'react';

function DataFetching() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((ex) => {  
                setError(true)
                console.log(ex)})
    }, []);

  
    
    return (
        <div>
            <h2>Posts</h2>
            {
                error ? 
                    <div>There is an error</div>
                    :
                    <ul>
                        {data.map((post) => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
            }

           
        </div>
    );
}

export default DataFetching;