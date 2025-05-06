import { useEffect, useState } from 'react';

function TimerFunc() {
    
    const [count, setCount] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);


    const componentLoaded = () => {
        debugger;
        console.log('Func Component mounted');

        return () => {
            console.log('Func Component will unmount');
        }
    }

    // component mounted..
    // ====> componentDidMount()
    // ====> componentDidUnMount()
    
    useEffect(componentLoaded, []); // Empty dependency array ensures this runs only on mount/unmount


    // component updated..
    // ====> componentDidUpdate()
    useEffect(() => {
        console.log(`Component did update!!..`);
    }, [count, isAdmin]); // Runs when count changes
   
   

    return <>
         <p>Timer is running...</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <p>Count: {count}</p>
        <button onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin</button>
        <p>Is Admin: {isAdmin ? 'Yes' : 'No'}</p>
        </>;

}

export default TimerFunc;
