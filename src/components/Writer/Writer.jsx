import React, { useEffect, useRef, useState } from 'react'
import './styles.scss';

const Writer = () => {
    const word = "ALLL YOUR BASE ARE BELONG TO US!";
    const [tw, setTw] = useState('');
    const counter = useRef(0);

    // useEffect(() => {
    //     counter.current = 0;
    //     setTw("");
    // }, [tw])

    useEffect(() => {
        const timeId = setTimeout(() => {
            setTw((val) => val + word.charAt(counter.current))
            counter.current = counter.current + 1;
        }, 150);

        return () => {
            clearTimeout(timeId);
        }
    }, [tw, word])
    
    return (
        <h3 className='flerp'>{ tw }</h3>
    )
}

export default Writer