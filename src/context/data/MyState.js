import React, { useState } from 'react';
import myContext from './MyContext';
const MyState = (props) => {
    const [mode, setMode] = useState('Light')
    const toggleMode = () => {
        if (mode === 'Light') {
            setMode('dark')
            document.body.style.backgroundColor = "rgb(17,24,39)"
        } else {
            setMode('Light')
            document.body.style.backgroundColor = "white"
        }
    }
    return (
        <div>
            <myContext.Provider value={{ mode, toggleMode }} >
                {props.children}
            </myContext.Provider>

        </div>
    );
}

export default MyState;
