import React from 'react';
import loadingGif from './assets/BI-load.gif'; // Update the path to your GIF

const Loading = () => {
    return (
        <div className="loading-container">
            <img src={loadingGif} alt="Loading..." />
        </div>
    );
};

export default Loading;
