
import { useState } from 'react';

import './styles/box.css';

// Dynamic Styling with Conditional className

// You can dynamically apply classes based on conditions:

function JsxDynamicStyle() {

    const [isActive, setIsActive] = useState(false);
    // isActive = false..true
    return (
        <>
            
            <div className={isActive ? 'my-box active' : 'my-box'}>
                This box has dynamic classes!
            </div>
            <button onClick={() => setIsActive(!isActive)}>Toggle State</button>
        </>
    );
}

export default JsxDynamicStyle;
