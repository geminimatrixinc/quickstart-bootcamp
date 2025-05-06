import { useEffect } from 'react';

function TimerFunc() {
    
    const isToggled = false;

    function handleLoad() {
        console.log('Component mounted');

        return () => {
            console.log('Component will unmount');
        };
    }
    useEffect(handleLoad, []); // Empty dependency array ensures 
            // this runs only on mount/unmount



    return <p>Timer is running...</p>;
}

export default TimerFunc;
