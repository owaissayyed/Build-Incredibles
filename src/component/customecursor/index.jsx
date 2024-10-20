import React, { useEffect, useState } from 'react';
import { useTheme } from '../../themeContext'; // Adjust the path as needed
import './customecursor.css'; // Ensure this CSS file exists

const CustomCursor = () => {
    const [cursorStyle, setCursorStyle] = useState({});
    const { theme } = useTheme(); // Get the current theme

    const handleMouseMove = (e) => {
        setCursorStyle({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div 
            className={`custom-cursor ${theme}`} 
            style={cursorStyle} 
        ></div>
    );
};

export default CustomCursor;
